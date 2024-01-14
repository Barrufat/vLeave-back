import { Schema, model } from "mongoose";
import { type ItemStructureWithId } from "../types";

const itemSchema = new Schema<ItemStructureWithId>({
  collection: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  detailImages: {
    type: [String],
    required: true,
  },
  isAvaliable: {
    type: Boolean,
    required: true,
  },
  mainImage: {
    type: String,
    requierd: true,
  },
  model3D: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  stock: {
    type: Number,
    requierd: true,
  },
  type: {
    type: String,
    required: true,
  },
});

const Item = model("Item", itemSchema, "items");

export default Item;
