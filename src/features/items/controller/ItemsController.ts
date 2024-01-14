import type { NextFunction, Request, Response } from "express";
import { type ItemsRepository } from "../repository/types";

class ItemsController {
  constructor(private readonly itemsRepository: ItemsRepository) {}

  getItems = async (
    _req: Request,
    res: Response,
    _next: NextFunction,
  ): Promise<void> => {
    const items = await this.itemsRepository.getItems();

    res.status(200).json({ items });
  };
}

export default ItemsController;
