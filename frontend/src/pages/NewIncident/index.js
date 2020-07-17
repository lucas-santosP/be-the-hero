import React, { useState } from "react";
import "./styles.css";

import { Link, useHistory } from "react-router-dom";
import api from "../../services/api";
import { FiArrowLeft } from "react-icons/fi";
import logoImg from "../../assets/logo.svg";

export default function NewIncident() {
  const history = useHistory();
  const ongId = localStorage.getItem("ongId");

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [value, setValue] = useState("");

  async function handleNewIncident(e) {
    e.preventDefault();
    const data = {
      title,
      description,
      value,
    };

    try {
      await api.post("incidents", data, {
        headers: { Authorization: ongId },
      });
      clearForm();
      alert("Caso cadastrado com sucesso.");
      history.push("/profiles");
    } catch (error) {
      alert("Erro no cadastro, tente novamente.");
    }
  }

  function clearForm() {
    setTitle("");
    setDescription("");
    setValue("");
  }

  return (
    <div className="new-incident-container">
      <div className="content">
        <section>
          <img className="img-logo" src={logoImg} alt="Be The Hero" />
          <h1>Cadastrar novo caso</h1>
          <p>
            Descreva o caso detalhadamente para encontrar um herói para resolver
            isso.
          </p>
          <Link to="/profiles" className="back-link">
            <FiArrowLeft size={16} color="#E02041" />
            <span>Voltar para home</span>
          </Link>
        </section>

        <section>
          <form onSubmit={handleNewIncident}>
            <label htmlFor="incdtTitle">Titulo do caso:</label>
            <input
              id="incdtTitle"
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />

            <label htmlFor="incdtDescript">Descrição:</label>
            <textarea
              id="incdtDescript"
              cols="30"
              rows="5"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>

            <label htmlFor="ongWhatsapp">Valor em reais:</label>
            <input
              id="ongWhatsapp"
              type="text"
              value={value}
              onChange={(e) => setValue(e.target.value)}
            />

            <div className="btn-group-inline">
              <button type="button" className="btn" onClick={clearForm}>
                Cancelar
              </button>
              <button type="submit" className="btn">
                Cadastrar
              </button>
            </div>
          </form>
        </section>
      </div>
    </div>
  );
}
