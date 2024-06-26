"use server"

import { redirect } from "next/navigation";
import prisma from "../utils/prisma";
import { randomInt } from "crypto";

export const resetHomePage = () => {
  redirect("/");
};


export const createCar = async (formData: FormData) => {
    const modelId = formData.get("modelId")?.toString();
    const brandId = formData.get("brandId")?.toString();
    const description = formData.get("description")?.toString();
    const color = formData.get("color")?.toString();
    const year = formData.get("year")?.toString();
    const price = formData.get("price")?.toString();

    

    try {
      if (!modelId || !brandId || !description || !color || !year || !price) {
        throw new Error("All fields are required");
      }

      await prisma.car.create({
        data: {
          modelId: modelId,
          brandId: brandId,
          description: description,
          color: color,
          year: year ? parseInt(year) : undefined,
          price: price ? parseInt(price) : undefined,
        },
        
      })
      
      redirect("/");

    } catch (error) {
      console.error(error);
      throw new Error("Error creating car");
    }

};

export const deleteCar = async (id: string) => {
    await prisma.car.delete({
        where: {
            id: id,
        },
    });

    redirect("/");
};

export const redirectSearchParams = async (query: string | null) => {
        const search = query?.trim();
    
        if (search) {
            redirect(`/?query=${search}`);
        } else {
            redirect("/");
        }
};

export const findCars = async (query: string) => {

    const cars = await prisma.car.findMany({
        where: {
            OR: [
              {
                brand: {
                  name: {
                    contains: query,
                  },
                },
              },
              {
                model: {
                  name: {
                    contains: query,
                  },
                },
              },
              {
                description: {
                  contains: query,
                },
              },
            ],
          },
          include: {
            brand: true,
            model: true,
          },
        });

    return cars;
}

export const quickAddTestCar = async () => {
    const models = await prisma.carModel.findMany();
    const model = models[randomInt(models.length)];

    await prisma.car.create({
        data: {
            modelId: model.id,
            brandId: model.brandId,
            description: "Quick random test car",
            year: randomInt(23) + 2000,
            color: "test color",
            price: randomInt(1000000) + 10000,
        },
    });

    redirect("/");
}
