import { Mail, Phone, MapPin, Instagram, Facebook, Youtube, Send, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import icon from './../assets/ikan_icon.png';
import img100 from '@/assets/100.png'
import imgkkn from '@/assets/kkn.png'
import imglpm from '@/assets/lpm.png'
import imgunida from '@/assets/unida.png'
import { Button } from "@/components/ui/button";

export default function Footer() {
    return (
        <footer className="bg-blue-950 text-white pb-8 px-6 transition-colors duration-500">
            <div className="container mx-auto">

                <div className="flex flex-col items-center text-center space-y-6 mb-12 border-b border-blue-900 pb-12">
                    <div className="container mx-auto">
                        <div className="flex flex-col items-center text-center space-y-3">
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
                                onClick={() => window.open('https://www.instagram.com/budidayaikan_desangloning', '_blank')}
                            >
                                @budidayaikan_desangloning
                                <ExternalLink className="ml-2 h-4 w-4 group-hover:rotate-12 transition-transform" />
                            </Button>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left items-start mb-12">

                    <div className="flex flex-col h-full space-y-4">
                        <div className="space-y-4">
                            <div className="flex items-start justify-center md:justify-start gap-3">
                                <MapPin className="w-5 h-5 text-blue-400 mt-1" />
                                <a href="https://maps.app.goo.gl/js6JEHXKfMQ8Nqcr7" target="_blank" rel="noopener noreferrer" className="text-blue-100/70 text-sm leading-relaxed hover:text-blue-300 transition-colors">
                                    <p className="text-blue-100/70 text-sm leading-relaxed">
                                        Dsn. Gragakan, Ds.Ngloning, Kec. Slahung,<br />
                                        Kabupaten Ponorogo, Jawa Timur
                                    </p>
                                </a>
                            </div>
                            <div className="flex items-center justify-center md:justify-start gap-3">
                                <Phone className="w-5 h-5 text-blue-400" />
                                <a href="https://wa.me/+6281330774174?text=Halo%20Pengelola%20Budiya%20Ikan%20Air%20Tawar%20Desa%20Ngloning%2C%20saya%20tertarik%20untuk%20memesan%20ikan%20segar%20untuk%20keperluan%20dagang%2Frestoran%20saya.%20Bisa%20minta%20info%20harga%20terbarunya%3F" target="_blank" rel="noopener noreferrer" className="text-blue-100/70 text-sm hover:text-blue-300 transition-colors">
                                    <p className="text-blue-100/70 text-sm">+62 813-3077-4174</p>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col items-center space-y-4">
                        <img src={icon} alt="Logo" className="h-12 w-12 rounded-full brightness-125 shadow-lg shadow-blue-500/20" />
                        <h3 className="text-xl font-bold items-center text-center  tracking-widest uppercase">Budidaya Ikan Air Tawar<span className="text-blue-400"> Desa Ngloning</span></h3>
                        <p className="text-blue-100/60 text-sm text-center max-w-xs leading-relaxed">
                            Membangun kemandirian ekonomi desa melalui edukasi dan inovasi budidaya ikan air tawar yang berkelanjutan.
                        </p>
                        <div className="flex items-center justify-center md:justify-start gap-4">
                            <img src={img100} alt="Logo 100%" className="h-8 w-8 object-contain brightness-0 invert opacity-70 hover:opacity-100 transition-opacity" />
                            <img src={imgkkn} alt="Logo KKN" className="h-8 w-8 object-contain brightness-0 invert opacity-70 hover:opacity-100 transition-opacity" />
                            <img src={imglpm} alt="Logo LPM" className="h-8 w-8 object-contain brightness-0 invert opacity-70 hover:opacity-100 transition-opacity" />
                            <img src={imgunida} alt="Logo UNIDA Gontor" className="h-8 w-8 object-contain brightness-0 invert opacity-70 hover:opacity-100 transition-opacity" />
                        </div>
                    </div>

                    <div className="flex flex-col items-center md:items-end space-y-3">
                        <h4 className="text-blue-400 font-bold uppercase text-xs tracking-[0.2em] mb-2">Navigasi</h4>
                        <Link to="/" className="text-blue-100/70 hover:text-white transition-colors text-sm">Beranda</Link>
                        <Link to="/tentang" className="text-blue-100/70 hover:text-white transition-colors text-sm">Tentang</Link>
                        <Link to="/produk" className="text-blue-100/70 hover:text-white transition-colors text-sm">Produk</Link>
                        <Link to="/kontak" className="text-blue-100/70 hover:text-white transition-colors text-sm">Hubungi Kami</Link>
                    </div>
                </div>

                <div className="border-t border-blue-900 pt-8 text-center">
                    <p className="text-blue-100/40 text-[10px] md:text-xs uppercase tracking-[0.3em]">
                        &copy; 2026 KKN Kelompok 24 Ngloning | UNIDA Gontor | Design by Ionic_Mass
                    </p>
                </div>
            </div>
        </footer>
    );
}