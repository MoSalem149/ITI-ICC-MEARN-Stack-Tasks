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

// ── Bookmark CRUD ──

export function getBookmarks() {
  return readData().bookmarks;
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
// TODO: implement these five functions and export them.
// Use the bookmark functions above as a reference for the pattern.
//
//   getCollections()            → return the collections array
//   getCollectionById(id)       → find a collection by id, return it along
//                                 with its bookmarks (filter bookmarks where
//                                 collectionId === id). Return null if not found.
//   createCollection({ name }) → create a new collection with a random UUID
//                                 and the given name, save, return it.
//   updateCollection(id, fields) → merge fields into existing collection,
//                                   save, return updated. Return null if not found.
//   deleteCollection(id)       → remove the collection AND set collectionId
//                                 to null on any bookmarks that belonged to it.
//                                 Return false if not found.

export function getCollections() {
  const data = readData();
  return data.collections;
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
  const collection = {
    id: crypto.randomUUID(),
    name,
  };
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

  data.bookmarks = data.bookmarks.map((b) =>
    b.collectionId === id ? { ...b, collectionId: null } : b,
  );

  writeData(data);
  return true;
}
