import Link from "next/link"

type Props = {
    data: {
        id: number;
        title: string;
        img: string;
        priceFrom: number;
        priceTo: number;
    }
}

export const CarItem = ({ data }: Props) => {
    return (
        <Link href={`/car/${data.id}`} >
            <img src={`/uploads/${data.img}`} alt="Imagem do carro" className="w-full rounded" />
            <p className="text-lg font-bold mt-2">{data.title}</p>
            <p className="text-gray-700 mt-3">
                De <span className="line-through"> R${data.priceFrom.toFixed(2).replace('.', ',')}
                </span> por:
            </p>
            <p className="text-green-700 text-xl font-bold mt-2">
                R${data.priceTo.toFixed(2).replace('.', ',')}
            </p>
        </Link>
    )
}