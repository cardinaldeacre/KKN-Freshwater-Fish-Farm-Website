import { Instagram, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import TiltedCard from "@/components/ui/TiltedCard";

import img1 from '@/assets/img_landscape.png';
import img2 from '@/assets/rame.png';
import img3 from '@/assets/kkn.png';
import img4 from '@/assets/img_landscape.png';

export default function InstagramFeed() {
    const feed = [
        { id: 1, src: img1, alt: "Aktivitas Kolam 1" },
        { id: 2, src: img2, alt: "Aktivitas KKN 1" },
        { id: 3, src: img3, alt: "Penebaran Benih" },
        { id: 4, src: img4, alt: "Panen Lele" },
    ];

    return (
        <section className="bg-blue-950 py-20 px-6 transition-colors duration-500">
            <div className="container mx-auto">
                <div className="flex flex-col items-center text-center space-y-6 mb-12">
                    <div className="w-16 h-16 bg-linear-to-tr from-yellow-400 via-red-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg animate-bounce">
                        <Instagram className="text-white w-8 h-8" />
                    </div>

                    <div className="space-y-2">
                        <h2 className="text-3xl md:text-4xl font-extrabold text-blue-950 dark:text-white">
                            Ikuti Kami di Instagram
                        </h2>
                        <p className="text-gray-500 dark:text-gray-400 text-lg">
                            Dapatkan update harian seputar perkembangan budidaya <br className="hidden md:block" /> dan kegiatan KKN kami di Desa Ngloning.
                        </p>
                    </div>

                    <Button
                        variant="outline"
                        className="rounded-full border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white transition-all group"
                        onClick={() => window.open('https://instagram.com/unidagontor', '_blank')}
                    >
                        @kkn24_ngloning
                        <ExternalLink className="ml-2 h-4 w-4 group-hover:rotate-12 transition-transform" />
                    </Button>
                </div>


                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
                    {feed.map((post) => (
                        <div key={post.id} className="group relative">
                            <TiltedCard
                                imageSrc={post.src}
                                altText={post.alt}
                                containerHeight="280px"
                                containerWidth="100%"
                                imageHeight="280px"
                                imageWidth="100%"
                                rotateAmplitude={8}
                                scaleOnHover={1.05}
                                showTooltip={false}
                                displayOverlayContent={true}
                                overlayContent={
                                    <div className="flex items-center justify-center w-full h-full bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity rounded-[20px]">
                                        <Instagram className="text-white w-8 h-8" />
                                    </div>
                                }
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}