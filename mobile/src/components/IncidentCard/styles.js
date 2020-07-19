import { StyleSheet } from "react-native";

export default StyleSheet.create({
  incidentCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 8,
    marginBottom: 16,
  },
  incidentCardContent: {
    padding: 24,
    paddingBottom: 0,
  },
  incidentHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  casoSection: {
    flex: 1,
  },
  ongSection: {
    width: "30%",
  },

  incidentLabel: {
    marginBottom: 8,
    fontSize: 14,
    color: "#41414D",
    fontWeight: "bold",
  },
  incidentValue: {
    marginBottom: 24,
    fontSize: 15,
    lineHeight: 25,
    color: "#737380",
  },
  detailsButton: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 24,
  },
  incidentDivider: {
    borderColor: "#F0F0F5",
    borderWidth: 1,
  },
  detailsButtonText: {
    fontWeight: "bold",
    color: "#E02041",
    fontSize: 15,
  },
});
