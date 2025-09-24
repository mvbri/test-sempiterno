import { Suspense } from "react";
import BookList from "./components/BookList";
import Loading from "./Loading";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const params = await searchParams;
  const searchQuery = params?.search || "";
  return (
    <div className="pt-[4rem]">
      <Suspense key={searchQuery as string} fallback={<Loading />}>
        <BookList query={searchQuery} />
      </Suspense>
    </div>
  );
}
