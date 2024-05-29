'use client';
import { Brand, CarModel } from "@prisma/client"
import { useMemo, useState } from "react";
import { createCar } from "../utils/actions";

const NewCarForm = ( {models, brands}: {models: CarModel[], brands: Brand[]} ) => {

    const [brandId, setBrandId] = useState("");
    const [modelId, setModelId] = useState("");

    const filteredModels = useMemo(() => {
        return models.filter((model) => model.brandId === brandId);
    }, [models, brandId]);

    return (
        <div>
            <h1>New Car Form</h1>
            <form action={createCar}>
                <select onChange={(e) => {
                            setBrandId(e.target.value);
                }}>
                    {brands.map((brand) => 
                        <option key={brand.id} value={brandId}>{brand.name}</option>
                    )}
                </select>
                <select onChange={(e) => {
                    setModelId(e.target.value);
                }}>
                    {filteredModels.map((model) => 
                        <option key={model.id} value={model.id}>{model.name}</option>
                    )}
                </select>
                <input type="text" placeholder="Description" />
                <input type="number" placeholder="Year" />
                <input type="text" placeholder="Price" />
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default NewCarForm;
