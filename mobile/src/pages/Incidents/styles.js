import { StyleSheet } from "react-native";
import Constants from "expo-constants";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F0F0F5",
    paddingHorizontal: 24,
    paddingTop: Constants.statusBarHeight + 20,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 48,
  },
  logoImg: {
    height: 40,
  },
  headerText: {
    fontSize: 15,
    color: "#737380",
  },
  headerTextBold: {
    textTransform: "uppercase",
    fontSize: 15,
    color: "#737380",
    fontWeight: "bold",
  },
  title: {
    fontWeight: "bold",
    fontSize: 30,
    marginBottom: 16,
  },
  description: {
    fontSize: 20,
    lineHeight: 30,
    color: "#737380",
    marginBottom: 32,
  },
  incidentsList: {},
});
