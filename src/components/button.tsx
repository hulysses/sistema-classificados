type Props = {
    label: string;
}

export const Button = ({ label }: Props) => {
    return (
        <button
            className="px-6 py-3 bg-green-700 text-white font-bold rounded hover:bg-green-600"
        >
            {label}
        </button>
    )
}