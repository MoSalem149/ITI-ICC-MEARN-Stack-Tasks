import User from "./models/User.js";
import Bookmark from "./models/Bookmark.js";
import Collection from "./models/Collection.js";

// ── Users ──

export async function createUser({ username, email, hashedPassword }) {
  const user = await User.create({ username, email, password: hashedPassword });
  return user.toJSON();
}

export async function getUserByEmail(email) {
  return User.findOne({ email });
}

export async function getUserById(id) {
  const user = await User.findById(id);
  if (!user) return null;
  return user.toJSON();
}

// ── Bookmark CRUD ──

export async function getBookmarks({ q, tag, collectionId, userId } = {}) {
  const filter = {};

  if (userId) filter.owner = userId;
  if (collectionId) filter.collectionId = collectionId;

  if (q) {
    filter.$text = { $search: q };
  }

  if (tag) {
    const tags = tag
      .toLowerCase()
      .split(",")
      .map((t) => t.trim())
      .filter(Boolean);
    filter.tags = { $in: tags };
  }

  return Bookmark.find(filter).sort({ createdAt: -1 });
}

export async function getBookmarkById(id) {
  return Bookmark.findById(id);
}

export async function createBookmark({
  url,
  title,
  tags,
  collectionId,
  userId,
}) {
  return Bookmark.create({
    url,
    title,
    tags: tags || [],
    collectionId: collectionId || null,
    owner: userId,
  });
}

export async function updateBookmark(id, fields, userId) {
  return Bookmark.findOneAndUpdate({ _id: id, owner: userId }, fields, {
    new: true,
    runValidators: true,
  });
}

export async function deleteBookmark(id, userId) {
  const result = await Bookmark.findOneAndDelete({ _id: id, owner: userId });
  return !!result;
}

// ── Collection CRUD ──

// TODO: Implement getCollections(userId)
//   - Use Collection.find() to return only collections owned by the given userId
//   - Hint: filter by { owner: userId }
export async function getCollections(userId) {
  // TODO: query the database for collections belonging to this user
  return Collection.find({ owner: userId });
}

// TODO: Implement getCollectionById(id, userId)
//   - Find the collection by id AND owner (userId) using Collection.findOne()
//   - If not found, return null
//   - Also fetch all bookmarks in this collection using Bookmark.find({ collectionId: id })
//   - Return the collection data merged with its bookmarks: { ...collection.toJSON(), bookmarks }
export async function getCollectionById(id, userId) {
  // TODO: query the database for this collection (verify ownership)
  const collection = await Collection.findOne({ _id: id, owner: userId });
  if (!collection) return null;
  // TODO: fetch bookmarks belonging to this collection
  const bookmarks = await Bookmark.find({ collectionId: id });
  // TODO: return merged result
  return { ...collection.toJSON(), bookmarks };
}

// TODO: Implement createCollection({ name, userId })
//   - Use Collection.create() with both the name and owner set to userId
export async function createCollection({ name, userId }) {
  // TODO: create a new collection in the database with the owner field
  return Collection.create({ name, owner: userId });
}

// TODO: Implement updateCollection(id, fields, userId)
//   - Use Collection.findOneAndUpdate() filtering by both _id and owner (userId)
//   - Pass { new: true, runValidators: true } as options
export async function updateCollection(id, fields, userId) {
  // TODO: update the collection (verify ownership)
  return Collection.findOneAndUpdate({ _id: id, owner: userId }, fields, {
    new: true,
    runValidators: true,
  });
}

// TODO: Implement deleteCollection(id, userId)
//   - Use Collection.findOneAndDelete() filtering by both _id and owner (userId)
//   - If deleted, also nullify collectionId on related bookmarks:
//     await Bookmark.updateMany({ collectionId: id }, { collectionId: null })
//   - Return true if deleted, false otherwise
export async function deleteCollection(id, userId) {
  // TODO: delete the collection (verify ownership)
  const res = await Collection.findOneAndDelete({ _id: id, owner: userId });
  // TODO: set collectionId to null on bookmarks that belonged to this collection
  if (res) {
    await Bookmark.updateMany({ collectionId: id }, { collectionId: null });
    return true;
  }
  return false;
}
