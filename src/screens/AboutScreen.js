// screens/AboutScreen.js

import React from "react";
import { View, Text, Image, ScrollView } from "react-native";
import styles from "../styles/AboutStyle";

export default function AboutScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image
        source={{ uri: "foto.jpg" }}
        style={styles.profileImage}
      />

      <Text style={styles.title}>About Me</Text>

      <View style={styles.card}>
        <Text style={styles.label}>Nama</Text>
        <Text style={styles.value}>Muhammad Reza Avicenna</Text>

        <Text style={styles.label}>NIM</Text>
        <Text style={styles.value}>43XXXXXXXX</Text>

        <Text style={styles.label}>Kelas</Text>
        <Text style={styles.value}>D3 Sistem Informasi - Semester 4</Text>

        <Text style={styles.label}>Tema</Text>
        <Text style={styles.value}>Tema B - MovieDex</Text>

        <Text style={styles.label}>API Used</Text>
        <Text style={styles.value}>https://api.tvmaze.com/</Text>
      </View>

      <Text style={styles.footer}>
        UTS Pemrograman Mobile Lanjut 2025/2026
      </Text>
    </ScrollView>
  );
}