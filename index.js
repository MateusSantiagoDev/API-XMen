import express, { Router } from "express";
import cors from "cors";

/* import dotenv from "dotenv";
dotenv.config();
 */

import { dataBaseConnect } from "./dataBase/mongoDB/connection/connect.js";
import { makeCreate } from "./factories/createFactory.js";
import { makeUpdate } from "./factories/updateFactory.js";
import { makeFindAll } from "./factories/findAllFactory.js";
import { makeFindById } from "./factories/findByIdFactory.js";
import { makeDelete } from "./factories/deleteFactory.js";

import swageer from "swagger-ui-express";
import swaggerDocument from "./swagger.json" assert{ type: "json" };


const DataBase = new dataBaseConnect();
await DataBase.connection();

const port = process.env.PORT || 3000;
const app = express();
const router = Router();

const create = makeCreate(router);
const update = makeUpdate(router);
const findAll = makeFindAll(router);
const findById = makeFindById(router);
const delet = makeDelete(router);

app.use(express.json());
app.use(cors());

app.use("/api-docs", swageer.serve);
app.get("/api-docs", swageer.setup(swaggerDocument));

app.use("/characters", create.route());
app.use("/characters", update.route());
app.use("/characters", findAll.route());
app.use("/characters", findById.route());
app.use("/characters", delet.route());

app.listen(port, () => console.info(`Servidor rodando em http://localhost:${port}`));
