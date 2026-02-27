import { CheckCircle2, Thermometer, Hash, Scaling, Box } from "lucide-react";

export default function GuideStepTwo() {
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
                                <p className="text-blue-400 text-xs font-bold uppercase tracking-[0.2em]">Langkah 02</p>
                                <h2 className="text-2xl md:text-3xl font-bold">Manajemen Benih dan Penebaran</h2>
                            </div>
                        </div>
                        <p className="text-blue-100/70 text-sm md:text-base leading-relaxed mt-4">
                            Prosedur penanganan benih yang tepat untuk meminimalkan tingkat kematian dan memastikan pertumbuhan awal yang sehat.
                        </p>
                    </div>

                    <div className="p-8 md:p-12 space-y-10">
                        <div className="flex gap-6 group">
                            <div className="flex-none w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                                <CheckCircle2 />
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-blue-600">1. Seleksi Benih</h4>
                                <p className="text-slate-500 text-sm md:text-base leading-relaxed font-medium">
                                    Pilih benih dalam kondisi sehat dengan ciri: gerakan lincah, warna cerah, serta tidak terlihat adanya luka atau parasit/jamur yang menempel.
                                </p>
                            </div>
                        </div>

                        <div className="flex gap-6 group">
                            <div className="flex-none w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                                <Scaling size={24} />
                            </div>
                            <div className="space-y-4">
                                <div>
                                    <h4 className="text-xl font-bold text-blue-600">2. Karantina & Kondisi Air</h4>
                                    <p className="text-slate-500 text-sm md:text-base leading-relaxed font-medium">
                                        Lakukan proses aerasi pada air bak dan tambahkan garam krosok dengan dosis <b>1 kg/m³</b> air.
                                    </p>
                                </div>
                                <div className="flex items-center gap-2 text-blue-700 font-bold bg-blue-50 w-fit px-3 py-1 rounded-full border border-blue-100">
                                    <Hash size={18} /> Padat Tebar: 250 - 500 ekor/m³
                                </div>
                            </div>
                        </div>

                        <div className="p-6 bg-blue-700 rounded-4xl shadow-xl shadow-blue-950/20">
                            <div className="flex gap-6">
                                <div className="flex-none w-12 h-12 rounded-2xl bg-white flex items-center justify-center text-blue-600 shadow-inner">
                                    <Thermometer />
                                </div>
                                <div className="space-y-2">
                                    <h4 className="text-xl font-bold text-white">3. Proses Aklimatisasi</h4>
                                    <p className="text-blue-50 text-sm md:text-base leading-relaxed">
                                        Apungkan kantong benih di dalam air kolam selama <b>±10 menit</b> guna menyesuaikan suhu air bak dan mencegah stres termal sebelum penebaran.
                                    </p>
                                    <div className="mt-4 p-3 bg-blue-900/30 rounded-xl border border-blue-400/30 text-sm text-blue-100 italic">
                                        <strong>Catatan Pakan:</strong> Berikan pakan pertama kali pada <b>hari ke-2</b> setelah penebaran.
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