import { Badge } from "@/components/ui/badge";
import { Database, MapPin, Target, ShieldCheck, Fish } from "lucide-react";
import imgTeam from '@/assets/rame.png';
import imgPond from '@/assets/img_landscape.png';

export default function Summarize() {
    const stats = [
        { icon: <Database className="w-6 h-6" />, label: "Kolam Ikan", value: "24" },
        { icon: <Fish className="w-6 h-6" />, label: "Bibit Ikan", value: "60000+" },
        { icon: <MapPin className="w-6 h-6" />, label: "Lokasi Kolam", value: "Desa Ngloning" },
    ];

    return (
        <section className="transition-colors duration-500">
            <div className="container mx-auto pt-25 px-6 pb-20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    <div className="relative">
                        <div className="rounded-3xl overflow-hidden shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-500">
                            <img src={imgTeam} alt="Tim KKN UNIDA" className="w-full h-auto object-cover" />
                        </div>
                        <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-blue-600 rounded-3xl -z-10 animate-pulse"></div>
                    </div>

                    <div className="space-y-6">
                        <Badge variant="outline" className="text-blue-600 border-blue-600 px-4 py-1 rounded-full uppercase font-bold tracking-widest">
                            Visi & Misi
                        </Badge>
                        <h2 className="text-4xl font-extrabold leading-tight">
                            Membangun Kemandirian Ekonomi Lewat <span className="text-blue-600">Budidaya Lokal</span>
                        </h2>
                        <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed">
                            Program KKN Kelompok 24 Universitas Darussalam Gontor di Desa Ngloning berfokus pada modernisasi teknik budidaya ikan air tawar. Kami percaya bahwa dengan edukasi yang tepat, potensi alam desa bisa menjadi sumber ekonomi yang berkelanjutan bagi seluruh warga.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
                            <div className="flex items-start gap-3">
                                <div className="p-2 bg-blue-100 rounded-lg text-blue-600"><ShieldCheck /></div>
                                <div>
                                    <h4 className="font-bold text-blue-950 dark:text-white">Kualitas Terjamin</h4>
                                    <p className="text-sm text-slate-500">Ikan dipelihara dengan standar kebersihan tinggi.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <div className="p-2 bg-blue-100 rounded-lg text-blue-600"><Target /></div>
                                <div>
                                    <h4 className="font-bold text-blue-950 dark:text-white">Berorientasi Desa</h4>
                                    <p className="text-sm text-slate-500">Fokus pada kesejahteraan masyarakat Ngloning.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8 bg-blue-950 p-12 rounded-[40px] shadow-xl">
                    {stats.map((stat, index) => (
                        <div key={index} className="flex flex-col items-center text-center text-white space-y-2">
                            <div className="p-4 bg-white/10 rounded-full text-blue-400 mb-2">
                                {stat.icon}
                            </div>
                            <h3 className="text-4xl font-black">{stat.value}</h3>
                            <p className="text-blue-200/60 uppercase tracking-widest text-xs font-bold">{stat.label}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}