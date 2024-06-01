import NewCarForm from "@/src/components/NewCarForm";
import prisma from "@/src/utils/prisma";


const fetchBrands = async () => {
    const brands = await prisma.brand.findMany();
    return brands;
}

const fetchCarModels = async () => {
    const models = await prisma.carModel.findMany();
    return models;
}


const NewCarPage = async () => {
    const brands = await fetchBrands();
    const models = await fetchCarModels();

    return (
        <>
            <div className="py-4 flex flex-column md:flex-row md:align-items-center md:justify-content-between">
                <div className="text-3xl font-medium text-900">New Car</div>
            </div>
            <NewCarForm brands={brands} models={models}/>
        </>
    );
}

export default NewCarPage;
