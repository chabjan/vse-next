import { Suspense } from "react";
import CarList from "../components/CarList";
import CarSearchForm from "../components/CarSearchForm";
import { findCars } from "../utils/actions";
import Link from "next/link";

const HomePage = async ({
  searchParams
}: {
  searchParams: { query?: string | null }
}) => {
  console.log('searchParams', searchParams);
  const cars = await findCars(searchParams.query || "");

  return (
    <main className="px-8 py-4">
      <div className="pt-5 flex flex-column md:flex-row md:align-items-center md:justify-content-between">
        <div className="text-3xl font-medium text-900 mb-4">Home Page</div>
        <div>
          <Link href="/car/new"> Add New Car </Link>
        </div>
      </div>
      <CarSearchForm />
      {searchParams.query && (<div className="font-italic my-4">Search results for: {searchParams.query}</div>)}
      <CarList cars={cars} />
    </main>
  );
};

export default HomePage;
