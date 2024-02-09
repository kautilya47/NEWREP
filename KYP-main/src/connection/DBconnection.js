const { MongoClient } = require('mongodb');

const uri = 'mongodb+srv://SA-SME:sellerappealssme@clustersa.lubfike.mongodb.net/?retryWrites=true&w=majority';
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

// Connect to the MongoDB database
async function connectToDatabase() {
    try {
        await client.connect();
        console.log('Connected to the database');
    } catch (error) {
        console.error('Error connecting to the database', error);
    }
}

// Call this function to connect to the database
connectToDatabase();