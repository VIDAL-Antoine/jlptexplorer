import express from 'express';
import cors from 'cors';
import { MongoClient, ServerApiVersion, ObjectId } from 'mongodb';

const app = express();
const port = 5000;

app.use(cors());

const uri = process.env.MONGODB_URI;

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

app.get('/api/grammar-points/:jlptLevel', async (req, res) => {
  const { jlptLevel } = req.params;
  
  try {
    await client.connect();
    const database = client.db("game_gramexplorer");
    const collection = database.collection(`grammar_points_${jlptLevel.toLowerCase()}`);
    const documents = await collection.find({}).toArray();
    res.json(documents);
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  } finally {
    await client.close();
  }
});

app.get('/api/grammar-points/:jlptLevel/:id', async (req, res) => {
  const { id, jlptLevel } = req.params;

  try {
    await client.connect();
    const database = client.db('game_gramexplorer');
    const collection = database.collection(`grammar_points_${jlptLevel.toLowerCase()}`);
    const document = await collection.findOne({ _id: new ObjectId(id) });

    if (!document) {
      res.status(404).json({ error: 'Grammar point not found' });
    } else {
      res.json(document);
    }
  } catch (error) {
    console.error('Error fetching grammar point:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  } finally {
    await client.close();
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});