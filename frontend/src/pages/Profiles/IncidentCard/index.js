import React from "react";
import "./styles.css";

import { FiTrash2 } from "react-icons/fi";

export default function IncidentCard({ incident, handleClickInDelete }) {
  return (
    <li className="incident-card">
      <span>CASO:</span>
      <p>{incident.title}</p>

      <span>DESCRIÇÃO:</span>
      <p>{incident.description}</p>

      <span>VALOR:</span>
      <p>
        {Intl.NumberFormat("pt-BR", {
          style: "currency",
          currency: "BRL",
        }).format(incident.value)}
      </p>

      <FiTrash2
        size={20}
        className="trash-icon"
        onClick={() => handleClickInDelete(incident.id)}
      />
    </li>
  );
}
