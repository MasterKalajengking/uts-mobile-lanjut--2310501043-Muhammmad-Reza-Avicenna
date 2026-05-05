import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import HomeScreen from '../screens/HomeScreen';
import DetailScreen from '../screens/DetailScreen';
import FavoritesScreen from '../screens/FavoritesScreen';
import SearchScreen from '../screens/SearchScreen';
import AboutScreen from '../screens/AboutScreen';
import Header from '../components/Header'; 

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        
        header: () => <Header />,
        headerShown: true, 
        
        tabBarIcon: ({ color, size }) => {
          let iconName;
          if (route.name === 'Home') iconName = 'home-outline';
          else if (route.name === 'Favorit') iconName = 'bookmark-outline';
          else if (route.name === 'Search') iconName = 'search-outline';
          else if (route.name === 'About') iconName = 'person-outline';
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'orange',
        tabBarInactiveTintColor: 'gray',
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Favorit" component={FavoritesScreen} />
      <Tab.Screen name="Search" component={SearchScreen} />
      <Tab.Screen 
        name="About" 
        component={AboutScreen} 
        options={{ 
          headerShown: false
        }} 
      />
      
      
      <Tab.Screen 
        name="Detail" 
        component={DetailScreen} 
        options={{ 
          headerShown: false, 
          tabBarItemStyle: { display: 'none' } 
        }} 
      />
    </Tab.Navigator>
  );
}