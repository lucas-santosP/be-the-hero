const crypto = require("crypto"); //node lib
const connection = require("../database/connection");

module.exports = {
  async create(req, res) {
    const { name, email, whatsapp, city, uf } = req.body;
    const id = crypto.randomBytes(4).toString("HEX"); //gerá id randomicamente

    await connection("ongs").insert({
      id,
      name,
      email,
      whatsapp,
      city,
      uf,
    });

    return res.json({ id });
  },
  async index(req, res) {
    const ongs = await connection.select("*").from("ongs");

    return res.json(ongs);
  },
};
