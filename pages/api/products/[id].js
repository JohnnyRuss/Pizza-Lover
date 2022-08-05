import dbConnect from '../../../lib/db';
import Product from '../../../models/Product';

export default async function handler(req, res) {
  //prettier-ignore
  const { method, query:{id} } = req;

  await dbConnect();

  if (method === 'GET') {
    try {
      const product = await Product.findById(id);
      res.status(200).json({ status: 'success', data: product });
    } catch (err) {
      res.status(500).json(err);
    }
  }

  if (method === 'PUT') {
    try {
      const product = await Product.findByIdAndUpdate(id, req.body, {
        new: true,
      });
      res.status(200).json({ status: 'success', data: product });
    } catch (err) {
      res.status(500).json(err);
    }
  }

  if (method === 'DELETE') {
    try {
      await Product.findByIdAndDelete(id);
      res.status(204).json({ status: 'success', message: 'The product has been deleted!' });
    } catch (err) {
      res.status(500).json(err);
    }
  }
}
