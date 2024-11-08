"use client"

import { Button } from "./button"
import { createCar } from "@/actions/create-car"

export const AddForm = () => {
    return (
        <form action={createCar}>
            <label className="block border border-gray-500 p-4 mb-3 rounded">
                <input type="file" name="img"
                    className="bg-black text-white text-lg w-full outline-none" />
            </label>
            <label className="block border border-gray-500 p-4 mb-3 rounded">
                <input type="text" name="title" placeholder="Informe o modelo do carro"
                    className="bg-black text-white text-lg w-full outline-none" />
            </label>
            <label className="block border border-gray-500 p-4 mb-3 rounded">
                <input type="number" name="price_from" placeholder="Informe o preço antigo"
                    className="bg-black text-white text-lg w-full outline-none" />
            </label>
            <label className="block border border-gray-500 p-4 mb-3 rounded">
                <input type="number" name="price_to" placeholder="Informe o preço novo"
                    className="bg-black text-white text-lg w-full outline-none" />
            </label>
            <label className="block border border-gray-500 p-4 mb-3 rounded">
                <input type="checkbox" name="negotiable" />
                Negociavél?
            </label>
            <label className="block border border-gray-500 p-4 mb-3 rounded">
                <input type="text" name="author_name" placeholder="Informe o nome do vendedor"
                    className="bg-black text-white text-lg w-full outline-none" />
            </label>
            <label className="block border border-gray-500 p-4 mb-3 rounded">
                <input type="email" name="author_email" placeholder="Informe o email do vendedor"
                    className="bg-black text-white text-lg w-full outline-none" />
            </label>
            <label className="block border border-gray-500 p-4 mb-3 rounded">
                <textarea name="description" rows={4}
                    className="resize-none bg-black text-white text-lg w-full outline-none" />
            </label>
            <Button label="Cadastrar" />
        </form>
    )
}