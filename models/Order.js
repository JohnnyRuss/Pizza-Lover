import { Schema, model } from 'mongoose';

const OrderSchema = new Schema(
  {
    customer: {
      type: String,
      required: true,
      maxlength: 60,
    },
    adress: {
      type: String,
      required: true,
      maxlength: 200,
    },
    total: {
      type: Number,
      required: true,
    },
    status: {
      type: Number,
      default: 0,
    },
    method: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

export default model('Order', OrderSchema);
