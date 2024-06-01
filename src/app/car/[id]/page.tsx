import Link from "next/link";
import prisma from "@/src/utils/prisma";
import CarDeleteButton from "@/src/components/CarDeleteButton";
import { Button } from 'primereact/button';

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
    const emptyElement = <span className="font-italic">Nezadáno</span>;

    return (
        <>
            <div className="py-4 flex flex-column md:flex-row md:align-items-center md:justify-content-between">
                <div className="text-3xl font-medium text-900">Car Detail</div>
                {car?.id && <CarDeleteButton carId={car.id} />}
            </div>
            
            <div className="text-500 mb-5">{car?.id}</div>
            
            <div className="surface-card p-4 shadow-2 border-round grid grid-nogutter surface-border">
                <div className="col-12 md:col-6 p-3">
                    <div className="text-500 font-medium mb-2">Brand</div>
                    <div className="text-900">{car?.brand.name}</div>
                </div>
                <div className="col-12 md:col-6 p-3">
                    <div className="text-500 font-medium mb-2">Model</div>
                    <div className="text-900">{car?.model.name}</div>
                </div>
                <div className="col-12 md:col-6 p-3">
                    <div className="text-500 font-medium mb-2">Year</div>
                    <div className="text-900">{car?.year !== null ? car?.year : emptyElement}</div>
                </div>
                <div className="col-12 md:col-6 p-3">
                    <div className="text-500 font-medium mb-2">Color</div>
                    <div className="text-900">{car?.color !== null ? car?.color : emptyElement}</div>
                </div>
                <div className="col-12 p-3">
                    <div className="text-500 font-medium mb-2">Price</div>
                    <div className="text-900">{car?.price !== null ? car?.price : emptyElement}</div>
                </div>
                <div className="col-12 p-3">
                    <div className="text-500 font-medium mb-2">Description</div>
                    <div className="text-900 line-height-3">{car?.description !== null ? car?.description : emptyElement}</div>
                </div>
            </div>
        </>
    )
}

export default CarDetailPage;
