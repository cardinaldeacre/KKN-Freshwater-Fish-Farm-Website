import Activities from "@/components/Activities";
import Hero from "@/components/Hero";
import Products from "@/components/Products";
import { Carousel } from "flowbite-react";
import StepsToStart from "@/components/StepToStart";

export default function Home() {
    return (
        <>
            <Hero />
            <Activities />
            <StepsToStart />
            <div className="flex items-center h-24 bg-blue-950 shadow-inner mb-12">
                <h2 className="text-2xl md:text-3xl mx-auto font-bold text-white text-center">
                    Produk Unggulan Kami
                </h2>
            </div>
            <Products />
        </>
    )
}
