const express = require("express");
const cors = require("cors");
const { MongoClient } = require("mongodb");
var bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());
app.use(cors());
app.options("*", cors());

// Enable CORS for all routes
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "http://localhost:5173");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

const uri =
  "mongodb+srv://SA-SME:sellerappealssme@clustersa.lubfike.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

async function connectToDatabase() {
  try {
    await client.connect();
    console.log("Connected to the database");
  } catch (error) {
    console.error("Error connecting to the database", error);
  }
}

// Call this function to connect to the database
connectToDatabase();

// Schema definition
const dataSchema = {
  asin: { type: "string", required: true },
  mp: { type: "string", required: true },
  decision: { type: "string", required: true },
  comments: { type: "string" },
};

// Endpoint to retrieve data from MongoDB
app.get("/", async (req, res) => {
  try {
    const db = client.db("Saarthi");
    const collection = db.collection("seller-appeals-classification");

    const data = await collection.find().toArray();
    res.json(data);
  } catch (error) {
    console.error("Error fetching data from MongoDB", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});


// New endpoint to insert data into MongoDB
app.post("/api/addData", cors(), async (req, res) => {
  try {
    const db = client.db("Saarthi");
    const collection = db.collection("seller-appeals-classification");

    const jsonData = req.body;
    console.log("Received POST request:", req.body);
    console.log("Received JSON data:", jsonData);

    // Check if jsonData is an array and not empty
    if (!Array.isArray(jsonData) || jsonData.length === 0) {
      console.log(jsonData);
      console.error(
        "Invalid data format: JSON data is not an array or is empty"
      );
      return res.status(400).json({ error: "Invalid data format" });
    }

    // Validate data against the schema
    const isValidData = jsonData.every(
      (item) =>
        typeof item === "object" &&
        typeof item.asin === "string" &&
        typeof item.mp === "string" &&
        typeof item.decision === "string" &&
        (typeof item.comments === "string" || item.comments === undefined)
    );

    if (!isValidData) {
      console.error("Invalid data format:", jsonData);
      return res.status(400).json({ error: "Invalid data format" });
    }

    // Insert the data into the MongoDB collection
    const result = await collection.insertMany(jsonData);

    console.log("Data inserted successfully:", result);

    res.status(200).json({ message: "Data inserted successfully" });
  } catch (error) {
    console.error("Error inserting data into MongoDB:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});


var textParser = bodyParser.text();
app.post('/api/authenticate', cors(), textParser, async (req, res) => {
  const username = req.body;
  console.log(req.body);
  try {
    const db = client.db('Saarthi');
    const usersCollection = db.collection('users');

    const existingUser = await usersCollection.findOne({ loginID: username });
    console.log(existingUser);
    if (existingUser) {
      usersCollection.updateMany({ loginID: username }, { $inc: { visits: 1 } });
      return res.send('Authentication successful');
    } else {
      usersCollection.insertOne({ loginID: username, visits: 1 });
      console.log("New user inserted");
      //return res.status(401).send('Invalid username');
    }
    res.send('Request received successfully');
  } catch (error) {
    console.error('Error authenticating user:', error);
    return res.status(500).send('Internal server error');
  }
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
