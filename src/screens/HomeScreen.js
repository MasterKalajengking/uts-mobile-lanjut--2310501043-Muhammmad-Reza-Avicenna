import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  ActivityIndicator,
  RefreshControl 
} from "react-native";
import styles from "../styles/HomeStyle";

export default function HomeScreen({ navigation }) {
  const [categories, setCategories] = useState([]);
  const [meals, setMeals] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");

  const [loadingCategories, setLoadingCategories] = useState(true);
  const [loadingMeals, setLoadingMeals] = useState(false);
  
  const [refreshing, setRefreshing] = useState(false);
  const [errorMessage, setErrorMessage] = useState(""); 

  const fetchCategories = () => {
    setLoadingCategories(true);
    setErrorMessage("");
    fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
      .then((res) => {
        if (!res.ok) throw new Error("Gagal mengambil data jaringan");
        return res.json();
      })
      .then((data) => {
        const fetchedCategories = data.categories || [];
        const allCategory = { idCategory: "0", strCategory: "All" };
        setCategories([allCategory, ...fetchedCategories]);
        setSelectedCategory("All");
      })
      .catch((err) => setErrorMessage("Gagal memuat data kategori. Periksa koneksi internetmu."))
      .finally(() => {
        setLoadingCategories(false);
        setRefreshing(false); 
      });
  };

  const fetchMeals = () => {
    if (!selectedCategory) return;
    setLoadingMeals(true);
    setErrorMessage(""); 

    const fetchUrl = selectedCategory === "All"
      ? "https://www.themealdb.com/api/json/v1/1/search.php?s="
      : `https://www.themealdb.com/api/json/v1/1/filter.php?c=${selectedCategory}`;

    fetch(fetchUrl)
      .then((res) => {
        if (!res.ok) throw new Error("Gagal mengambil data jaringan");
        return res.json();
      })
      .then(async (data) => {
        const basicMeals = data.meals || [];
        const top10Meals = basicMeals.slice(0, 10);

        const detailedMealsPromises = top10Meals.map((meal) =>
          fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${meal.idMeal}`)
            .then((res) => res.json())
            .then((detailData) => detailData.meals[0])
        );

        const fullMealsData = await Promise.all(detailedMealsPromises);
        setMeals(fullMealsData);
      })
      .catch((err) => setErrorMessage("Gagal memuat data resep. Periksa koneksi internetmu."))
      .finally(() => setLoadingMeals(false));
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  useEffect(() => {
    fetchMeals();
  }, [selectedCategory]);

  const onRefresh = () => {
    setRefreshing(true);
    fetchCategories(); 
  };

  if (loadingCategories) {
    return <ActivityIndicator size="large" color="orange" style={styles.center} />;
  }

  return (
    <View style={styles.container}>

      {errorMessage ? (
        <View style={{ padding: 10, backgroundColor: "#fee2e2" }}>
          <Text style={{ color: "#ef4444", textAlign: "center" }}>{errorMessage}</Text>
        </View>
      ) : null}

      <View style={styles.categoryWrapper}>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ paddingHorizontal: 15 }}
          data={categories}
          keyExtractor={(item) => item.idCategory}
          renderItem={({ item }) => {
            const isActive = selectedCategory === item.strCategory;
            return (
              <TouchableOpacity
                style={[styles.categoryTab, isActive && styles.activeTab]}
                onPress={() => setSelectedCategory(item.strCategory)}
              >
                <Text style={[styles.categoryTabText, isActive && styles.activeTabText]}>
                  {item.strCategory}
                </Text>
              </TouchableOpacity>
            );
          }}
        />
      </View>

      {loadingMeals && !refreshing ? (
        <View style={styles.center}>
          <ActivityIndicator size="large" color="orange" />
          <Text style={styles.loadingText}>Memuat resep lengkap...</Text>
        </View>
      ) : (
        <FlatList
          data={meals}
          keyExtractor={(item) => item.idMeal}
          contentContainerStyle={styles.listContainer}
          showsVerticalScrollIndicator={false}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} colors={["orange"]} />
          }
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.card}
              onPress={() => navigation.navigate("Detail", { id: item.idMeal })}
            >
              <Image source={{ uri: item.strMealThumb }} style={styles.image} />
              <View style={styles.content}>
                <Text style={styles.title} numberOfLines={1}>{item.strMeal}</Text>
                <View style={styles.badgeContainer}>
                  <View style={[styles.badge, styles.badgeCategory]}>
                    <Text style={styles.badgeTextCategory}>{item.strCategory}</Text>
                  </View>
                  <View style={[styles.badge, styles.badgeArea]}>
                    <Text style={styles.badgeTextArea}>{item.strArea}</Text>
                  </View>
                </View>
              </View>
            </TouchableOpacity>
          )}
        />
      )}
    </View>
  );
}