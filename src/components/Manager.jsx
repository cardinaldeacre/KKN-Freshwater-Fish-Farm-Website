import { Instagram, Mail, Linkedin } from "lucide-react";
import imghariyanto from '@/assets/hariyanto.png';
import imgsomat from '@/assets/somat.png';
import imgbu from '@/assets/bu.png';
import { FaWhatsapp } from "react-icons/fa";

export default function Manager() {
    const managers = [
        {
            name: "Nama Pengelola 1",
            role: "Ketua Pengelola Kolam",
            image: imghariyanto,
            bio: "Bertanggung jawab atas manajemen operasional dan strategi pengembangan kolam."
        },
        {
            name: "Nama Pengelola 2",
            role: "Ahli Nutrisi & Pakan",
            image: imgsomat,
            bio: "Fokus pada optimalisasi pakan dan kesehatan ikan untuk hasil panen berkualitas."
        },
        {
            name: "Nama Pengelola 3",
            role: "Administrasi & Pemasaran",
            image: imgbu,
            bio: "Mengelola sistem administrasi transaksi dan strategi pemasaran untuk memperluas jaringan kemitraan dagang."
        }
    ];

    return (
        <section className="py-24">
            <div className="container items-center max-w-full bg-blue-950 p-10 shadow-inner mb-16">
                <h2 className="text-2xl md:text-3xl mx-auto font-bold text-white text-center">
                    Tentang Pengelola
                </h2>
                <h2 className="text-sm text-center font-bold text-blue-600 uppercase tracking-[0.3em] mb-3">
                    Struktur Organisasi
                </h2>
                <h3 className="text-3xl md:text-4xl text-center font-extrabold text-slate-900 dark:text-white mb-4">
                    Pengelola <span className="text-blue-600">Profesional</span> Kami
                </h3>
                <p className="text-slate-500 dark:text-slate-400 text-center">
                    Dikelola oleh tenaga terampil yang berdedikasi untuk memajukan potensi ekonomi Desa Ngloning melalui budidaya modern.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:mx-32 px-6 lg:grid-cols-3 gap-10">
                {managers.map((manager, index) => (
                    <div
                        key={index}
                        className="group relative bg-white dark:bg-slate-800 rounded-3xl md:rounded-4xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
                    >
                        <div className="aspect-4/5 overflow-hidden">
                            <img
                                src={manager.image}
                                alt={manager.name}
                                className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
                            />
                        </div>

                        <div className="absolute inset-0 flex flex-col justify-end p-4 md:p-6 bg-linear-to-t from-blue-950 via-blue-950/60 to-transparent opacity-90 group-hover:opacity-100 transition-opacity">
                            <div className="translate-y-2 md:translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                <p className="text-blue-400 font-bold text-[10px] md:text-xs uppercase tracking-widest mb-1">
                                    {manager.role}
                                </p>
                                <h4 className="text-lg md:text-xl font-bold text-white mb-1 md:mb-2">
                                    {manager.name}
                                </h4>
                                <p className="text-slate-300 text-xs md:text-sm line-clamp-2 md:line-clamp-none mb-3 md:mb-4">
                                    {manager.bio}
                                </p>
                                {/* <div className="flex gap-3 md:gap-4 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                                    <a href="#" className="text-white hover:text-blue-400 transition-colors">
                                        <FaWhatsapp size={16} className="md:w-4.5" />
                                    </a>
                                </div> */}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}