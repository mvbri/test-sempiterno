import { create } from "zustand";
import { Book } from "./interfaces";

interface BookStore {
  _hasHydrated: boolean; 
  setHasHydrated: (state: boolean) => void; 
}

interface FavoritesState {
  favorites: Book[];
}

interface BookStore extends FavoritesState {
  addFavorite: (book: Book) => void;
  removeFavorite: (bookId: string) => void;
  isFavorite: (bookId: string) => boolean;
}


export const useBookStore = create<BookStore>((set, get) => ({
  favorites: [],
   _hasHydrated: false, 
      
      setHasHydrated: (state) => {
        set({
          _hasHydrated: state
        });
      },

  addFavorite: (book) =>
    set((state) => ({
      favorites: state.favorites.some((fav) => fav.key === book.key)
        ? state.favorites
        : [...state.favorites, book],
    })),

  removeFavorite: (bookId) =>
    set((state) => ({
      favorites: state.favorites.filter((book) => book.key !== bookId),
    })),

  isFavorite: (bookId) => {
    return get().favorites.some((book) => book.key === bookId);
  },
}));
