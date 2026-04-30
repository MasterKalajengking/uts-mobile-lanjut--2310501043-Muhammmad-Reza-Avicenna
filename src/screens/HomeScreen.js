import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
  Image,
  RefreshControl,
} from "react-native";
import { getCategories } from "../services/api";

export default function HomeScreen({ navigation }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [refreshing, setRefreshing] = useState(false);

  const fetchData = async () => {
    try {
      setError("");
      const json = await getCategories();
      setData(json.categories);
    } catch {
      setError("Gagal memuat data");
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) return <ActivityIndicator size="large" />;

  if (error) return <Text>{error}</Text>;

  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.idCategory}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={fetchData} />
      }
      renderItem={({ item }) => (
        <TouchableOpacity
          onPress={() =>
            navigation.navigate("Detail", {
              type: "category",
              name: item.strCategory,
            })
          }
        >
          <Image
            source={{ uri: item.strCategoryThumb }}
            style={{ height: 150 }}
          />
          <Text>{item.strCategory}</Text>
        </TouchableOpacity>
      )}
    />
  );
}