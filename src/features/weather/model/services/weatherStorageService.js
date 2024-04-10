import { LOCAL_STORAGE_KEY } from "../const/weatherApi";

export const saveCitiesToLocalStorage = (cities) => {
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(cities));
};

export const loadCitiesFromLocalStorage = () => {
  const data = localStorage.getItem(LOCAL_STORAGE_KEY);
  
  return data ? JSON.parse(data) : [];
};
