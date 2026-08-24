import { useState } from "react";
import { HeartContext } from "./heartContext";

export function HeartProvider({ children }) {
  const [favoriteItems, setFavoriteItems] = useState([]);
  const [notification, setNotification] = useState(null);

  const addToFavorites = (product) => {
    setFavoriteItems((currentItems) => {
      if (currentItems.some((item) => item.id === product.id)) {
        return currentItems;
      }

      return [...currentItems, product];
    });

    setNotification({ message: `${product.name} added to favorites` });
    window.setTimeout(() => setNotification(null), 4000);
  };

  const removeFromFavorites = (productId) => {
    setFavoriteItems((currentItems) => currentItems.filter((item) => item.id !== productId));
  };

  return (
    <HeartContext.Provider value={{ favoriteItems, addToFavorites, removeFromFavorites, notification }}>
      {children}
    </HeartContext.Provider>
  );
}

