import React, { useState, useEffect } from "react";
import "./styles.css";

import { Link, useHistory } from "react-router-dom";
import api from "../../services/api";
import { FiPower } from "react-icons/fi";
import logoImg from "../../assets/logo.svg";
import IncidentCard from "./IncidentCard";

export default function Register() {
  const history = useHistory();

  const ongName = localStorage.getItem("ongName");
  const ongId = localStorage.getItem("ongId");
  const [incidents, setIncidents] = useState([]);

  function handleLogout() {
    localStorage.clear();
    history.push("/");
  }

  async function handleDeleteIncident(incidentId) {
    try {
      await api.delete(`incidents/${incidentId}`, {
        headers: {
          Authorization: ongId,
        },
      });
      setIncidents(incidents.filter((incident) => incident.id !== incidentId));
    } catch (error) {
      alert("Erro ao excluir caso, tente novamente.");
    }
  }

  useEffect(() => {
    async function getIncidents() {
      try {
        const response = await api.get("profile", {
          headers: {
            Authorization: ongId,
          },
        });
        setIncidents(response.data);
      } catch (error) {
        alert("Error ao buscar incidentes, tente novamente.");
      }
    }
    getIncidents();
  }, [ongId]);

  return (
    <div className="profiles-container">
      <header>
        <img className="img-logo" src={logoImg} alt="Be The Hero" />
        <span>Bem vinda, {ongName}</span>

        <aside className="aside">
          <Link className="btn" to="/new-incident">
            Cadastrar novo caso
          </Link>
          <button onClick={handleLogout} className="btn-logout">
            <FiPower size={18} />
          </button>
        </aside>
      </header>

      <h1>Casos cadastrados</h1>
      <ul>
        {incidents.length ? (
          incidents.map((incident) => (
            <IncidentCard
              key={incident.id}
              incident={incident}
              handleClickInDelete={handleDeleteIncident.bind(this)}
            ></IncidentCard>
          ))
        ) : (
          <p>Nenhum caso cadastrado.</p>
        )}
      </ul>
    </div>
  );
}
