
import "reflect-metadata";
import express, { request, response } from "express";

import "./database";

const app = express();

/**
 * Tipos de parâmetros
 * 
 * Route Params => url + parâmetro específico
 * Query Params => url + ? + chave=valor + & + ...
 * Body Params => {
 *  arquivo json com valores
 * }
 */


app.get("/test", (request, response) => {
  return response.send("Hello!");
});

app.post("/test-post", (request, response) => {
  return response.send("Hello Post!");
})

// http://localhost:3000
app.listen(3000, () => console.log("Server is running"));