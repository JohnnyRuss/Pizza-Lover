import dbConnect from '../../../lib/db';
import Order from '../../../models/Order';

const handler = async (req, res) => {
  const { method } = req;

  await dbConnect();

  if (method === 'GET') {
    try {
      const orders = await Order.find();
      res.status(200).json({ status: 'success', data: orders });
    } catch (error) {
      res.status(500).json({ status: 'fail', error });
    }
  }

  if (method === 'POST') {
    try {
      const order = await Order.create(req.body);
      res.status(201).json({ status: 'success', data: order });
    } catch (error) {
      res.status(500).json({ status: 'fail', error });
    }
  }
};

export default handler();
