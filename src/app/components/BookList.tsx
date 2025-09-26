import React from "react";
import { fetchBooks, fetchTrendingBooks } from "../lib/data";
import Books from "./Books";

interface BookListProps {
  query: string;
}

const BookList = async ({ query }: BookListProps) => {
  const trendingBooks = await fetchTrendingBooks();
  const books = await fetchBooks(query);

  return (
    <>
      <div>
        {query.length > 0 ? (
          <div>
            {" "}
            <h1 className="text-center text-sm md:text-base font-semibold mb-8">
              Resultados de búsqueda para: {query}
            </h1>
            {books.length > 0 ? (
              <Books books={books} />
            ) : (
              <p className="text-center">No se encontraron libros.</p>
            )}
          </div>
        ) : (
          <div>
            {" "}
            <h1 className="text-center text-sm md:text-base font-semibold mb-8">
              Los libros más populares
            </h1>
            {trendingBooks.length > 0 ? (
              <Books books={trendingBooks} />
            ) : (
              <p className="text-center">No se encontraron libros.</p>
            )}
          </div>
        )}
      </div>
    </>
  );
};

export default BookList;
