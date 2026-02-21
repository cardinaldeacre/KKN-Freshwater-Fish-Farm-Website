import { Card, CardContent } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import LogoLoop from "./ui/LogoLoop"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { PlayCircle, ChevronRight } from "lucide-react"
import img1 from '@/assets/img_landscape.png'
import img2 from '@/assets/rame.png'
import img100 from '@/assets/100.png'
import imgkkn from '@/assets/kkn.png'
import imglpm from '@/assets/lpm.png'
import imgunida from '@/assets/unida.png'

export default function Hero() {
    const images = [img1, img2, img1, img2, img1];
    const logos = [
        { src: img100, alt: "Logo 100" },
        { src: imgkkn, alt: "Logo KKN" },
        { src: imglpm, alt: "Logo LPM" },
        { src: imgunida, alt: "Logo Unida" }
    ];

    return (
        <section className="overflow-hidden">
            <div className="container mx-auto px-4 py-8 lg:py-16">
                <div className="flex justify-center md:justify-start animate-in fade-in slide-in-from-top-4 duration-700">
                    <a href="#" className="inline-flex justify-between items-center py-1 px-1 pr-4 mb-7 text-sm text-gray-700 bg-blue-50 rounded-full dark:bg-gray-800 dark:text-white hover:bg-blue-100 transition-colors" role="alert">
                        <Badge className="rounded-full px-3 py-0.5 mr-3 bg-blue-600">Baru</Badge>
                        <span className="text-sm font-medium">Panduan Sukses Panen Ikan Nila 2026</span>
                        <ChevronRight className="ml-2 w-4 h-4" />
                    </a>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-12">
                    <div className="flex flex-col gap-6 order-2 md:order-1">
                        <h1 className="animate-in fade-in slide-in-from-bottom-5 duration-1000 text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-none  text-center md:text-left">
                            Investasi Masa Depan lewat <span className="text-blue-600">Budidaya Ikan</span>
                        </h1>

                        <p className="animate-in fade-in slide-in-from-bottom-5 delay-200 duration-1000 text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400 text-center md:text-left">
                            Kami fokus pada inovasi teknologi budidaya air tawar untuk membantu masyarakat mencapai kemandirian ekonomi dan pangan yang berkelanjutan.
                        </p>
                        <div className="animate-in fade-in slide-in-from-bottom-5 delay-300 duration-1000 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                            <Button size="lg" className="bg-blue-700 hover:bg-blue-800 text-white px-8 py-6 text-lg rounded-xl shadow-lg shadow-blue-500">
                                Mulai Belajar
                                <ChevronRight className="ml-2 h-5 w-5" />
                            </Button>
                            <Button size="lg" variant="outline" className="px-8 py-6 text-lg rounded-xl border-gray-300">
                                <PlayCircle className="mr-2 h-5 w-5 text-blue-600" />
                                Tonton Video
                            </Button>
                        </div>

                        <div className="mt-8 animate-in fade-in slide-in-from-bottom-5 delay-500 duration-1000">
                            <span className="text-xs font-semibold text-gray-400 uppercase tracking-widest block mb-4 text-center md:text-left">DIDUKUNG OLEH</span>
                            <div className="border-5 border-blue-700 bg-white rounded-2xl p-1 shadow-lg shadow-blue-500 overflow-hidden">
                                <LogoLoop
                                    logos={logos}
                                    speed={80}
                                    direction="left"
                                    logoHeight={55}
                                    gap={65}
                                    hoverSpeed={120}
                                    scaleOnHover
                                    fadeOut
                                    fadeOutColor="#ffffff"
                                    ariaLabel="Technology partners"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="animate-in fade-in slide-in-from-right-10 duration-1000 order-1 md:order-2 w-full">
                        <Carousel
                            opts={{
                                align: "start",
                                loop: true
                            }}
                            className="relative w-full shadow-2xl rounded-3xl overflow-hidden"
                        >
                            <CarouselContent>
                                {images.map((image, index) => (
                                    <CarouselItem key={index}>
                                        <div className="aspect-video">
                                            <img
                                                src={image}
                                                alt={`Slide ${index + 1}`}
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                    </CarouselItem>
                                ))}
                            </CarouselContent>

                            <div className="absolute inset-0 pointer-events-none flex items-center justify-between px-4">
                                <CarouselPrevious className="pointer-events-auto static translate-y-0 h-10 w-10 bg-white/90 hover:bg-white border-none shadow-xl" />
                                <CarouselNext className="pointer-events-auto static translate-y-0 h-10 w-10 bg-white/90 hover:bg-white border-none shadow-xl" />
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </section>
    )
}