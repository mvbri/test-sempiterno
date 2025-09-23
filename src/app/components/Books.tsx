import React from "react";
import { fetchBooks } from "../lib/data";

const Books = async ({ query }: { query: string }) => {
    const queryVal = query.length === 0 ? "a" : query;
  const books = await fetchBooks({ queryVal });

  return (
    <>
      <div>
        {query.length > 0 && <h1>Resultados de búsqueda para: {queryVal}</h1>}
        {books.length > 0 ? (
          <ul>
            {books.map((book) => (
              <li key={book.key}>{book.title}</li>
            ))}
          </ul>
        ) : (
          <p>No se encontraron libros.</p>
        )}
      </div>
    </>
  );
};

export default Books;
