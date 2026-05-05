import { useState } from "react";
import {
  ActivityIndicator,
  FlatList,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { searchMeals } from "../services/api";
import styles from "../styles/SearchStyle";

export default function SearchScreen({ navigation }) {
  const [query, setQuery] = useState("");
  const [data, setData] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {
    if (!query || query.trim().length < 3) {
      setError("Masukkan minimal 3 karakter untuk mencari");
      setData([]);
      return;
    }

    setError("");
    setLoading(true);

    try {
      const json = await searchMeals(query);
      if (json.meals) {
        setData(json.meals);
      } else {
        setData([]);
        setError("Maaf, resep tidak ditemukan.");
      }
    } catch (err) {
      setError("Terjadi kesalahan jaringan.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.searchHeader}>
        <TextInput
          style={styles.searchInput}
          placeholder="Cari resep makanan..."
          value={query}
          onChangeText={setQuery}
          onSubmitEditing={handleSearch}
        />
        <TouchableOpacity style={styles.searchButton} onPress={handleSearch}>
          <Text style={styles.searchButtonText}>Cari</Text>
        </TouchableOpacity>
      </View>

      {error ? <Text style={styles.errorText}>{error}</Text> : null}

      {loading ? (
        <ActivityIndicator size="large" color="orange" style={styles.loader} />
      ) : (
        <FlatList
          data={data}
          keyExtractor={(item) => item.idMeal}
          contentContainerStyle={styles.listContainer}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.card}
              onPress={() => navigation.navigate("Detail", { id: item.idMeal })}
            >
              <Image source={{ uri: item.strMealThumb }} style={styles.image} />
              <View style={styles.cardContent}>
                <Text style={styles.title} numberOfLines={1}>{item.strMeal}</Text>
                <View style={styles.badgeContainer}>
                  <View style={[styles.badge, styles.badgeCategory]}>
                    <Text style={styles.badgeTextCategory}>{item.strCategory}</Text>
                  </View>
                  {item.strArea ? (
                    <View style={[styles.badge, styles.badgeArea]}>
                      <Text style={styles.badgeTextArea}>{item.strArea}</Text>
                    </View>
                  ) : null}
                </View>
              </View>
            </TouchableOpacity>
          )}
        />
      )}
    </View>
  );
}