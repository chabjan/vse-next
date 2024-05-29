import Link from "next/link";
import prisma from "@/src/utils/prisma";

const fetchCarDetails = async (id: string) => {
    const car = await prisma.car.findUnique({
        where: { id },
        include: {
            brand: true,
            model: true,
        },
    });
    return car;

}

const CarDetailPage = async ( { params }: { params: {id: string}} ) => {
    const car = await fetchCarDetails(params.id);
    console.log("car", car);
    console.log(car);


    return (
        <div>
            <Link href={"/"}>Home</Link>
            <h1>Car Detail Page</h1>
            <div>{car?.brand.name}</div>
            <div>{car?.model.name}</div>
            <div>{car?.description}</div>
        </div>
    )
}

export default CarDetailPage;
