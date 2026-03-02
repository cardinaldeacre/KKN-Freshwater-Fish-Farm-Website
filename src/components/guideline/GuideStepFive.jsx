import { Droplets, Thermometer, FlaskConical, AlertTriangle, Box } from "lucide-react";

export default function GuideStepFive() {
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
                                <p className="text-blue-400 text-xs font-bold uppercase tracking-[0.2em]">Langkah 05</p>
                                <h2 className="text-2xl md:text-3xl font-bold">Pemeliharaan Media & Kualitas Air</h2>
                            </div>
                        </div>
                        <p className="text-blue-100/70 text-sm md:text-base leading-relaxed mt-4">
                            Prosedur sanitasi rutin dan monitoring volume flok untuk menjaga keseimbangan ekosistem bakteri di dalam kolam.
                        </p>
                    </div>

                    <div className="p-6 md:p-6 sm:p2 space-y-1">
                        <div className="flex gap-6 group">
                            <div className="flex-none w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                                <Droplets size={24} />
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-blue-600">1. Sanitasi Dasar</h4>
                                <p className="text-slate-500 text-sm md:text-base leading-relaxed font-medium">
                                    Setelah satu bulan, buang kotoran seminggu sekali melalui pipa <b>outlet</b> dan tambahkan air baru untuk mengganti volume yang terbuang. [cite: 39, 40]
                                </p>
                            </div>
                        </div>

                        <div className="flex gap-6 group">
                            <div className="flex-none w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                                <FlaskConical size={24} />
                            </div>
                            <div className="space-y-4">
                                <div>
                                    <h4 className="text-xl font-bold text-blue-600">2. Monitoring Volume Flok</h4>
                                    <p className="text-slate-500 text-sm md:text-base leading-relaxed font-medium">
                                        Ukur kadar flok menggunakan gelas ukur. Target ideal adalah <b>100 ml per 1.000 ml</b> air media. [cite: 41, 42]
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="p-6 bg-blue-700 rounded-4xl shadow-xl shadow-blue-950/20">
                            <div className="flex gap-6">
                                <div className="flex-none w-12 h-12 rounded-2xl bg-white flex items-center justify-center text-blue-600 shadow-inner">
                                    <AlertTriangle size={24} />
                                </div>
                                <div className="space-y-4 text-white">
                                    <h4 className="text-xl font-bold">Penyesuaian Media</h4>
                                    <div className="space-y-3">
                                        <div className="bg-blue-900/40 p-3 rounded-xl border border-blue-400/30">
                                            <p className="text-sm font-bold mb-1">Jika Flok ≥ 100 ml:</p>
                                            <p className="text-xs text-blue-100 leading-relaxed italic">
                                                Ikan perlu dipuasakan selama 24 jam, setelah itu volume flok diukur kembali. [cite: 43]
                                            </p>
                                        </div>
                                        <div className="bg-blue-900/40 p-3 rounded-xl border border-blue-400/30">
                                            <p className="text-sm font-bold mb-1">Jika Flok &lt; 20 ml:</p>
                                            <p className="text-xs text-blue-100 leading-relaxed italic">
                                                Tambahkan molase (100 ml) atau gula pasir (50 gr) tiap 150 gr pakan harian. [cite: 44]
                                            </p>
                                        </div>
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