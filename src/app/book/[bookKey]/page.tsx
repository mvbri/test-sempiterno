import React from "react";
import { fetchBookDetails } from "../../lib/data";
import FavoriteButton from "@/app/components/FavoriteButton";

export default async function BookDetailsPage(
  props: PageProps<"/book/[bookKey]">
) {
  const params = await props.params;
  const { bookKey } = params;

  const book = await fetchBookDetails(bookKey);

  if (!book) {
    return <p>Libro no encontrado.</p>;
  }

  const formatDate = book.created?.value
    ? new Date(book.created.value).toDateString()
    : "Fecha no disponible";

  const description =
    typeof book.description === "object" && book.description !== null
      ? book.description?.value
      : book.description;

  return (
    <div className="container mx-auto p-8">
      <div className="flex justify-between">
        <h2 className="font-semibold mb-8">{book?.title}</h2>
        <FavoriteButton book={book} />
      </div>
      <div className="flex flex-wrap">
        <img
          className="mb-4"
          src={`${
            book.covers
              ? `https://covers.openlibrary.org/b/id/${book.covers[0]}-L.jpg`
              : "../../../default.jpg"
          }`}
          alt="Imagen de producto"
        />
        {book.description && (
          <p className="mb-3 md:pl-8 p-1 md:p-4 md:w-[50em]">{description}</p>
        )}
      </div>
      {book.created && <p className="text-sm font-semibold">{formatDate}</p>}
    </div>
  );
}
