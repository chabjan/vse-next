"use server"

import { redirect } from "next/navigation";
import prisma from "../utils/prisma";


export const createCar = async (formData: FormData) => {
    const modelId = formData.get("modelId")?.toString();
    const brandId = formData.get("brandId")?.toString();
    const description = formData.get("description")?.toString();

    if (!modelId || !brandId || !description) {
        throw new Error("All fields are required");
    }

    await prisma.car.create({
        data: {
            modelId: modelId,
            brandId: brandId,
            description: description,
        },
    })

    redirect("/");
}
