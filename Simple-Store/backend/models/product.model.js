import { Model, Schema } from "mongoose";

const productSchema = Schema.create(
  {
    name: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
  },
  { timestamps: true } // createdAt and updatedAt
);

const Product = Model("Product", productSchema);

export default Product;
