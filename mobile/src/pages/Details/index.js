import React from "react";
import styles from "./styles";

import { useNavigation, useRoute } from "@react-navigation/native";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  FlatList,
  Linking,
} from "react-native";
import * as MailComposer from "expo-mail-composer";
import { Feather } from "@expo/vector-icons";
import logoImg from "../../assets/logo.png";
import IncidentCard from "../../components/IncidentCard";

export default function Incidents() {
  const navigation = useNavigation();
  const route = useRoute();

  const incident = route.params.incident;
  const message = `Olá ${
    incident.name
  }, estou entrando em contato pois gostaria de ajuda no caso ${
    incident.ttile
  } com o valor de R$ ${Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(incident.value)}`;

  function navigateBack() {
    navigation.goBack();
  }

  function sendEmail() {
    MailComposer.composeAsync({
      subject: `Herói do caso: ${incident.title}`,
      recipients: [incident.email],
      body: message,
    });
  }

  function sendWhatsapp() {
    Linking.openURL(
      `whatsapp://send?phone=${incident.whatsapp}&text=${message}`
    );
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={navigateBack} style={styles.header}>
        <Image style={styles.logoImg} source={logoImg} />
        <Feather name="arrow-left" size={28} color="#E02041"></Feather>
      </TouchableOpacity>

      <FlatList
        style={styles.listContact}
        showsVerticalScrollIndicator={false}
        data={[incident]}
        keyExtractor={(incident) => String(incident.id)}
        renderItem={({ item: incident }) => (
          <View>
            <IncidentCard completed={true} incident={incident} />

            <View style={styles.contactCard}>
              <Text style={styles.contactTitle}>Salve o dia!</Text>
              <Text style={styles.contactTitle}>Seja o herói desse caso.</Text>

              <Text style={styles.contactText}>Entre em contato:</Text>

              <View style={styles.contactFooter}>
                <TouchableOpacity
                  style={styles.contactButton}
                  onPress={sendWhatsapp}
                >
                  <Text style={styles.contactButtonText}>Whatsapp</Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={styles.contactButton}
                  onPress={sendEmail}
                >
                  <Text style={styles.contactButtonText}>E-mail</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        )}
      ></FlatList>
    </View>
  );
}
