"use server"

import { redirect } from "next/navigation";
import { fitImage } from "@/utils/fit-mage";
import { createCarSchema } from "@/schemas/create-car"
import { addCar } from "@/services/car";

export const createCar = async (formData: FormData) => {
    const data = createCarSchema.safeParse({
        title: formData.get('title'),
        description: formData.get('description'),
        author_name: formData.get('author_name'),
        author_email: formData.get('author_email'),
        negotiable: formData.get('negotiable') || undefined,
        price_from: formData.get('price_from'),
        price_to: formData.get('price_to'),
        img: formData.get('img')
    });

    if (data.success) {
        const imgName = await fitImage(data.data.img);
        const newCar = await addCar({
            title: data.data.title,
            description: data.data.description,
            author_name: data.data.author_name,
            author_email: data.data.author_email,
            negotiable: data.data.negotiable,
            price_from: data.data.price_from,
            price_to: data.data.price_to,
            imgName
        });

        console.log(newCar);

        redirect('/');
    } else {
        console.log(data.error.flatten().fieldErrors);
    }
}