import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  searchHeader: {
    flexDirection: "row",
    padding: 15,
    backgroundColor: "#fff",
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  searchInput: {
    flex: 1,
    backgroundColor: "#f0f0f0",
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 8,
    fontSize: 16,
    marginRight: 10,
  },
  searchButton: {
    backgroundColor: "orange",
    justifyContent: "center",
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  searchButtonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
  errorText: {
    color: "#ef4444",
    textAlign: "center",
    marginTop: 15,
    fontSize: 14,
  },
  loader: {
    marginTop: 40,
  },
  listContainer: {
    padding: 15,
  },
  card: {
    marginBottom: 20,
    backgroundColor: "#ffffff",
    borderRadius: 12,
    overflow: "hidden",
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  image: {
    height: 180,
    width: "100%",
    resizeMode: "cover",
  },
  cardContent: {
    padding: 15,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#111",
    marginBottom: 10,
  },
  badgeContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  badge: {
    paddingVertical: 4,
    paddingHorizontal: 10,
    borderRadius: 6,
    marginRight: 8,
  },
  badgeCategory: {
    backgroundColor: "#ffedd5",
  },
  badgeTextCategory: {
    color: "#c2410c",
    fontWeight: "600",
    fontSize: 12,
  },
  badgeArea: {
    backgroundColor: "#dbeafe",
  },
  badgeTextArea: {
    color: "#1d4ed8",
    fontWeight: "600",
    fontSize: 12,
  },
});