import express from 'express';
import cors from 'cors';
import { MongoClient, ServerApiVersion, ObjectId } from 'mongodb';
import dotenv from 'dotenv';

dotenv.config()

const app = express();
const PORT = process.env.PORT || 5000;
const MONGODB_URI = process.env.MONGODB_URI || process.env.MONGODB_URI;
const CLIENT_URL = process.env.CLIENT_URL || "*";

app.use(cors({ origin: CLIENT_URL }));

const client = new MongoClient(MONGODB_URI, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

app.use((req, res, next) => {
  req.db = client.db('jlptexplorer');
  next();
});

app.get('/api/grammar-points/:jlptLevel', async (req, res) => {
  const { jlptLevel } = req.params;
  
  try {
    const collection = req.db.collection(`grammar_points_${jlptLevel.toLowerCase()}`);
    const documents = await collection.find({}).sort({ title: 1 }).toArray();
    res.json(documents);
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.get('/api/grammar-points/:jlptLevel/:id', async (req, res) => {
  const { id, jlptLevel } = req.params;

  try {
    const collection = req.db.collection(`grammar_points_${jlptLevel.toLowerCase()}`);
    const document = await collection.findOne({ _id: new ObjectId(id) });

    if (!document) {
      res.status(404).json({ error: 'Grammar point not found' });
    } else {
      res.json(document);
    }
  } catch (error) {
    console.error('Error fetching grammar point:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(PORT, async () => {
  try {
    await client.connect();
    console.log(`Server is running on port ${PORT}`);
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
  }
});

process.on('SIGINT', async () => {
  try {
    await client.close();
    console.log('MongoDB connection closed.');
    process.exit(0);
  } catch (error) {
    console.error('Error closing MongoDB connection:', error);
    process.exit(1);
  }
});
