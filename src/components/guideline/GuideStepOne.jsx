import { Droplets, Sun, Wind, Box, Waves } from "lucide-react";

export default function GuideStepOne() {
    return (
        <section className="py-12 ">
            <div className="container mx-auto px-6">
                <div className="max-w-4xl mx-auto  rounded-[2.5rem] overflow-hidden shadow-xl border border-blue-100">
                    <div className="bg-blue-950 p-8 text-white">
                        <div className="flex items-center gap-4 mb-2">
                            <div className="p-3 bg-blue-700 rounded-2xl shadow-lg shadow-blue-900/20">
                                <Box className="w-8 h-8" />
                            </div>
                            <div>
                                <p className="text-blue-400 text-xs font-bold uppercase tracking-[0.2em]">Langkah 01</p>
                                <h2 className="text-2xl md:text-3xl font-bold">Persiapan Wadah dan Air</h2>
                            </div>
                        </div>
                        <p className="text-blue-100/70 text-sm md:text-base leading-relaxed mt-4">
                            Langkah awal untuk memastikan lingkungan budidaya yang steril dan kondusif bagi ekosistem bioflok.
                        </p>
                    </div>

                    <div className="p-8 md:p-12 space-y-10">
                        <div className="flex gap-6 group">
                            <div className="flex-none w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                                <Droplets />
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-blue-600">1. Sterilisasi Kolam Baru</h4>
                                <ul className="list-disc list-outside ml-4 text-slate-500 space-y-2 text-sm md:text-base font-medium">
                                    <li>Rendam kolam dengan air selama minimal <b>3 hari</b> </li>
                                    <li>Buang air rendaman dan bersihkan permukaan kolam secara menyeluruh. </li>
                                    <li className="flex items-center gap-2 text-orange-600 font-bold bg-orange-50 w-fit px-3 py-1 rounded-full border border-orange-100">
                                        <Sun size={18} /> Jemur di bawah sinar matahari selama <b>12 jam</b>.
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="flex gap-6 group">
                            <div className="flex-none w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                                <Waves size={24} />
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-blue-600">2. Pengisian Air</h4>
                                <p className="text-slate-500 text-sm md:text-base leading-relaxed font-medium">
                                    Isi bak dengan air sumber hingga mencapai ketinggian <b>40 cm</b>.
                                    (Estimasi volume air: <b>5 m³</b>).
                                </p>
                            </div>
                        </div>

                        <div className="p-6 bg-blue-700 rounded-4xl shadow-xl shadow-blue-950/20">
                            <div className="flex gap-6">
                                <div className="flex-none w-12 h-12 rounded-2xl bg-white flex items-center justify-center text-blue-600 shadow-inner">
                                    <Wind />
                                </div>
                                <div className="space-y-2">
                                    <h4 className="text-xl font-bold text-white">3. Aerasi (Terus-menerus)</h4>
                                    <p className="text-blue-50 text-sm md:text-base leading-relaxed">
                                        Pastikan mesin <b>blower</b> dan sistem aerasi beroperasi terus-menerus.
                                    </p>
                                    <div className="mt-4 p-3 bg-blue-900/30 rounded-xl border border-blue-400/30 text-sm text-blue-100 italic">
                                        <strong>Penting:</strong> Sangat disarankan menyediakan generator set (genset) sebagai cadangan apabila terjadi pemadaman listrik.
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