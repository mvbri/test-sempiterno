import Link from "next/link";
import React from "react";
import BookItem from "./BookItem";

interface Book {
  key: string;
  title: string;
  author_name?: string[];
  cover_i?: number;
}

function Books({ books }: { books: Book[] }) {
  return (
    <div className="grid grid md:grid-cols-[repeat(3,minmax(300px,1fr))]">
      {books?.map((book) => (
        <BookItem key={book.key} book={book} />
      ))}
    </div>
  );
}

export default Books;
