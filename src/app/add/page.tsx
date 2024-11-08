import { AddForm } from "@/components/add-form";
import { Header } from "@/components/header";

export default function Page() {
    return (
        <div className="">
            <Header />
            <section className="mx-4">
                <AddForm />
            </section>
        </div>
    )
}