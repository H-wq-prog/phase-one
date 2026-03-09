require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");

const app = express();
app.use(express.json());

const port = process.env.PORT || 3000;
async function dbconnection() {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("MongoDB connected!");

    } catch (err) {
        console.log(err);

    }
}

dbconnection();

// Require Routes
const authRoutes = require("./routes/authRoutes");
const habitRoutes = require("./routes/habitRoutes");

// Endpoints
app.use("/api/auth", authRoutes);
app.use("/api/habits", habitRoutes);



// Run Server
app.listen(port, () => {
    console.log(`server running at port ${port}`);
})