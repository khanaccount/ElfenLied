import React, { createContext, useState } from "react";

interface Item {
  id: number;
  name: string;
  description: string;
  price: number;
  img: string;
  quantity: number;
}

interface AppContextType {
  selectedCategoryId: number | null;
  setSelectedCategoryId: (id: number | null) => void;
  favoriteItems: Item[];
  toggleFavorite: (item: Item) => void;
}

const defaultContext: AppContextType = {
  selectedCategoryId: null,
  setSelectedCategoryId: () => {},
  favoriteItems: [],
  toggleFavorite: () => {},
};

const AppContext = createContext<AppContextType>(defaultContext);

const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [selectedCategoryId, setSelectedCategoryId] = useState<number | null>(null);
  const [favoriteItems, setFavoriteItems] = useState<Item[]>([]);

  const toggleFavorite = (item: Item) => {
    setFavoriteItems((prevItems) =>
      prevItems.some((i) => i.id === item.id)
        ? prevItems.filter((i) => i.id !== item.id)
        : [...prevItems, item]
    );
  };

  return (
    <AppContext.Provider
      value={{ selectedCategoryId, setSelectedCategoryId, favoriteItems, toggleFavorite }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };
