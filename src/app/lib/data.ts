interface BookFetch {
  key: string;
  title: string;
  author_name: string[];
  cover_i: number;
}

interface BookDetails {
  key: string;
  title: string;
  author_name?: string[];
  publish_date?: string;
  description?: string | string[];
  created?: {
    type?: string;
    value?: string | number | Date | undefined;
  };
  covers?: number[]; 
  cover_url?: string;
}

interface BookApi {
  key: string;
  title: string;
  author_name: string[];
  cover_i?: number;
}


export const fetchBooks = async (
  query: string | string[]
): Promise<BookFetch[] | null >  => {
  try {
    const res = await fetch(`https://openlibrary.org/search.json?q=${query.query}`);

    if (!res.ok) throw Error("Something goes wrong");

    
    const data = await res.json();
    data.docs.forEach(
      (docs: BookApi[] ) => (docs.key = docs.key.replace("/works/", ""))
    );
    return data.docs;
  } catch (err) {
    console.log(err);
    return null;
  }
};

export const fetchTrendingBooks = async () => {
  try {
    const res = await fetch(`https://openlibrary.org/trending/daily.json`);

    if (!res.ok) throw Error("Something goes wrong");

    const data = await res.json();

    console.log(data)

    data.works.forEach(
      (work: BookApi) => (work.key = work.key.replace("/works/", ""))
    );

    return data.works;
  } catch (err) {
    console.log(err);
  }
};

export const fetchBookDetails = async (bookKey:  string): Promise<BookDetails| null> => {
  try {
    const res = await fetch(`https://openlibrary.org/works/${bookKey}.json`);

    if (!res.ok) throw Error("Something goes wrong");

    const data = await res.json();
    console.log(data)

    data.key = data.key.replace("/works/", "");

    return data;
  } catch (err) {
    console.log(err);
    return null;
  }
};
