import React from "react";
import { Image, Text, View } from "react-native";
import styles from "../styles/HeaderStyle";

export default function Header() {
  return (
    <View style={styles.headerContainer}>
      <View>
        <Text style={styles.greetingBold}>ResepKita</Text>
      </View>
      <Image
        source={require("../assets/profile.jpg")} 
        style={styles.profilePic}
      />
    </View>
  );
}