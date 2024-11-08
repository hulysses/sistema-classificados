import { getCars } from "@/actions/get-cars";
import { CarItem } from "@/components/car-item";
import { Header } from "@/components/header";

export default async function Page() {
  const cars = await getCars();

  return (
    <div>
      <Header />

      <section className="mx-4 grid sm:grid-cols-2 md:grid-cols-4 gap-4">
        {cars.map(carItem => (
          <CarItem key={carItem.id} data={carItem}/>
        ))}
      </section>
    </div>
  );
}