import { CarWithDeps } from "../types/prismaTypes"
import Link from "next/link";

const CarItem = ({ car }: {car: CarWithDeps}) => {

    return (
        <li className="p-2 px-4 flex flex-column md:flex-row md:align-items-center md:justify-content-between mb-2 hover:bg-gray-100">
            <div className="flex">
                <div className="mr-0 md:mr-8">
                    <span className="block text-900 font-medium mb-1">{car.brand.name} {car.model.name} {car.year}</span>
                    <div className="text-600">{car.description}</div>
                </div>
            </div>
            <div className="mt-2 md:mt-0 flex flex-nowrap">
                <Link href={`/car/${car.id}`} className="text-white bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
                    <div>Detail</div>
                </Link>
            </div>
        </li>
        
    )
}

export default CarItem;