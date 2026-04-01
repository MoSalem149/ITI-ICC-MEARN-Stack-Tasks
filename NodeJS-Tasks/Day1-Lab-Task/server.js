import express from "express";
import cors from "cors";
import { validateUrl } from "safe-url-validator";
import {
  readData,
  writeData,
  getBookmarks,
  getBookmarkById,
  createBookmark,
  updateBookmark,
  deleteBookmark,
} from "./bookmarkStore.js";

// TODO: import your collection store functions here
import {
  getCollections,
  getCollectionById,
  createCollection,
  updateCollection,
  deleteCollection,
} from "./bookmarkStore.js";

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
      return res
        .status(400)
        .json({ error: `Invalid URL "${bookmark.url}": ${result.error}` });
    }
  }
  writeData(body);
  res.json(body);
});

// ── Bookmark routes (new) ──
const bookmarkRouter = express.Router();

bookmarkRouter.get("/", (req, res) => {
  res.json(getBookmarks());
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

// ── Collection routes ──
// TODO: create a collectionRouter using express.Router()
// TODO: implement these five endpoints:
//   GET    /           → return all collections
//   GET    /:id        → return one collection (with its bookmarks), 404 if missing
//   POST   /           → create a collection (require "name" in body), return 201
//   PUT    /:id        → update a collection by id, 404 if missing
//   DELETE /:id        → delete a collection by id, 404 if missing
//
// Hint: look at bookmarkRouter above for the pattern to follow.

const collectionRouter = express.Router();

collectionRouter.get("/", (req, res) => {
  res.json(getCollections());
});

collectionRouter.get("/:id", (req, res) => {
  const collection = getCollectionById(req.params.id);
  if (!collection)
    return res.status(404).json({ error: "Collection not found" });
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

// ── Mount routers ──
app.use("/api/bookmarks", bookmarkRouter);
// TODO: mount your collectionRouter on "/api/collections"

app.use("/api/collections", collectionRouter);

app.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});
