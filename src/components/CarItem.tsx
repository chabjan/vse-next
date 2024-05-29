import { CarWithDeps } from "@prisma/client"
import Link from "next/link";

const CarItem = ({ car }: {car: CarWithDeps}) => {

    return (
        <Link href={`/car/${car.id}`}>
            <div>{car.model.name}</div>
        </Link>
    )
}

export default CarItem;