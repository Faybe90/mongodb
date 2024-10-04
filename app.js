// Importer le module MongoDB
const { MongoClient, ObjectId } = require("mongodb");

// URL de connexion (localhost)
const url = "mongodb://localhost:27017";

// Nom de la base de données
const dbName = "contactlist"; // Base de données correcte

// Créer un client MongoDB
const client = new MongoClient(url);

async function run() {
  try {
    // Connexion au serveur MongoDB
    await client.connect();
    console.log("Connecté à MongoDB");

    // Sélectionner la base de données et la collection
    const db = client.db(dbName);
    const collection = db.collection("contacta"); // Nom de la collection

    // === AJOUTER LES OPÉRATIONS CI-DESSOUS ===

    // Opérations CRUD ici
    const updatedContacts = await collection.find().toArray();
    console.log("Liste mise à jour des contacts :", updatedContacts);
  } catch (error) {
    console.error("Erreur de connexion à MongoDB :", error);
  } finally {
    // Fermer la connexion
    await client.close();
  }
}

run().catch(console.dir);
