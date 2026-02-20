import { Card } from "flowbite-react";
import img1 from '@/assets/img_landscape.png'
import img2 from '@/assets/rame.png'

export default function Products() {
    const images = [img1, img2, img1, img2, img1];
    const products = [
        {
            title: "Pakan Ikan Lele",
            description: "Pakan berkualitas tinggi untuk mendukung pertumbuhan optimal ikan lele Anda.",
        },
        {
            title: "Ikan Lele Segar",
            description: "Ikan lele segar berkualitas tinggi yang siap untuk dikonsumsi.",
        },
        {
            title: "Ikan Nila Segar",
            description: "Ikan nila segar berkualitas tinggi yang siap untuk dikonsumsi.",
        }
    ];

    return (
        <section>
            <div className="flex max-w-screen items-center h-24 bg-blue-950 ">
                <h2 className="text-2xl mx-auto justify-center font-bold text-white text-center">Produk Kami</h2>
            </div>
            <div className="grid-cols-3 mx-auto items-center px-2 md:px2 sm:px-2 py-10 max-w-full grid gap-10">
                {products.map((product, index) => (
                    <Card
                        className="max-w-sm mx-auto"
                        imgAlt="Meaningful alt text for an image that is not purely decorative"
                        imgSrc={images[index]}
                    >
                        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                            {products[index].title}
                        </h5>
                        <p className="font-normal text-gray-700 dark:text-gray-400">
                            {products[index].description}
                        </p>
                    </Card>
                ))}
            </div>
        </section >
    )
}