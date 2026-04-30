const BASE_URL = "https://www.themealdb.com/api/json/v1/1";

export const getCategories = async () => {
  const res = await fetch(`${BASE_URL}/categories.php`);
  return res.json();
};

export const getMealsByCategory = async (category) => {
  const res = await fetch(`${BASE_URL}/filter.php?c=${category}`);
  return res.json();
};

export const getMealDetail = async (id) => {
  const res = await fetch(`${BASE_URL}/lookup.php?i=${id}`);
  return res.json();
};

export const searchMeals = async (query) => {
  const res = await fetch(`${BASE_URL}/search.php?s=${query}`);
  return res.json();
};