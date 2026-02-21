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
            <Products />
        </>
    )
}
