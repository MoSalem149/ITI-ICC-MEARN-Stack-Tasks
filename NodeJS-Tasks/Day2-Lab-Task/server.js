import express from "express";
import cors from "cors";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import { validateUrl } from "safe-url-validator";
import {
  readData,
  writeData,
  createUser,
  getUserByEmail,
  getUserById,
  getBookmarks,
  getBookmarkById,
  createBookmark,
  updateBookmark,
  deleteBookmark,
  getCollections,
  getCollectionById,
  createCollection,
  updateCollection,
  deleteCollection,
} from "./bookmarkStore.js";

const JWT_SECRET = "super-secret-key-change-later";

const app = express();
app.use(cors());
app.use(express.json());

// ── Legacy bulk routes (can be removed once collections use CRUD) ──

app.get("/api/data", (req, res) => {
  res.json(readData());
});

app.put("/api/data", (req, res) => {
  const body = req.body;
  for (const bookmark of body.bookmarks || []) {
    const result = validateUrl(bookmark.url);
    if (!result.valid) {
      return res.status(400).json({ error: `Invalid URL "${bookmark.url}": ${result.error}` });
    }
  }
  writeData(body);
  res.json(body);
});

// ── Bookmark routes (new) ──
const bookmarkRouter = express.Router();

bookmarkRouter.get("/", (req, res) => {
  res.json(getBookmarks(req.query));
});

bookmarkRouter.get("/:id", (req, res) => {
  const bookmark = getBookmarkById(req.params.id);
  if (!bookmark) return res.status(404).json({ error: "Bookmark not found" });
  res.json(bookmark);
});

bookmarkRouter.post("/", (req, res) => {
  const { url, title, tags, collectionId } = req.body;
  if (!url || !title) {
    return res.status(400).json({ error: "url and title are required" });
  }
  const result = validateUrl(url);
  if (!result.valid) {
    return res.status(400).json({ error: result.error });
  }
  const bookmark = createBookmark({ url, title, tags, collectionId });
  res.status(201).json(bookmark);
});

bookmarkRouter.put("/:id", (req, res) => {
  const updated = updateBookmark(req.params.id, req.body);
  if (!updated) return res.status(404).json({ error: "Bookmark not found" });
  res.json(updated);
});

bookmarkRouter.delete("/:id", (req, res) => {
  const deleted = deleteBookmark(req.params.id);
  if (!deleted) return res.status(404).json({ error: "Bookmark not found" });
  res.json({ message: "Bookmark deleted" });
});

// ── Collection routes (new) ──
const collectionRouter = express.Router();

collectionRouter.get("/", (req, res) => {
  res.json(getCollections());
});

collectionRouter.get("/:id", (req, res) => {
  const collection = getCollectionById(req.params.id);
  if (!collection) return res.status(404).json({ error: "Collection not found" });
  res.json(collection);
});

collectionRouter.post("/", (req, res) => {
  const { name } = req.body;
  if (!name) return res.status(400).json({ error: "name is required" });
  const collection = createCollection({ name });
  res.status(201).json(collection);
});

collectionRouter.put("/:id", (req, res) => {
  const updated = updateCollection(req.params.id, req.body);
  if (!updated) return res.status(404).json({ error: "Collection not found" });
  res.json(updated);
});

collectionRouter.delete("/:id", (req, res) => {
  const deleted = deleteCollection(req.params.id);
  if (!deleted) return res.status(404).json({ error: "Collection not found" });
  res.json({ message: "Collection deleted" });
});

// ── Auth routes ──
const authRouter = express.Router();

authRouter.post("/signup", async (req, res) => {
  const { username, email, password } = req.body;
  if (!username || !email || !password) {
    return res.status(400).json({ error: "username, email and password are required" });
  }
  if (password.length < 8) {
    return res.status(400).json({ error: "Password must be at least 8 characters" });
  }
  if (getUserByEmail(email)) {
    return res.status(400).json({ error: "Email already registered" });
  }
  const hashedPassword = await bcrypt.hash(password, 10);
  const user = createUser({ username, email, hashedPassword });
  const token = jwt.sign({ id: user.id }, JWT_SECRET, { expiresIn: "7d" });
  res.status(201).json({ token, user });
});

authRouter.post("/login", async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ error: "email and password are required" });
  }
  const user = getUserByEmail(email);
  if (!user) {
    return res.status(401).json({ error: "Invalid email or password" });
  }
  const valid = await bcrypt.compare(password, user.password);
  if (!valid) {
    return res.status(401).json({ error: "Invalid email or password" });
  }
  const token = jwt.sign({ id: user.id }, JWT_SECRET, { expiresIn: "7d" });
  res.json({ token, user: { id: user.id, username: user.username, email: user.email } });
});

authRouter.get("/me", (req, res) => {
  // Ugly on purpose — "notice we're repeating this check"
  const authHeader = req.headers.authorization;
  if (!authHeader) return res.status(401).json({ error: "No token provided" });
  const token = authHeader.split(" ")[1];
  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    const user = getUserById(decoded.id);
    if (!user) return res.status(401).json({ error: "User not found" });
    res.json({ user });
  } catch {
    res.status(401).json({ error: "Invalid token" });
  }
});

// ── Mount routers ──
app.use("/api/auth", authRouter);
app.use("/api/bookmarks", bookmarkRouter);
app.use("/api/collections", collectionRouter);

app.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});
