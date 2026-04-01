import fs from "fs";
import crypto from "crypto";

const DATA_FILE = "./bookmarks.json";

// ── Bulk read/write (legacy — can be removed once all routes use CRUD) ──

export function readData() {
  const raw = fs.readFileSync(DATA_FILE, "utf-8");
  return JSON.parse(raw);
}

export function writeData(data) {
  fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2));
}

// ── Users ──

export function createUser({ username, email, hashedPassword }) {
  const data = readData();
  const user = { id: crypto.randomUUID(), username, email, password: hashedPassword };
  data.users.push(user);
  writeData(data);
  return { id: user.id, username: user.username, email: user.email };
}

export function getUserByEmail(email) {
  return readData().users.find((u) => u.email === email);
}

export function getUserById(id) {
  const user = readData().users.find((u) => u.id === id);
  if (!user) return null;
  return { id: user.id, username: user.username, email: user.email };
}

// ── Bookmark CRUD ──

export function getBookmarks({ q, tag, collectionId } = {}) {
  let bookmarks = readData().bookmarks;

  if (collectionId) {
    bookmarks = bookmarks.filter((b) => b.collectionId === collectionId);
  }

  if (q) {
    const query = q.toLowerCase();
    bookmarks = bookmarks.filter((b) => b.title.toLowerCase().includes(query));
  }

  if (tag) {
    const tags = tag.toLowerCase().split(",").map((t) => t.trim()).filter(Boolean);
    bookmarks = bookmarks.filter((b) =>
      tags.some((t) => b.tags.some((bt) => bt.toLowerCase().includes(t)))
    );
  }

  return bookmarks;
}

export function getBookmarkById(id) {
  return readData().bookmarks.find((b) => b.id === id);
}

export function createBookmark({ url, title, tags, collectionId }) {
  const data = readData();
  const bookmark = {
    id: crypto.randomUUID(),
    url,
    title,
    tags: tags || [],
    collectionId: collectionId || null,
  };
  data.bookmarks.push(bookmark);
  writeData(data);
  return bookmark;
}

export function updateBookmark(id, fields) {
  const data = readData();
  const index = data.bookmarks.findIndex((b) => b.id === id);
  if (index === -1) return null;
  data.bookmarks[index] = { ...data.bookmarks[index], ...fields };
  writeData(data);
  return data.bookmarks[index];
}

export function deleteBookmark(id) {
  const data = readData();
  const index = data.bookmarks.findIndex((b) => b.id === id);
  if (index === -1) return false;
  data.bookmarks.splice(index, 1);
  writeData(data);
  return true;
}

// ── Collection CRUD ──

export function getCollections() {
  return readData().collections;
}

export function getCollectionById(id) {
  const data = readData();
  const collection = data.collections.find((c) => c.id === id);
  if (!collection) return null;
  const bookmarks = data.bookmarks.filter((b) => b.collectionId === id);
  return { ...collection, bookmarks };
}

export function createCollection({ name }) {
  const data = readData();
  const collection = { id: crypto.randomUUID(), name };
  data.collections.push(collection);
  writeData(data);
  return collection;
}

export function updateCollection(id, fields) {
  const data = readData();
  const index = data.collections.findIndex((c) => c.id === id);
  if (index === -1) return null;
  data.collections[index] = { ...data.collections[index], ...fields };
  writeData(data);
  return data.collections[index];
}

export function deleteCollection(id) {
  const data = readData();
  const index = data.collections.findIndex((c) => c.id === id);
  if (index === -1) return false;
  data.collections.splice(index, 1);
  data.bookmarks.forEach((b) => {
    if (b.collectionId === id) b.collectionId = null;
  });
  writeData(data);
  return true;
}
