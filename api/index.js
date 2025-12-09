import serverless from "serverless-http";
import app from "../server/index.js";

export const config = {
  runtime: "nodejs18.x",
};

export default serverless(app);
