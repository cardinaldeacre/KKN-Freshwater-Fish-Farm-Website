import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import imgNila from '@/assets/img_landscape.png';
import imgLele from '@/assets/rame.png';

export default function Activities() {
    return (
        <section className="bg-blue-950 py-16 px-6 overflow-hidden">
            <div className="container mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                    <div className="order-2 lg:order-1 text-center lg:text-left space-y-6">
                        <h2 className="text-4xl md:text-5xl font-extrabold text-white leading-tight">
                            Pelihara Ikan Unggulan <br />
                            <span className="text-blue-400">Untuk Hidup Lebih Baik</span>
                        </h2>
                        <p className="text-blue-100 text-lg max-w-xl mx-auto lg:mx-0 opacity-80 leading-relaxed">
                            Budidaya ikan air tawar tidak hanya meningkatkan ketahanan pangan keluarga,
                            tetapi juga berkontribusi pada lingkungan yang lebih sehat dan ekonomi yang mandiri.
                        </p>
                        <div className="pt-4 flex justify-center lg:justify-start">
                            <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 rounded-full text-lg shadow-xl shadow-blue-900/40">
                                Baca Selengkapnya
                                <ChevronRight className="ml-2 h-5 w-5 bg-white text-blue-600 rounded-full p-0.5" />
                            </Button>
                        </div>
                    </div>

                    <div className="order-1 lg:order-2 relative flex justify-center items-center h-87.5 md:h-112.5">
                        <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full border-8 border-blue-900/50 overflow-hidden shadow-2xl z-10 animate-in fade-in zoom-in duration-1000">
                            <img
                                src={imgNila}
                                alt="Ikan Nila Unggulan"
                                className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                            />
                        </div>

                        <div className="absolute bottom-4 left-4 md:bottom-10 md:left-20 w-40 h-40 md:w-52 md:h-52 rounded-full border-8 border-blue-950 overflow-hidden shadow-2xl z-20 animate-in fade-in slide-in-from-left-10 duration-1000 delay-300">
                            <img
                                src={imgLele}
                                alt="Ikan Lele Unggulan"
                                className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                            />
                        </div>

                        <div className="absolute top-10 right-20 w-8 h-8 bg-blue-400/20 rounded-full blur-sm animate-pulse"></div>
                        <div className="absolute bottom-20 right-10 w-12 h-12 bg-blue-400/10 rounded-full blur-md"></div>
                    </div>

                </div>
            </div>
        </section>
    );
}