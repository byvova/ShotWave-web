require('dotenv').config();
const { MongoClient, ServerApiVersion } = require('mongodb');

const uri = process.env.MONGODB_URI;
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

async function connectDB() {
    try {
        await client.connect();
        console.log("Successfully connected to MongoDB!");
        return client.db("usersDB"); // Change "usersDB" to your actual DB name
    } catch (error) {
        console.error("MongoDB connection error:", error);
        process.exit(1);
    }
}

module.exports = connectDB;
