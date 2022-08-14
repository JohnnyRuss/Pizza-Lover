import dbConnect from '../../../lib/db';
import Order from '../../../models/Order';

const handler = async (req, res) => {
  const {
    method,
    query: { id },
  } = req;

  await dbConnect();

  if (method === 'GET') {
    try {
      const order = await Order.findById(id);
      res.status(200).json({ status: 'success', data: order });
    } catch (error) {
      res.status(500).json({ status: 'fail', error });
    }
  }
  if (method === 'PUT') {
  }
  if (method === 'DELETE') {
  }
};

export default handler();
