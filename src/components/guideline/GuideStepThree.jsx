import { FlaskConical, Gauge, Beaker, Zap, Box } from "lucide-react";

export default function GuideStepThree() {
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
                                <p className="text-blue-400 text-xs font-bold uppercase tracking-[0.2em]">Langkah 03</p>
                                <h2 className="text-2xl md:text-3xl font-bold">Pembentukan Media Bioflok</h2>
                            </div>
                        </div>
                        <p className="text-blue-100/70 text-sm md:text-base leading-relaxed mt-4">
                            Aplikasi bahan organik secara sistematis untuk menumbuhkan mikroorganisme fungsional (dilakukan setelah persiapan awal).
                        </p>
                    </div>

                    <div className="p-6 md:p-6 sm:p2 space-y-1">
                        <div className="flex gap-6 group">
                            <div className="flex-none w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                                <Gauge size={24} />
                            </div>
                            <div className="space-y-4">
                                <div className="space-y-2">
                                    <h4 className="text-xl font-bold text-blue-600">1. Garam & Pengecekan pH</h4>
                                    <p className="text-slate-500 text-sm md:text-base leading-relaxed font-medium">
                                        Taburkan Garam Krosok dengan dosis <b>1 kg/m³</b>, lalu pastikan pH air berada pada rentang ideal <b>7 - 8</b>.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="flex gap-6 group">
                            <div className="flex-none w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                                <Beaker size={24} />
                            </div>
                            <div className="space-y-4">
                                <div>
                                    <h4 className="text-xl font-bold text-blue-600">2. Kapur & Molase</h4>
                                    <ul className="list-disc list-outside ml-4 text-slate-500 space-y-2 text-sm md:text-base font-medium">
                                        <li><b>Kapur Dolomit</b>: Dosis <b>50 g/m³</b> (diaplikasikan apabila pH air di bawah 8). </li>
                                        <li><b>Molase/Tetes Tebu</b>: Dosis <b>100 ml/m³</b> (atau gula pasir dengan dosis <b>50 g/m³</b>). </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="p-6 bg-blue-700 rounded-4xl shadow-xl shadow-blue-950/20">
                            <div className="flex gap-6">
                                <div className="flex-none w-12 h-12 rounded-2xl bg-white flex items-center justify-center text-blue-600 shadow-inner">
                                    <Zap />
                                </div>
                                <div className="space-y-2">
                                    <h4 className="text-xl font-bold text-white">3. Probiotik Air</h4>
                                    <p className="text-blue-50 text-sm md:text-base leading-relaxed">
                                        Gunakan probiotik yang mengandung bakteri <b>Bacillus sp.</b> dengan dosis tepat <b>20 g/m³</b>.
                                    </p>
                                    <div className="mt-4 p-3 bg-blue-900/30 rounded-xl border border-blue-400/30 text-sm text-blue-100 italic">
                                        <strong>Fungsi Utama:</strong> Menumbuhkan bakteri pengurai yang nantinya akan membentuk flok sebagai sumber protein tambahan bagi lele.
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