import { Mail, Phone, MapPin, Instagram, Facebook, Youtube, Send } from "lucide-react";
import { Link } from "react-router-dom";
import icon from './../assets/ikan_icon.png';
import img100 from '@/assets/100.png'
import imgkkn from '@/assets/kkn.png'
import imglpm from '@/assets/lpm.png'
import imgunida from '@/assets/unida.png'

export default function Footer() {
    return (
        <footer className="bg-slate-900 text-white pt-16 pb-8 px-6 transition-colors duration-500">
            <div className="container mx-auto">

                <div className="flex flex-col items-center text-center space-y-6 mb-16 border-b border-blue-900 pb-12">
                    <h2 className="text-2xl md:text-3xl font-bold max-w-2xl leading-tight">
                        Tetap Terhubung Untuk Tips & <br className="hidden md:block" /> Info Budidaya Ikan Terbaru
                    </h2>
                    <div className="flex w-full max-w-md items-center space-x-2 bg-blue-900/50 p-1.5 rounded-full border border-blue-800">
                        <input
                            type="email"
                            placeholder="Alamat Email Anda"
                            className="flex-1 bg-transparent border-none focus:ring-0 px-4 text-sm placeholder:text-blue-300"
                        />
                        <button className="bg-blue-600 hover:bg-blue-500 p-2.5 rounded-full transition-all shadow-lg">
                            <Send className="w-5 h-5" />
                        </button>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left items-start mb-12">

                    <div className="flex flex-col h-full space-y-4">
                        <div className="space-y-4">
                            <div className="flex items-start justify-center md:justify-start gap-3">
                                <MapPin className="w-5 h-5 text-blue-400 mt-1" />
                                <p className="text-blue-100/70 text-sm leading-relaxed">
                                    Desa Ngloning, Kec. Slahung, <br />
                                    Kabupaten Ponorogo, Jawa Timur
                                </p>
                            </div>
                            <div className="flex items-center justify-center md:justify-start gap-3">
                                <Phone className="w-5 h-5 text-blue-400" />
                                <p className="text-blue-100/70 text-sm">+62 812 3456 7890</p>
                            </div>
                            <div className="flex items-center justify-center md:justify-start gap-3">
                                <Mail className="w-5 h-5 text-blue-400" />
                                <p className="text-blue-100/70 text-sm">kkn24.ngloning@gmail.com</p>
                            </div>
                        </div>

                        <div className="mt-auto pt-6">
                            <div className="flex items-center justify-center md:justify-start gap-4">
                                <img src={img100} alt="Logo 100%" className="h-8 w-8 object-contain brightness-0 invert opacity-70 hover:opacity-100 transition-opacity" />
                                <img src={imgkkn} alt="Logo KKN" className="h-8 w-8 object-contain brightness-0 invert opacity-70 hover:opacity-100 transition-opacity" />
                                <img src={imglpm} alt="Logo LPM" className="h-8 w-8 object-contain brightness-0 invert opacity-70 hover:opacity-100 transition-opacity" />
                                <img src={imgunida} alt="Logo UNIDA Gontor" className="h-8 w-8 object-contain brightness-0 invert opacity-70 hover:opacity-100 transition-opacity" />
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col items-center space-y-4">
                        <img src={icon} alt="Logo" className="h-12 w-12 rounded-full brightness-125 shadow-lg shadow-blue-500/20" />
                        <h3 className="text-xl font-bold items-center text-center  tracking-widest uppercase">Budidaya Ikan Air Tawar<span className="text-blue-400"> Desa Ngloning</span></h3>
                        <p className="text-blue-100/60 text-sm text-center max-w-xs leading-relaxed">
                            Membangun kemandirian ekonomi desa melalui edukasi dan inovasi budidaya ikan air tawar yang berkelanjutan.
                        </p>
                        <div className="flex gap-4 pt-2">
                            <a href="#" className="p-2 bg-blue-900 rounded-full hover:bg-blue-600 transition-colors"><Instagram className="w-4 h-4" /></a>
                            <a href="#" className="p-2 bg-blue-900 rounded-full hover:bg-blue-600 transition-colors"><Facebook className="w-4 h-4" /></a>
                            <a href="#" className="p-2 bg-blue-900 rounded-full hover:bg-blue-600 transition-colors"><Youtube className="w-4 h-4" /></a>
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