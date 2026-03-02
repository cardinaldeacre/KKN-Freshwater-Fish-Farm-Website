import { Utensils, ClipboardList, ThermometerSun, Zap, Box } from "lucide-react";

export default function GuideStepFour() {
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
                                <p className="text-blue-400 text-xs font-bold uppercase tracking-[0.2em]">Langkah 04</p>
                                <h2 className="text-2xl md:text-3xl font-bold">Manajemen Pemberian Pakan</h2>
                            </div>
                        </div>
                        <p className="text-blue-100/70 text-sm md:text-base leading-relaxed mt-4">
                            Pengelolaan nutrisi rutin dan suplementasi untuk mengoptimalkan pertumbuhan biomassa ikan secara akurat.
                        </p>
                    </div>

                    <div className="p-6 md:p-6 sm:p2 space-y-1">
                        <div className="flex gap-6 group">
                            <div className="flex-none w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                                <Utensils size={24} />
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-blue-600">1. Pengelolaan Rutin</h4>
                                <p className="text-slate-500 text-sm md:text-base leading-relaxed font-medium">
                                    Lakukan pemberian pakan pada pagi dan sore hari secara konsisten dengan dosis berdasarkan <b>Feeding Ratio (FR)</b> mulai hari ke-8 hingga panen.
                                </p>
                            </div>
                        </div>

                        <div className="flex gap-6 group">
                            <div className="flex-none w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                                <ClipboardList size={24} />
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-blue-600">2. Monitoring Pertumbuhan</h4>
                                <p className="text-slate-500 text-sm md:text-base leading-relaxed font-medium">
                                    Lakukan <b>sampling bobot ikan</b> seminggu sekali untuk memastikan perhitungan dosis pakan harian tetap akurat[cite: 35].
                                </p>
                            </div>
                        </div>

                        <div className="p-6 bg-blue-700 rounded-4xl shadow-xl shadow-blue-950/20">
                            <div className="flex gap-6">
                                <div className="flex-none w-12 h-12 rounded-2xl bg-white flex items-center justify-center text-blue-600 shadow-inner">
                                    <Zap />
                                </div>
                                <div className="space-y-2">
                                    <h4 className="text-xl font-bold text-white">3. Suplementasi Probiotik</h4>
                                    <p className="text-blue-50 text-sm md:text-base leading-relaxed">
                                        Seminggu sekali, campurkan probiotik mengandung <b>Lactobacillus sp.</b> (dosis 5 gr/100 ml air) ke dalam 1 kg pakan[cite: 36, 37].
                                    </p>
                                    <div className="mt-4 p-3 bg-blue-900/30 rounded-xl border border-blue-400/30 text-sm text-blue-100 italic">
                                        <strong>Tips Nutrisi:</strong> Suplementasi ini membantu memperkuat sistem pencernaan ikan agar penyerapan pakan lebih maksimal.
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