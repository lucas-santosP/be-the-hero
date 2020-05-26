const express = require("express");
const routes = express.Router();

const ongController = require("./controllers/OngController");
const incidentsController = require("./controllers/incidentsController");
const profileController = require("./controllers/profileController");
const sessionController = require("./controllers/sessionController");

routes.post("/sessions", sessionController.create);

routes.get("/ongs", ongController.index);
routes.post("/ongs", ongController.create);
routes.get("/profile", profileController.index);

routes.post("/incidents", incidentsController.create);
routes.get("/incidents", incidentsController.index);
routes.delete("/incidents/:id", incidentsController.delete);

module.exports = routes;

/* 
# Query Params: Parametros nomeados enviados na rota apos o "?" (Filtros, paginação)
    -Enviado por: "/users?name=Lucas&idade=21" 
    -Recebido por: const params = req.query;

# Route Params: Parametros utlizados para identificar recursos (id)
    -Enviado por: "users/1" => "users/:id" 
    -Recebido por: const params = req.params

# Request Body: Corpo da requisição para criar ou alterar recursos
    -Enviado por: Body do POST
    -Recebido por: const body = request.body;
*/
