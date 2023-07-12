import { createServer } from "http";
import  app  from "./app.js";
//import { recuperationPagesWebs } from "./scrawler.js";
//import mysql from "mysql2";

app.set("port", process.env.PORT || 3000);

const server = createServer(app);

server.listen(process.env.PORT || 3000);