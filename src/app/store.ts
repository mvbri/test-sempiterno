import { create } from 'zustand';

// Define la interfaz para un libro
interface Book {
  id: string;
  title: string;
  // Agrega otros campos de libro si son necesarios
}

// Define la interfaz para el estado de búsqueda
interface SearchState {
  searchQuery: string;
  searchResults: Book[];
  isLoading: boolean;
  error: string | null;
}

// Define la interfaz para el estado de favoritos
interface FavoritesState {
  favorites: Book[];
}

// Combina las interfaces para el estado completo
interface BookStore extends SearchState, FavoritesState {
  // Acciones (funciones para modificar el estado)
  setSearchQuery: (query: string) => void;
  setLoading: (loading: boolean) => void;
  setResults: (results: Book[]) => void;
  setError: (error: string | null) => void;
  
  addFavorite: (book: Book) => void;
  removeFavorite: (bookId: string) => void;
  isFavorite: (bookId: string) => boolean;
}

// Crea el store
export const useBookStore = create<BookStore>((set, get) => ({
  // --- Estado de Búsqueda ---
  searchQuery: '',
  searchResults: [],
  isLoading: false,
  error: null,

  // --- Estado de Favoritos ---
  favorites: [],

  // --- Acciones de Búsqueda ---
  setSearchQuery: (query) => set({ searchQuery: query }),
  setLoading: (loading) => set({ isLoading: loading }),
  setResults: (results) => set({ searchResults: results }),
  setError: (error) => set({ error }),

  // --- Acciones de Favoritos ---
  addFavorite: (book) => set((state) => ({
    // Evita duplicados
    favorites: state.favorites.some(fav => fav.id === book.id) 
      ? state.favorites 
      : [...state.favorites, book],
  })),

  removeFavorite: (bookId) => set((state) => ({
    favorites: state.favorites.filter((book) => book.id !== bookId),
  })),

  isFavorite: (bookId) => {
    return get().favorites.some(book => book.id === bookId);
  },
}));