const STORE_NAME = "products";
const DB_NAME = "Mearn-DB";
const DB_VERSION = 1;

// Store

function openDB() {
  return new Promise((resolve, reject) => {
    let request = indexedDB.open(DB_NAME, 1);
    request.onupgradeneeded = (event) => {
      const db = event.target.result;
      if (!db.objectStoreNames.contains(STORE_NAME)) {
        let store = db.createObjectStore(STORE_NAME, {
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

async function addData(product) {
  let db = await openDB();
  const transaction = db.transaction(STORE_NAME, "readwrite");
  const store = transaction.objectStore(STORE_NAME);
  store.add(product);
  return transaction.result;
}

// addData({ title: "TV", price: 1000 })
//   .then(() => {
//     console.log("successfully added Data");
//   })
//   .catch((err) => console.log(err));

async function getData() {
  let db = await openDB();
  return new Promise((resolve, reject) => {
    const transaction = db.transaction(STORE_NAME, "readonly");
    const store = transaction.objectStore(STORE_NAME);
    let request = store.getAll();

    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject("Error Reading Data");
  });
}

getData()
  .then((data) => console.log(data))
  .catch((err) => console.log(err));

// Lab-1
// Update & Delete
// Caching & installable

// Update
async function updateData(updatedProduct) {
  let db = await openDB();
  return new Promise((resolve, reject) => {
    const transaction = db.transaction(STORE_NAME, "readwrite");
    const store = transaction.objectStore(STORE_NAME);
    let request = store.put(updatedProduct);

    request.onsuccess = () => resolve("Successfully Updated Data");
    request.onerror = () => reject("Error Updating Data");
  });
}

// Delete
async function deleteData(id) {
  let db = await openDB();
  return new Promise((resolve, reject) => {
    const transaction = db.transaction(STORE_NAME, "readwrite");
    const store = transaction.objectStore(STORE_NAME);
    let request = store.delete(id);

    request.onsuccess = () => resolve("Successfully Deleted Data");
    request.onerror = () => reject("Error Deleting Data");
  });
}

// Add
// addData({ title: "TV", price: 1000 })

// Read
// getData().then(d => console.log(d))

// Update
// updateData({ id: 1, title: "TV", price: 1500 })

// Delete
// deleteData(1)
