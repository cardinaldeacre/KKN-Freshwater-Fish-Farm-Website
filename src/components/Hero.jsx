import { Card, CardContent } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import img1 from '@/assets/img_landscape.png'
import img2 from '@/assets/image.png'

export default function Hero() {
    const images = [img1, img2, img1, img2, img1];

    return (
        <section className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 items-center min-h-120 gap-10 py-10">
                <div className="flex flex-col gap-6 order-1 md:order-1">
                    <h1 className="text-4xl md:text-4xl font-bold text-center md:text-left leading-tight">
                        Selamat Datang di <span className="text-blue-600">Budidaya Ikan</span> Air Tawar
                    </h1>
                    <p className="text-base md:text-lg text-center md:text-left text-gray-600 max-w-xl mx-auto md:mx-0">
                        Temukan berbagai informasi seputar budidaya ikan air tawar, tips, dan produk terbaik untuk kebutuhan Anda.
                    </p>
                </div>

                <div className="flex justify-center items-center order-2 md:order-2 w-full">
                    <div className="flex justify-center items-center order-1 md:order-2 w-full">
                        <Carousel
                            opts={{
                                align: "start",
                                loop: true
                            }}
                            className="relative w-full max-w-120 sm:max-w-md lg:max-w-lg"
                        >
                            <CarouselContent>
                                {images.map((image, index) => (
                                    <CarouselItem key={index}>
                                        <div className="p-1">
                                            <Card className="overflow-hidden border-none shadow-xl rounded-2xl">
                                                <CardContent className="flex aspect-video items-center justify-center p-0">
                                                    <img
                                                        src={image}
                                                        alt={`Slide ${index + 1}`}
                                                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                                                    />
                                                </CardContent>
                                            </Card>
                                        </div>
                                    </CarouselItem>
                                ))}
                            </CarouselContent>

                            <div className="absolute inset-0 pointer-events-none flex items-center justify-between px-4">
                                <CarouselPrevious className="pointer-events-auto static translate-y-0 h-10 w-10 bg-white/80 hover:bg-white border-none shadow-md" />
                                <CarouselNext className="pointer-events-auto static translate-y-0 h-10 w-10 bg-white/80 hover:bg-white border-none shadow-md" />
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </section>
    )
}