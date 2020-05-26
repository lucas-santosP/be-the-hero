const express = require("express");
const routes = require("./routes");
const cors = require("cors");

app.use(
  cors({
    origin: "http://meuapp.com",
  })
);
const app = express();
app.use(express.json());
app.use(routes);

app.listen(3333);

//
/*
para limitar que pode acessar a api
app.use(cors({
  origin:"http://meuapp.com"
}));
*/
