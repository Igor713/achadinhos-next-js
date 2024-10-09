import clientPromise from '@/lib/connectToDatabase ';
import { ObjectId } from 'mongodb';

export default async function hanlder(req, res) {
  if (req.method === 'POST') {
    const { productId } = req.body;

    if (!productId) {
      res.status(400).json({ message: 'ID do produto não fornecido' });
    }

    try {
      const client = await clientPromise;
      const db = client.db('products');

      const response = await db
        .collection('products')
        .updateOne({ _id: new ObjectId(productId) }, { $inc: { clicks: 1 } });

      console.log(response);

      if (response.modifiedCount > 0) {
        return res
          .status(200)
          .json({ message: 'Clique registrado com sucesso!' });
      } else {
        return res.status(404).json({ message: 'Produto não encontrado' });
      }
    } catch (e) {
      return res.status(500).json({ message: 'Erro ao registrar o clique', e });
    }
  }
}
