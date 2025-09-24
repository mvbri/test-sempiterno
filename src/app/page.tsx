import { Suspense } from "react";
import BookList from "./components/BookList";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const params = await searchParams;
  console.log(params);
  const searchQuery = params?.search || "";
  return (
    <div className="pt-[4rem]">
      <Suspense fallback="Loading...">
        <BookList query={searchQuery} />
      </Suspense>
    </div>
  );
}
