import { StyleSheet } from "react-native";

export default StyleSheet.create({
  center: { flex: 1, justifyContent: "center", alignItems: "center" },
  loadingText: { marginTop: 10, color: "gray" },
  container: { flex: 1, backgroundColor: "#f5f5f5" },

  categoryWrapper: {
    paddingVertical: 15,
    backgroundColor: "#ffffff",
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  categoryTab: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    marginRight: 10,
    borderRadius: 20,
    backgroundColor: "#f0f0f0",
  },
  activeTab: { backgroundColor: "orange" },
  categoryTabText: { fontSize: 14, fontWeight: "600", color: "#555" },
  activeTabText: { color: "#fff" },

  listContainer: { padding: 15 },
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
  image: { height: 200, width: "100%", resizeMode: "cover" },
  content: { padding: 15 },
  title: { fontSize: 20, fontWeight: "bold", color: "#000", marginBottom: 12 },

  badgeContainer: { flexDirection: "row", alignItems: "center" },
  badge: {
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 6,
    marginRight: 10,
  },
  badgeCategory: { backgroundColor: "#ffedd5" },
  badgeTextCategory: { color: "#c2410c", fontWeight: "600", fontSize: 14 },
  badgeArea: { backgroundColor: "#dbeafe" },
  badgeTextArea: { color: "#1d4ed8", fontWeight: "600", fontSize: 14 }
});