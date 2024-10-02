import clientPromise from '@/lib/mongodb';

export default async function handler(req, res) {
  try {
    const client = await clientPromise;
    const db = client.db('products');
    const products = await db.collection('products').find({}).toArray();

    res.status(200).json(products);
  } catch (e) {
    console.log(e);
    res.status(500).json({ message: 'Erro ao conectar com o banco de dados.' });
  }
}
