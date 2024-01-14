import { Router } from "express";
import ItemsController from "../controller/ItemsController.js";
import ItemsMongooseRepository from "../repository/ItemsMongooseRepository.js";

const itemsRouter = Router();

const itemsRepository = new ItemsMongooseRepository();

const itemsController = new ItemsController(itemsRepository);

itemsRouter.get("/", itemsController.getItems);

export default itemsRouter;
