import { Suspense } from "react";
import Books from "./components/Books";

export default async function Home({ searchParams } : { searchParams?: {
  search?: string
} }) {

  const params  = await searchParams
   const query = params?.search || "";
  return (
    <div className="pt-[4rem]">
      <Suspense fallback="Loading...">
        <Books query={query}/>
      </Suspense>
    </div>
  );
}
