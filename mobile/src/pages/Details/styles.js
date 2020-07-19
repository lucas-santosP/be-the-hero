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
  contactCard: {
    padding: 24,
    backgroundColor: "#FFFFFF",
    borderRadius: 8,
    marginBottom: 16,
  },
  contactTitle: {
    fontSize: 20,
    fontWeight: "bold",
    lineHeight: 30,
  },
  contactText: {
    color: "#737380",
    fontSize: 15,
    marginVertical: 16,
  },
  contactFooter: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  contactButton: {
    width: "47%",
    paddingVertical: 16,
    borderRadius: 8,
    backgroundColor: "#E02041",
  },
  contactButtonText: {
    color: "#fff",
    textAlign: "center",
  },
});
