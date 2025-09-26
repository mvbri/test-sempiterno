import { Book } from "../interfaces";

interface BookApi {
  key: string;
  title: string;
  author_name?: string[];
  cover_i?: number;
}


export const fetchBooks = async (
  query: string
): Promise<BookApi[] >  => {
  try {
    const res = await fetch(`https://openlibrary.org/search.json?q=${query}`);

    if (!res.ok) throw Error("Something goes wrong");

    
    const data = await res.json();
    data.docs.forEach(
      (doc: BookApi ) => (doc.key = doc.key.replace("/works/", ""))
    );
    return data.docs;
  } catch (err) {
    console.log(err);
    return [];
  }
};

export const fetchTrendingBooks = async (): Promise<BookApi[] >  => {
  try {
    const res = await fetch(`https://openlibrary.org/trending/daily.json`);

    if (!res.ok) throw Error("Something goes wrong");

    const data = await res.json();

    data.works.forEach(
      (work: BookApi) => (work.key = work.key.replace("/works/", ""))
    );

    return data.works;
  } catch (err) {
    console.log(err);
    return []
  }
};

export const fetchBookDetails = async (bookKey:  string): Promise<Book| null> => {
  try {
    const res = await fetch(`https://openlibrary.org/works/${bookKey}.json`);

    if (!res.ok) throw Error("Something goes wrong");

    const data = await res.json();

    data.key = data.key.replace("/works/", "");

    return data;
  } catch (err) {
    console.log(err);
    return null;
  }
};
