import type { NextFunction, Request, Response } from "express";
import type ItemsMongooseRepository from "../../repository/ItemsMongooseRepository";
import ItemsController from "../ItemsController";
import { itemsMock } from "../../mocks/itemsMock";

beforeEach(() => {
  jest.restoreAllMocks();
});

describe("Given a ItemsController's getItems function", () => {
  describe("When it recives a response", () => {
    const req = {};
    const res: Pick<Response, "status" | "json"> = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn().mockReturnThis(),
    };
    const next: NextFunction = jest.fn();

    const itemsRepository: Pick<ItemsMongooseRepository, "getItems"> = {
      getItems: jest.fn().mockReturnValue(itemsMock),
    };

    const itemsController = new ItemsController(
      itemsRepository as ItemsMongooseRepository,
    );

    test("Then it should call the response status method with a 200", async () => {
      const expectedStatusCode = 200;

      await itemsController.getItems(req as Request, res as Response, next);

      expect(res.status).toHaveBeenCalledWith(expectedStatusCode);
    });

    test("Then it should call the json method with all the Items of the database", async () => {
      const expectedItems = { items: itemsMock };

      await itemsController.getItems(req as Request, res as Response, next);

      expect(res.json).toHaveBeenCalledWith(expectedItems);
    });
  });
});
