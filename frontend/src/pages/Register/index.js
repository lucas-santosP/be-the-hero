import React, { useState } from "react";
import "./styles.css";

import { Link, useHistory } from "react-router-dom";
import api from "../../services/api";
import { FiArrowLeft } from "react-icons/fi";
import logoImg from "../../assets/logo.svg";

export default function Register() {
  const history = useHistory();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [city, setCity] = useState("");
  const [uf, setUf] = useState("");

  async function handleRegister(e) {
    e.preventDefault();
    const data = {
      name,
      email,
      whatsapp,
      city,
      uf,
    };

    try {
      const response = await api.post("ongs", data);

      alert("Seu ID de acesso: " + response.data.id);
      history.push("/");
    } catch (error) {
      alert("Erro no cadastro, tente novamente.");
    }
  }

  function handleUfValue(e) {
    const newValue = e.target.value.toUpperCase();
    e.target.value = newValue;

    if (newValue.length <= 2 && newValue.match(/^[a-zA-Z]*$/)) setUf(newValue);
  }

  return (
    <div className="register-container">
      <div id="register" className="content">
        <section>
          <img className="img-logo" src={logoImg} alt="Be The Hero" />
          <h1>Cadastro</h1>
          <p>
            Faça seu cadastro, entre na plataforma e ajude pessoas a encontrarem
            casos da sua ONG.
          </p>
          <Link className="back-link" to="/">
            <FiArrowLeft size={16} color="#E02041" />
            <span>Voltar para logon</span>
          </Link>
        </section>

        <section>
          <form onSubmit={handleRegister}>
            <label htmlFor="ongNome">Nome da ONG:</label>
            <input
              id="ongNome"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />

            <label htmlFor="ongEmail">E-mail:</label>
            <input
              id="ongEmail"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <label htmlFor="ongWhatsapp">Whatsapp:</label>
            <input
              id="ongWhatsapp"
              type="text"
              value={whatsapp}
              onChange={(e) => setWhatsapp(e.target.value)}
            />

            <div className="input-group-inline">
              <div>
                <label htmlFor="ongWhatsapp">Cidade:</label>
                <input
                  id="ongWhatsapp"
                  type="text"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="ongWhatsapp">UF:</label>
                <input
                  id="ongWhatsapp"
                  type="text"
                  style={{ width: 75 }}
                  value={uf}
                  onChange={handleUfValue}
                />
              </div>
            </div>

            <button className="btn">Cadastrar</button>
          </form>
        </section>
      </div>
    </div>
  );
}
