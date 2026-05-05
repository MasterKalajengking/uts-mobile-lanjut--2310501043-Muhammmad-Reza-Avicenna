import { StyleSheet } from "react-native";

export default StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  heroImage: {
    height: 250,
    width: "100%",
  },
  content: {
    padding: 20,
  },
  headerRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  titleText: {
    fontSize: 26,
    fontWeight: "900",
    color: "#111",
    flex: 1,
    marginRight: 10,
  },
  iconButton: {
    padding: 5,
  },
  badgesContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 25,
  },
  infoBox: {
    flex: 1,
    padding: 15,
    borderRadius: 8,
  },
  boxOrange: {
    backgroundColor: "#fff7ed",
    marginRight: 10,
  },
  boxBlue: {
    backgroundColor: "#eff6ff",
  },
  boxLabel: {
    fontSize: 12,
    color: "#6b7280",
    marginBottom: 4,
  },
  boxValueOrange: {
    color: "#c2410c",
    fontWeight: "bold",
    fontSize: 16,
  },
  boxValueBlue: {
    color: "#1d4ed8",
    fontWeight: "bold",
    fontSize: 16,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#111",
    marginBottom: 10,
  },
  ingredientsContainer: {
    marginBottom: 25,
  },
  ingredientRow: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginBottom: 6,
  },
  bulletPoint: {
    color: "#c2410c",
    fontSize: 18,
    lineHeight: 22,
    marginRight: 8,
  },
  ingredientText: {
    fontSize: 15,
    color: "#333",
    lineHeight: 22,
  },
  instructions: {
    fontSize: 15,
    lineHeight: 24,
    color: "#444",
  },
});