import React, { createContext, useReducer } from "react";

export const FavoritesContext = createContext();

const initialState = {
  favorites: [],
};

function reducer(state, action) {
  switch (action.type) {
    case "ADD":
      if (state.favorites.find((i) => i.idMeal === action.payload.idMeal)) {
        return state;
      }
      return {
        ...state,
        favorites: [...state.favorites, action.payload],
      };

    case "REMOVE":
      return {
        ...state,
        favorites: state.favorites.filter(
          (i) => i.idMeal !== action.payload
        ),
      };

    default:
      return state;
  }
}

export const FavoritesProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addFavorite = (item) =>
    dispatch({ type: "ADD", payload: item });

  const removeFavorite = (id) =>
    dispatch({ type: "REMOVE", payload: id });

  return (
    <FavoritesContext.Provider
      value={{
        favorites: state.favorites,
        addFavorite,
        removeFavorite,
      }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};