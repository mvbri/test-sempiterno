interface BookFetch {
  key: number;
  title: string;
  author_name: string[];
  cover_i: string;
}

interface BookDetails {
  title: string | string[];
  description?: string | string[];
  created?: string[];
}

export const fetchBooks = async (
  query: string | string[]
): Promise<BookFetch[]> => {
  try {
    const res = await fetch(`https://openlibrary.org/search.json?q=${query}`);

    if (!res.ok) throw Error("Something goes wrong");

    const data = await res.json();
    data.docs.forEach(
      (docs: any) => (docs.key = docs.key.replace("/works/", ""))
    );
    return data.docs;
  } catch (err) {
    console.log(err);
    return [];
  }
};

export const fetchTrendingBooks = async () => {
  try {
    const res = await fetch(`https://openlibrary.org/trending/daily.json`);

    if (!res.ok) throw Error("Something goes wrong");

    const data = await res.json();

    data.works.forEach(
      (work: any) => (work.key = work.key.replace("/works/", ""))
    );

    return data.works;
  } catch (err) {
    console.log(err);
  }
};

export const fetchBookDetails = async (bookKey: {
  bookey: string | string[];
}): Promise<BookDetails[] | null> => {
  try {
    const res = await fetch(`https://openlibrary.org/works/${bookKey}.json`);

    if (!res.ok) throw Error("Something goes wrong");

    const data = await res.json();

    data.key = data.key.replace("/works/", "");

    return data;
  } catch (err) {
    console.log(err);
    return [];
  }
};
