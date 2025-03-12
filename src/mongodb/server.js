const express = require("express");
const connectDB = require("./db");
const cors = require("cors");
const bcrypt = require("bcryptjs"); // For password hashing

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json()); // Middleware to parse JSON
app.use(cors()); // Enable CORS for frontend access

async function startServer() {
    const db = await connectDB();
    const usersCollection = db.collection("users");

    // ✅ User Registration API
    app.post("/api/register", async (req, res) => {
        try {
            const { name, email, password } = req.body;

            // Check if user already exists
            const existingUser = await usersCollection.findOne({ email });
            if (existingUser) {
                return res.status(400).json({ error: "User already exists" });
            }

            // Hash the password before storing it
            const salt = await bcrypt.genSalt(10);
            const hashedPassword = await bcrypt.hash(password, salt);

            // Insert user into database
            const result = await usersCollection.insertOne({
                name,
                email,
                password: hashedPassword,
            });

            res.status(201).json({ message: "User registered successfully", data: result });
        } catch (error) {
            res.status(500).json({ error: "Registration failed", details: error });
        }
    });

    app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
}

startServer();
