import React, { useState, useEffect } from "react";
import styles from "./styles";

import api from "../../services/api";
import { View, Text, Image, FlatList } from "react-native";
import logoImg from "../../assets/logo.png";
import IncidentCard from "../../components/IncidentCard";

export default function Incidents() {
  const [incidents, setIncidents] = useState([]);
  const [totalIncidents, setTotalIncidents] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);

  async function getIncidents() {
    if (loading || (totalIncidents > 0 && totalIncidents === incidents.length))
      return;
    try {
      setLoading(true);
      const response = await api.get("incidents?page=" + currentPage);
      setIncidents([...incidents, ...response.data]);
      setTotalIncidents(response.headers["x-total-count"]);
      setCurrentPage(currentPage + 1);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getIncidents();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image style={styles.logoImg} source={logoImg} />
        <Text style={styles.headerText}>
          Total de
          <Text style={styles.headerTextBold}> {totalIncidents} casos</Text>
        </Text>
      </View>

      <Text style={styles.title}>Bem-vindo!</Text>
      <Text style={styles.description}>
        Escolha um dos casos abaixo e salve o dia.
      </Text>

      <FlatList
        style={styles.incidentsList}
        onEndReached={getIncidents}
        onEndReachedThreshold={0.2}
        data={incidents}
        keyExtractor={(incident) => String(incident.id)}
        renderItem={({ item: incident }) => (
          <IncidentCard incident={incident} />
        )}
      />
    </View>
  );
}
