import { type ItemStructure } from "../types";

export interface ItemsRepository {
  getItems: () => Promise<ItemStructure[]>;
}
