import { Button } from "@/components/ui/button";
import TiltedCard from "@/components/ui/TiltedCard";
import { ChevronRight, ShoppingCart } from "lucide-react";
import imgLele from '@/assets/lele.jpg';
import imgPakan from '@/assets/pakan_lele.jpg';
import imgAbon from '@/assets/abon_lele.jpg';

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
            image: imgAbon,
            isFeatured: false
        }
    ];

    return (
        <section className=" transition-colors duration-500">

            <div className="container mx-auto px-4 py-12">
                <div className="flex flex-col lg:flex-row items-center gap-12 bg-blue-950 rounded-3xl p-4  mb-16 shadow-sm border border-slate-100 dark:border-blue-900/30">
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
                            <a href=""></a>
                            <Button
                                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 rounded-full text-lg shadow-lg"
                                onClick={() => window.open('https://wa.me/+6281330774174?text=Halo%20Pengelola%20Budiya%20Ikan%20Air%20Tawar%20Desa%20Ngloning%2C%20saya%20tertarik%20untuk%20memesan%20ikan%20segar%20untuk%20keperluan%20dagang%2Frestoran%20saya.%20Bisa%20minta%20info%20harga%20terbarunya%3F', '_blank')}
                            >
                                Pesan Sekarang
                                <ShoppingCart className="ml-2 h-5 w-5" />
                            </Button>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-10">
                    {products.slice(1).map((product, index) => (
                        <div key={index} className="flex flex-col items-center bg-blue-950 p-6 rounded-2xl shadow-md border border-gray-50 dark:border-blue-900/20 group">
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
                            <Button
                                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 rounded-full text-lg shadow-lg"
                                onClick={() => window.open('https://wa.me/+6281330774174?text=Halo%20Pengelola%20Budiya%20Ikan%20Air%20Tawar%20Desa%20Ngloning%2C%20saya%20tertarik%20untuk%20memesan%20ikan%20segar%20untuk%20keperluan%20dagang%2Frestoran%20saya.%20Bisa%20minta%20info%20harga%20terbarunya%3F', '_blank')}
                            >
                                Pesan Sekarang
                                <ChevronRight className="ml-1 h-4 w-4" />
                            </Button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}