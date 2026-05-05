import React, { useEffect, useState, useContext } from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  ActivityIndicator,
  TouchableOpacity,
} from "react-native";
import { getMealDetail } from "../services/api";
import { FavoritesContext } from "../context/FavoritesContext";
import { Ionicons } from '@expo/vector-icons';
import styles from "../styles/DetailStyle";

export default function DetailScreen({ route }) {
  const { id } = route.params || {};

  const [detail, setDetail] = useState(null);
  const [loading, setLoading] = useState(true);

  const context = useContext(FavoritesContext) || {};
  const favorites = context.favorites || [];
  const addFavorite = context.addFavorite || (() => {});
  const removeFavorite = context.removeFavorite || (() => {});

  const isFavorite = favorites.some((fav) => fav.idMeal === id);

  useEffect(() => {
    if (id) {
      getMealDetail(id)
        .then((json) => {
          if (json.meals && json.meals.length > 0) {
            setDetail(json.meals[0]);
          }
        })
        .catch(() => console.log("Error fetching detail"))
        .finally(() => setLoading(false));
    } else {
      setLoading(false);
    }
  }, [id]);

  const toggleFavorite = () => {
    if (isFavorite) {
      removeFavorite(detail.idMeal);
    } else {
      addFavorite(detail);
    }
  };

  const getIngredients = (meal) => {
    const ingredients = [];
    for (let i = 1; i <= 20; i++) {
      const ingredient = meal[`strIngredient${i}`];
      const measure = meal[`strMeasure${i}`];
      if (ingredient && ingredient.trim() !== "") {
        ingredients.push({ name: ingredient, measure: measure });
      }
    }
    return ingredients;
  };

  if (loading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" color="orange" />
      </View>
    );
  }

  if (!detail) {
    return (
      <View style={styles.center}>
        <Text>Resep tidak ditemukan atau terjadi kesalahan.</Text>
      </View>
    );
  }

  return (
    <ScrollView contentContainerStyle={{ paddingBottom: 30, backgroundColor: "#fff" }}>
      <Image source={{ uri: detail.strMealThumb }} style={styles.heroImage} />
      <View style={styles.content}>
        <View style={styles.headerRow}>
          <Text style={styles.titleText}>{detail.strMeal}</Text>
          <TouchableOpacity onPress={toggleFavorite} style={styles.iconButton}>
            <Ionicons
              name={isFavorite ? "bookmark" : "bookmark-outline"}
              size={28}
              color="#ff4444"
            />
          </TouchableOpacity>
        </View>

        <View style={styles.badgesContainer}>
          <View style={[styles.infoBox, styles.boxOrange]}>
            <Text style={styles.boxLabel}>Category</Text>
            <Text style={styles.boxValueOrange}>{detail.strCategory}</Text>
          </View>
          <View style={[styles.infoBox, styles.boxBlue]}>
            <Text style={styles.boxLabel}>Area</Text>
            <Text style={styles.boxValueBlue}>{detail.strArea}</Text>
          </View>
        </View>

        <Text style={styles.sectionTitle}>Ingredients</Text>
        <View style={styles.ingredientsContainer}>
          {getIngredients(detail).map((item, index) => (
            <View key={index} style={styles.ingredientRow}>
              <Text style={styles.bulletPoint}>•</Text>
              <Text style={styles.ingredientText}>
                {item.measure} {item.name}
              </Text>
            </View>
          ))}
        </View>

        <Text style={styles.sectionTitle}>Instructions</Text>
        <Text style={styles.instructions}>{detail.strInstructions}</Text>
      </View>
    </ScrollView>
  );
}