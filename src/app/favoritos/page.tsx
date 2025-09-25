"use client";
import Link from "next/link";
import { useBookStore } from "../bookStore";

export default function BooksFav() {
  const favorites = useBookStore((state) => state.favorites);
  const removeFavorite = useBookStore((state) => state.removeFavorite);

  const handleRemove = (key: string) => (e: React.MouseEvent) => {
    e.stopPropagation();
    removeFavorite(key);
  };

  if (favorites.length === 0) {
    return (
      <div className="pt-20 text-center">
        <h1 className="text-2xl font-bold">📚 Tus Favoritos están vacíos.</h1>
        <p className="mt-2">
          Añade libros desde la página de inicio para verlos aquí.
        </p>
      </div>
    );
  }

  return (
    <div className="pt-20 px-4">
      <h1 className="text-3xl font-bold mb-6 text-center">
        ❤️ Mis Libros Favoritos
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {favorites.map((book) => (
          <article
            key={book.key}
            className="border p-4 shadow-lg flex flex-col justify-around items-center relative"
          >
            <Link href={`/book/${book.key}`} className="w-full text-center">
              <img
                className="m-auto mb-4"
                src={`${
                  book.cover_i
                    ? `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`
                    : book.covers
                    ? `https://covers.openlibrary.org/b/id/${book.covers[0]}-M.jpg`
                    : "/default.jpg"
                }`}
                alt={`Cubierta de ${book.title}`}
              />
              <h2 className="text-lg font-semibold">{book.title}</h2>
              <p className="text-sm text-gray-600">{book.author_name}</p>
            </Link>
            <button
              onClick={handleRemove(book.key)}
              className="mt-3 bg-red-500 text-white px-4 py-1 rounded hover:bg-red-600 transition"
            >
              Quitar de Favoritos
            </button>
          </article>
        ))}
      </div>
    </div>
  );
}
