import { Card, CardContent } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import LogoLoop from "@/components/ui/LogoLoop"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { PlayCircle, ChevronRight, Instagram } from "lucide-react"
import { FaWhatsapp } from "react-icons/fa";
import img1 from '@/assets/img_landscape.png'
import img2 from '@/assets/rame.png'
import img100 from '@/assets/100.png'
import imgkkn from '@/assets/kkn.png'
import imglpm from '@/assets/lpm.png'
import imgunida from '@/assets/unida.png'

export default function Contact() {
    const images = [img1, img2, img1, img2, img1];
    const logos = [
        { src: img100, alt: "Logo 100" },
        { src: imgkkn, alt: "Logo KKN" },
        { src: imglpm, alt: "Logo LPM" },
        { src: imgunida, alt: "Logo Unida" }
    ];

    return (
        <section className="overflow-hidden py-10">
            <div className="container mx-auto px-4 py-8 lg:py-16">
                <div className="flex justify-center md:justify-start animate-in fade-in slide-in-from-top-4 duration-700">
                    <a href="#" className="inline-flex justify-between items-center py-1 px-1 pr-4 mb-7 text-sm text-gray-700 bg-blue-50 rounded-full dark:bg-gray-800 dark:text-white hover:bg-blue-100 transition-colors" role="alert">
                        <Badge className="rounded-full px-3 py-0.5 mr-3 bg-blue-600">Baru</Badge>
                        <span className="text-sm font-medium">Panduan Sukses Panen Ikan Lele 2026</span>
                        <ChevronRight className="ml-2 w-4 h-4" />
                    </a>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-12">
                    <div className="flex flex-col gap-6 order-2 md:order-1">
                        <div className="flex flex-col justify-center space-y-8 order-2 md:order-1">
                            <div className="space-y-4">
                                <Badge className="w-fit bg-blue-100 text-blue-700 hover:bg-blue-100 border-none px-4 py-1 rounded-full text-sm font-bold uppercase tracking-wider">
                                    Hubungi Kami
                                </Badge>
                                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-none text-slate-900 dark:text-white text-center md:text-left">
                                    Siap Menjalin <br />
                                    <span className="text-blue-600">Kemitraan Dagang</span>
                                </h1>
                                <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl leading-relaxed text-center md:text-left">
                                    Apakah Anda pedagang atau pengelola restoran? Kami siap menyediakan pasokan ikan lele dan nila segar berkualitas tinggi langsung dari kolam Desa Ngloning.
                                </p>
                            </div>

                            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start">
                                <Button
                                    size="lg"
                                    className="rounded-xl text-white px-8 py-6 text-lg bg-green-600 hover:bg-green-700 shadow-lg shadow-green-800 group"
                                    onClick={() => window.open('https://wa.me/+6281330774174?text=Halo%20Pengelola%20Budiya%20Ikan%20Air%20Tawar%20Desa%20Ngloning%2C%20saya%20tertarik%20untuk%20memesan%20ikan%20segar%20untuk%20keperluan%20dagang%2Frestoran%20saya.%20Bisa%20minta%20info%20harga%20terbarunya%3F', '_blank')}
                                >
                                    <FaWhatsapp className="mr-1 text-white group-hover:scale-130 transition-transform" />
                                    Pesan via WhatsApp
                                    <ChevronRight className="ml-1 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                                </Button>
                            </div>

                            <div className="flex items-center gap-6 justify-center md:justify-start pt-4 border-t border-slate-100 dark:border-slate-800">
                                <div className="text-center md:text-left">
                                    <p className="text-2xl font-bold text-blue-950 dark:text-white">100%</p>
                                    <p className="text-xs text-slate-500 uppercase">Ikan Segar</p>
                                </div>
                                <div className="w-px h-8 bg-slate-200"></div>
                                <div className="text-center md:text-left">
                                    <p className="text-2xl font-bold text-blue-950 dark:text-white">Desa</p>
                                    <p className="text-xs text-slate-500 uppercase">Ngloning</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="animate-in fade-in slide-in-from-right-10 duration-1000 order-1 md:order-2 w-full">
                        <div className="relative w-full shadow-2xl rounded-3xl overflow-hidden border-4 border-white dark:border-blue-900/30 aspect-video">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2249.148960832426!2d111.41458605844508!3d-7.98767879275378!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e797514cce51ed9%3A0xca4cd842637f816!2sBudidaya%20Ikan%20Air%20Tawar%20Desa%20Ngloning!5e1!3m2!1sid!2sid!4v1772080843707!5m2!1sid!2sid"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Lokasi Budidaya Ikan Ngloning"
                                className="grayscale hover:grayscale-0 transition-all duration-700"
                            ></iframe>

                            <div className="absolute top-4 right-4">
                                <div className="bg-blue-600 text-white px-4 py-2 rounded-full text-xs font-bold shadow-lg">
                                    Titik Lokasi Kolam
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}