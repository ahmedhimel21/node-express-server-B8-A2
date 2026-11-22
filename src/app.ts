import express, { type Express, type Request, type Response } from "express";
import config from "./config";
import { demoRoute } from "./modules/demo/demo.route";

const app: Express = express();

//middleware for parsing json
app.use(express.json());

//routes
app.use(`${config.base_url}/demo`, demoRoute);

app.get("/", (req: Request, res: Response) => {
  res.status(200).json({
    success: true,
    message: "Welcome to the node express server!",
  });
});

export default app;
