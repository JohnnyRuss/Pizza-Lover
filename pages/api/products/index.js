import dbConnect from '../../../lib/db';
import Product from '../../../models/Product';

export default async function handler(req, res) {
  const { method, body } = req;

  await dbConnect();

  if (method === 'GET') {
    try {
      const products = await Product.find();
      res.status(200).json({ status: 'success', data: products });
    } catch (error) {
      res.status(500).json(error);
    }
  }

  if (method === 'POST') {
    try {
      const product = await Product.create(body);
      res.status(201).json({ status: 'success', data: product });
    } catch (error) {
      res.status(500).json(error);
    }
  }
}
