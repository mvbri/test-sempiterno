export const fetchBooks = async ({ query } : {query: string}) => {
  try {
    const res = await fetch(`https://openlibrary.org/search.json?q=${query}`);

    if(!res.ok)  throw Error("Something goes wrog")
        
    const data = await res.json()
        return data.docs

  } catch (err) {
    console.log(err);
  }
};
