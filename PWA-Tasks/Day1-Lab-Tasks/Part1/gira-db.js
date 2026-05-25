// IndexedDB — Gira Task Management

const STORE_NAME = "tasks";
const DB_NAME = "Gira-DB";
const DB_VERSION = 1;

// Store

function openDB() {
  return new Promise((resolve, reject) => {
    let request = indexedDB.open(DB_NAME, DB_VERSION);

    request.onupgradeneeded = (event) => {
      const db = event.target.result;
      if (!db.objectStoreNames.contains(STORE_NAME)) {
        db.createObjectStore(STORE_NAME, {
          keyPath: "id",
          autoIncrement: true,
        });
      }
    };

    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject("Error Opening DB");
  });
}

// CRUD

async function addTask(task) {
  let db = await openDB();
  return new Promise((resolve, reject) => {
    const transaction = db.transaction(STORE_NAME, "readwrite");
    const store = transaction.objectStore(STORE_NAME);
    let request = store.add(task);

    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject("Error Adding Task");
  });
}

async function getTasks() {
  let db = await openDB();
  return new Promise((resolve, reject) => {
    const transaction = db.transaction(STORE_NAME, "readonly");
    const store = transaction.objectStore(STORE_NAME);
    let request = store.getAll();

    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject("Error Reading Tasks");
  });
}

async function updateTask(updatedTask) {
  let db = await openDB();
  return new Promise((resolve, reject) => {
    const transaction = db.transaction(STORE_NAME, "readwrite");
    const store = transaction.objectStore(STORE_NAME);
    let request = store.put(updatedTask);

    request.onsuccess = () => resolve("Successfully Updated Task");
    request.onerror = () => reject("Error Updating Task");
  });
}

async function deleteTask(id) {
  let db = await openDB();
  return new Promise((resolve, reject) => {
    const transaction = db.transaction(STORE_NAME, "readwrite");
    const store = transaction.objectStore(STORE_NAME);
    let request = store.delete(id);

    request.onsuccess = () => resolve("Successfully Deleted Task");
    request.onerror = () => reject("Error Deleting Task");
  });
}
