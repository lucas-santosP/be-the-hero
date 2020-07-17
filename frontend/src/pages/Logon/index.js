import React, { useState, useEffect } from "react";
import "./styles.css";

import { Link, useHistory } from "react-router-dom";
import api from "../../services/api";
import { FiLogIn } from "react-icons/fi";
import heroesImg from "../../assets/heroes.png";
import logoImg from "../../assets/logo.svg";

export default function Logon() {
  const history = useHistory();
  const [id, setId] = useState("");

  async function handleLogin(e) {
    e.preventDefault();

    try {
      const response = await api.post("sessions", { id });

      localStorage.setItem("ongId", id);
      localStorage.setItem("ongName", response.data.name);
      history.push("/profiles");
    } catch (error) {
      alert("Falha no login, tente novamente");
    }
  }

  useEffect(() => {
    const ongId = localStorage.getItem("ongId");
    const ongName = localStorage.getItem("ongName");
    if (ongId && ongName) history.push("/profiles");
  }, [history]);

  return (
    <div id="logon" className="logon-container">
      <section>
        <img className="img-logo" src={logoImg} alt="Be The Hero" />

        <form onSubmit={handleLogin}>
          <h1>Faça seu logon</h1>
          <input
            id="suaId"
            placeholder="Sua ID"
            type="text"
            value={id}
            onChange={(e) => setId(e.target.value)}
          />
          <button className="btn" type="submit">
            Entrar
          </button>

          <Link className="back-link" to="/register">
            <FiLogIn size={16} color="#E02041" />
            <span>Não tenho cadastro</span>
          </Link>
        </form>
      </section>

      <img className="img-heroes" src={heroesImg} alt="Heroes" />
    </div>
  );
}
