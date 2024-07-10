// /utils/mongodb.js
import { MongoClient } from 'mongodb';

const client = new MongoClient(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

async function connectToDatabase() {
  if (!client.isConnected()) await client.connect();
  const db = client.db('test'); // Substitua pelo nome do seu banco de dados
  return { db, client };
}

export { connectToDatabase };
