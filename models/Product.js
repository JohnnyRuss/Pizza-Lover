import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const ProductSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      maxlength: 60,
    },
    description: {
      type: String,
      required: true,
      maxlength: 200,
    },
    image: {
      type: String,
      required: true,
    },
    prices: {
      type: {
        small: Number,
        big: Number,
        large: Number,
      },
    },
    extra: {
      type: [
        {
          text: {
            type: String,
            required: true,
          },
          price: {
            type: Number,
            required: true,
          },
        },
      ],
    },
  },
  { timestamps: true }
);

export default mongoose.models.Product || model('Product', ProductSchema);
