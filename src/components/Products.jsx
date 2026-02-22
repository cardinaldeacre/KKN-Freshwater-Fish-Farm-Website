import { Button } from "@/components/ui/button";
import TiltedCard from "@/components/ui/TiltedCard";
import { ChevronRight, ShoppingCart } from "lucide-react";
import imgLele from '@/assets/rame.png'; // Gambar Ikan Lele Segar
import imgPakan from '@/assets/img_landscape.png';
import imgNila from '@/assets/img_landscape.png';

export default function Products() {
    const products = [
        {
            title: "Ikan Lele Segar",
            description: "Ikan lele segar berkualitas tinggi dari kolam Desa Ngloning yang siap untuk dikonsumsi.",
            image: imgLele,
            isFeatured: true
        },
        {
            title: "Pakan Ikan Lele",
            description: "Pakan berkualitas tinggi untuk mendukung pertumbuhan optimal.",
            image: imgPakan,
            isFeatured: false
        },
        {
            title: "Abon Ikan Lele",
            description: "Abon ikan lele gurih dan lezat, cocok untuk camilan atau pelengkap nasi.",
            image: imgNila,
            isFeatured: false
        }
    ];

    return (
        <section className=" transition-colors duration-500">
            <div className="flex items-center h-24 bg-blue-950 shadow-inner mb-12">
                <h2 className="text-2xl md:text-3xl mx-auto font-bold text-white text-center">
                    Produk Unggulan Kami
                </h2>
            </div>

            <div className="container mx-auto px-4 py-12">
                <div className="flex flex-col lg:flex-row items-center gap-12 bg-slate-50 dark:bg-slate-900 rounded-3xl p-8 mb-16 shadow-sm border border-slate-100 dark:border-blue-900/30">
                    <div className="w-full lg:w-1/2 flex justify-center">
                        <TiltedCard
                            imageSrc={products[0].image}
                            altText={products[0].title}
                            captionText={products[0].title}
                            containerHeight="350px"
                            containerWidth="100%"
                            imageHeight="350px"
                            imageWidth="100%"
                            rotateAmplitude={12}
                            scaleOnHover={1.1}
                            showMobileWarning={false}
                            showTooltip={true}
                            displayOverlayContent={true}
                            overlayContent={
                                <div className="bg-blue-600/80 backdrop-blur-sm px-4 py-2 m-5 rounded-full">
                                    <p className="text-white font-bold text-sm">Produk Terlaris!</p>
                                </div>
                            }
                        />
                    </div>

                    <div className="w-full lg:w-1/2 space-y-6 text-center lg:text-left">
                        <span className="bg-blue-100 text-blue-700 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">Terbaru</span>
                        <h3 className="text-4xl font-extrabold text-blue-950 dark:text-white leading-tight">
                            {products[0].title}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
                            {products[0].description}
                        </p>
                        <div className="flex flex-wrap justify-center lg:justify-start gap-4">
                            <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 rounded-full text-lg shadow-lg">
                                Pesan Sekarang
                                <ShoppingCart className="ml-2 h-5 w-5" />
                            </Button>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-10">
                    {products.slice(1).map((product, index) => (
                        <div key={index} className="flex flex-col items-center bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-md border border-gray-50 dark:border-blue-900/20 group">
                            <div className="w-full mb-6">
                                <TiltedCard
                                    imageSrc={product.image}
                                    altText={product.title}
                                    containerHeight="250px"
                                    containerWidth="100%"
                                    imageHeight="250px"
                                    imageWidth="100%"
                                    rotateAmplitude={10}
                                    scaleOnHover={1.05}
                                    showTooltip={false}
                                />
                            </div>
                            <h4 className="text-xl font-bold text-blue-950 dark:text-white mb-2">{product.title}</h4>
                            <p className="text-gray-500 dark:text-gray-400 text-sm text-center mb-4">{product.description}</p>
                            <Button variant="outline" className="rounded-full border-blue-600 text-blue-600 hover:bg-blue-50">
                                Detail Produk
                                <ChevronRight className="ml-1 h-4 w-4" />
                            </Button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}