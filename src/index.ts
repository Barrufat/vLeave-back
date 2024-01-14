import "dotenv/config";
import debugCreator from "debug";
import chalk from "chalk";
import "./server/index.js";
import { connectToDatabase } from "./database/index.js";
import { startServer } from "./server/app.js";

const debug = debugCreator("root");

const port = process.env.PORT ?? 4000;

if (!process.env.MONGODB_URL) {
  debug(chalk.red("Missing MongoDBconnection"));
  process.exit();
}

const mongoUrl = process.env.MONGODB_URL;

await connectToDatabase(mongoUrl);
startServer(+port);
