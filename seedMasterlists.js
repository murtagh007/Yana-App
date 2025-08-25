const admin = require("firebase-admin");
const fs = require("fs");

const serviceAccount = require("./serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();

async function seedFromFile(filePath, collectionName) {
  const data = fs.readFileSync(filePath, "utf-8").split("\n").map(l => l.trim()).filter(Boolean);

  for (let id of data) {
    await db.collection(collectionName).doc(id).set({
      active: true,
      assignedTo: null,
      lastUpdated: admin.firestore.FieldValue.serverTimestamp()
    });
    console.log(`✅ Added ${id} to ${collectionName}`);
  }
}

(async () => {
  await seedFromFile("scootyid.txt", "scooters");
  await seedFromFile("batteryid.txt", "batteries");
  console.log("🎉 Seeding completed!");
  process.exit();
})();
