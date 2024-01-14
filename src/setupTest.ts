import { MongoMemoryServer } from "mongodb-memory-server";
import mongoose from "mongoose";
import "dotenv/config";
import "./server/index.js";
import { connectToDatabase } from "./database/index.js";

export let server: MongoMemoryServer;

const serverConnection = async () => {
  try {
    server = await MongoMemoryServer.create();
  } catch {
    server = await MongoMemoryServer.create();
  }
};

beforeAll(async () => {
  await serverConnection();

  const mongoUrl = server.getUri();
  await connectToDatabase(mongoUrl);
});

afterAll(async () => {
  await mongoose.disconnect();
  await server.stop();
});
