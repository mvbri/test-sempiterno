export const fetchBooks = async ({ query } : {query: string}) => {
  try {
    const res = await fetch(`https://openlibrary.org/search.json?q=${query}`);

    if(!res.ok)  throw Error("Something goes wrog")
        
    const data = await res.json()
    console.log(data)
        return data.docs

  } catch (err) {
    console.log(err);
  }
};

export const fetchTrendingBooks = async () => {
  try {
    const res = await fetch(`https://openlibrary.org/trending/daily.json`);

    if(!res.ok)  throw Error("Something goes wrog")
        
    const data = await res.json()
    console.log(data)
        return data.works

  } catch (err) {
    console.log(err);
  }
};
