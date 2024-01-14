import Item from "../model/Item.js";
import { type ItemStructure } from "../types";
import { type ItemsRepository } from "./types";

class ItemsMongooseRepository implements ItemsRepository {
  async getItems(): Promise<ItemStructure[]> {
    const items = await Item.find().limit(10);
    return items;
  }
}

export default ItemsMongooseRepository;
