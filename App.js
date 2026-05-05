import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import StackNavigator from './src/navigation/StackNavigator';
// 1. Import FavoritesProvider
import { FavoritesProvider } from './src/context/FavoritesContext'; 

export default function App() {
  return (
    // 2. Bungkus NavigationContainer dengan FavoritesProvider
    <FavoritesProvider>
      <NavigationContainer>
        <StackNavigator />
      </NavigationContainer>
    </FavoritesProvider>
  );
}