import NewCarForm from "@/src/components/NewCarForm";
import prisma from "@/src/utils/prisma";
import { CarModel } from "@prisma/client";


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
        <div>
            <h1>New Car Page</h1>
            <NewCarForm brands={brands} models={models}/>
        </div>
    );
}

export default NewCarPage;
