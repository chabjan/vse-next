import { Suspense } from "react";
import CarList from "../components/CarList";
import CarSearchForm from "../components/CarSearchForm";
import { findCars, quickAddTestCar } from "../utils/actions";
import Link from "next/link";
import AddRandomCarButton from "../components/AddRandomCarButton";
import { Button } from "primereact/button";
import ResetSearchButton from "../components/ResetSearchButton";

const HomePage = async ({
        searchParams
    }: {
        searchParams: { query?: string | null }
    }) => {
    console.log('searchParams', searchParams);
    const cars = await findCars(searchParams.query || "");

    return (
        <>
            <div className="py-4 flex flex-column md:flex-row md:align-items-center md:justify-content-between">
                <div className="text-3xl font-medium text-900">
                    Cars
                </div>
                <Link href="/car/new" > 
                    <div className="text-white bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
                        Add New Car
                    </div>
                </Link>
             </div>
            <CarSearchForm />
            {searchParams.query && (
                <div className="p-1 flex flex-row align-items-center">
                    <div className="font-italic me-6">Search results for: {searchParams.query}</div>
                    <ResetSearchButton />
                </div>
            )}
            <CarList cars={cars} />
            <AddRandomCarButton />
        </>
  );
};

export default HomePage;
