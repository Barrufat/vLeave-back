import "dotenv/config";
import express from "express";
import app from "./app.js";
import pingRouter from "../features/ping/router/PingRouter.js";
import morgan from "morgan";
import itemsRouter from "../features/items/router/ItemsRouter.js";

app.use(morgan("dev"));

app.use(express.json());

app.use("/", pingRouter);

app.use("/items", itemsRouter);
