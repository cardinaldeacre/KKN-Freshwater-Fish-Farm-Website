import { ShoppingBasket, Timer, Scale, RotateCcw, Box } from "lucide-react";

export default function GuideStepSix() {
    return (
        <section className="py-12">
            <div className="container mx-auto px-6">
                <div className="max-w-4xl mx-auto rounded-[2.5rem] overflow-hidden shadow-xl border border-blue-100">
                    <div className="bg-blue-950 p-8 text-white">
                        <div className="flex items-center gap-4 mb-2">
                            <div className="p-3 bg-blue-700 rounded-2xl shadow-lg shadow-blue-900/20">
                                <Box className="w-8 h-8" />
                            </div>
                            <div>
                                <p className="text-blue-400 text-xs font-bold uppercase tracking-[0.2em]">Langkah 06</p>
                                <h2 className="text-2xl md:text-3xl font-bold">Prosedur Pemanenan</h2>
                            </div>
                        </div>
                        <p className="text-blue-100/70 text-sm md:text-base leading-relaxed mt-4">
                            Tahap akhir budidaya yang meliputi teknis penangkapan, penyortiran, dan persiapan siklus pemeliharaan berikutnya.
                        </p>
                    </div>

                    <div className="p-8 md:p-12 space-y-10">
                        <div className="flex gap-6 group">
                            <div className="flex-none w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                                <Timer size={24} />
                            </div>
                            <div className="space-y-4">
                                <h4 className="text-xl font-bold text-blue-600">1. Waktu & Teknis Penangkapan</h4>
                                <ul className="list-disc list-outside ml-4 text-slate-500 space-y-2 text-sm md:text-base font-medium">
                                    <li>Lakukan panen (total/parsial) pada <b>pagi atau malam hari</b> untuk menjaga kondisi ikan. </li>
                                    <li>Surutkan air hingga kedalaman <b>10 - 20 cm</b> sebelum penangkapan. </li>
                                    <li>Serok ikan secara hati-hati menggunakan hapa penampungan untuk menghindari luka. </li>
                                </ul>
                            </div>
                        </div>

                        <div className="flex gap-6 group">
                            <div className="flex-none w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                                <Scale size={24} />
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-blue-600">2. Penyortiran (Grading)</h4>
                                <p className="text-slate-500 text-sm md:text-base leading-relaxed font-medium">
                                    Gunakan alat <b>grading</b> untuk memisahkan ukuran sesuai permintaan pasar.  Ikan yang belum memenuhi kriteria dikembalikan ke kolam dengan penambahan air kembali.
                                </p>
                            </div>
                        </div>

                        <div className="p-6 bg-blue-700 rounded-4xl shadow-xl shadow-blue-950/20">
                            <div className="flex gap-6">
                                <div className="flex-none w-12 h-12 rounded-2xl bg-white flex items-center justify-center text-blue-600 shadow-inner">
                                    <RotateCcw size={24} />
                                </div>
                                <div className="space-y-2">
                                    <h4 className="text-xl font-bold text-white">3. Sterilisasi Pasca-Panen</h4>
                                    <p className="text-blue-50 text-sm md:text-base leading-relaxed">
                                        Jika panen total, kuras bak hingga bersih dan <b>keringkan minimal selama 2 hari</b> sebelum memulai siklus selanjutnya.
                                    </p>
                                    <div className="mt-4 p-3 bg-blue-900/30 rounded-xl border border-blue-400/30 text-sm text-blue-100 italic">
                                        <strong>Penting:</strong> Pembersihan total memastikan kuman atau sisa amonia dari siklus sebelumnya tidak mengganggu bibit baru.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}