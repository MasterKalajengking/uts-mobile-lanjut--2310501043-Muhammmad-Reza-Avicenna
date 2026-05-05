import React, { useContext } from "react";
import { View, Text, FlatList, Button, Image } from "react-native";
import { FavoritesContext } from "../context/FavoritesContext";
import styles from "../styles/FavoriteStyle"; 

export default function FavoritesScreen() {
  const context = useContext(FavoritesContext) || {};
  const favorites = context.favorites || [];
  const removeFavorite = context.removeFavorite || (() => {});

  if (favorites.length === 0) {
    return (
      <View style={styles.center}>
        <Text style={styles.emptyText}>Belum ada resep favorit disimpan.</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={favorites}
        keyExtractor={(item) => item.idMeal}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Image
              source={{ uri: item.strMealThumb }}
              style={styles.image} 
            />
            <Text style={styles.title}>{item.strMeal}</Text>
            <Button
              title="Hapus"
              color="#ff4444"
              onPress={() => removeFavorite(item.idMeal)}
            />
          </View>
        )}
      />
    </View>
  );
}