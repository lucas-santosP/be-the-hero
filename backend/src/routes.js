const express = require("express");
const { celebrate, Segments, Joi } = require("celebrate");
const routes = express.Router();

const ongController = require("./controllers/OngController");
const incidentsController = require("./controllers/incidentsController");
const profileController = require("./controllers/profileController");
const sessionController = require("./controllers/sessionController");

routes.post("/sessions", sessionController.create);

routes.get("/ongs", ongController.index);

routes.post(
  "/ongs",
  celebrate({
    [Segments.BODY]: Joi.object().keys({
      name: Joi.string().required(),
      email: Joi.string().required().email(),
      whatsapp: Joi.string().required().min(10).max(11),
      city: Joi.string().required(),
      uf: Joi.string().required().length(2),
    }),
  }),
  ongController.create
);

routes.get(
  "/profile",
  celebrate({
    [Segments.HEADERS]: Joi.object({
      authorization: Joi.string().required(),
    }).unknown(),
  }),
  profileController.index
);

routes.post(
  "/incidents",
  celebrate({
    [Segments.BODY]: Joi.object().keys({
      title: Joi.string().required(),
      description: Joi.string().required(),
      value: Joi.string().required(),
    }),
    [Segments.HEADERS]: Joi.object({
      authorization: Joi.string().required(),
    }).unknown(),
  }),
  incidentsController.create
);

routes.get(
  "/incidents",
  celebrate({
    [Segments.QUERY]: Joi.object({
      page: Joi.number(),
    }).unknown(),
  }),
  incidentsController.index
);

routes.delete(
  "/incidents/:id",
  celebrate({
    [Segments.PARAMS]: Joi.object().keys({
      id: Joi.number().required(),
    }),
    [Segments.HEADERS]: Joi.object({
      authorization: Joi.string().required(),
    }).unknown(),
  }),
  incidentsController.delete
);

module.exports = routes;

/* 
# Query Params: Parametros nomeados enviados na rota apos o "?" (Filtros, paginação)
    -Enviado por: "/users?name=Lucas&idade=21" 
    -Recebido por: const params = req.query;

# Route Params: Parametros utlizados para identificar recursos (id)
    -Enviado por: "users/1" => "users/:id" 
    -Recebido por: const params = req.params

# Request Body: Corpo da requisição para criar ou alterar recursos
    -Enviado por: Body do formulario POST
    -Recebido por: const body = req.body;
*/
