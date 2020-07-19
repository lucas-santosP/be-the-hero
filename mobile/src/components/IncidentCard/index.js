import React from "react";
import styles from "./styles";

import { useNavigation } from "@react-navigation/native";
import { Feather } from "@expo/vector-icons";
import { View, Text, TouchableOpacity } from "react-native";

export default function Incidents({ incident, completed = false }) {
  const navigation = useNavigation();

  function navigateToDetails() {
    navigation.navigate("Details", { incident });
  }

  return (
    <View style={styles.incidentCard}>
      <View style={styles.incidentCardContent}>
        <View style={styles.incidentHeader}>
          <View style={styles.casoSection}>
            <Text style={styles.incidentLabel}>CASO:</Text>
            <Text style={styles.incidentValue}>{incident.title}</Text>
          </View>
          <View style={styles.ongSection}>
            <Text style={styles.incidentLabel}>ONG:</Text>
            <Text style={styles.incidentValue}>{incident.name}</Text>
          </View>
        </View>

        {completed ? (
          <View>
            <Text style={styles.incidentLabel}>DESCRIÇÃO:</Text>
            <Text style={styles.incidentValue}>{incident.description}</Text>
          </View>
        ) : null}

        <Text style={styles.incidentLabel}>VALOR:</Text>
        <Text style={styles.incidentValue}>
          {Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
          }).format(incident.value)}
        </Text>
      </View>

      <View style={styles.incidentDivider}></View>
      {completed ? null : (
        <TouchableOpacity
          style={styles.detailsButton}
          onPress={navigateToDetails}
        >
          <Text style={styles.detailsButtonText}>Ver mais detalhes</Text>
          <Feather name="arrow-right" size={17} color="#E02041"></Feather>
        </TouchableOpacity>
      )}
    </View>
  );
}
