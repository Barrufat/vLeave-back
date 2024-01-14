import "dotenv/config";
import express from "express";
import app from "./app.js";
import pingRouter from "../ping/router/PingRouter.js";
import morgan from "morgan";

app.use(morgan("dev"));

app.use(express.json());

app.use("/", pingRouter);
