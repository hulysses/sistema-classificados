import { prisma } from "@/utils/prisma"

type Params = {
    title: string;
    description?: string;
    author_name: string;
    author_email: string;
    price_from: string;
    price_to: string;
    negotiable?: string;
    imgName: string;
}

export const addCar = async (data: Params) => {
    const newCar = await prisma.car.create({
        data: {
            title: data.title,
            description: data.description,
            authorName: data.author_name,
            authorEmail: data.author_email,
            priceFrom: parseFloat(data.price_from),
            priceTo: parseFloat(data.price_to),
            negotiable: data.negotiable == 'on',
            img: data.imgName
        }
    });

    return newCar;
}

export const getAllCars = async () => {
    return await prisma.car.findMany({
        select: {
            id: true,
            title: true,
            img: true,
            priceFrom: true,
            priceTo: true
        }
    });
}