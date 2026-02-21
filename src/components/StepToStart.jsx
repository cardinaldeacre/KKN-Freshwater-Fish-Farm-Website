import { Droplets, ShieldCheck, Waves } from "lucide-react";

export default function StepsToStart() {
    const steps = [
        {
            icon: <Droplets className="w-8 h-8 text-white" />,
            title: "Kontrol Kualitas Air",
            description: "Memastikan kadar pH dan kebersihan air tetap terjaga adalah kunci utama agar ikan tumbuh sehat dan bebas stres."
        },
        {
            icon: <ShieldCheck className="w-8 h-8 text-white" />,
            title: "Antisipasi Penyakit",
            description: "Melakukan pencegahan dini dengan pemberian suplemen dan pemantauan kondisi fisik ikan secara rutin setiap hari."
        },
        {
            icon: <Waves className="w-8 h-8 text-white" />,
            title: "Sirkulasi Oksigen",
            description: "Menjaga aliran air dan ketersediaan oksigen terlarut yang cukup sangat krusial untuk padat tebar ikan yang optimal."
        }
    ];

    return (
        <section className="bg-white py-20 px-6">
            <div className="container mx-auto text-center max-w-4xl">
                <div className="space-y-4 mb-16">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-blue-950 tracking-tight">
                        Langkah Memulai Budidaya Ikan Anda
                    </h2>
                    <p className="text-gray-500 text-lg max-w-2xl mx-auto leading-relaxed">
                        Solusi tepat untuk pengelolaan kolam ikan yang cerdas dan modern di Desa Ngloning.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {steps.map((step, index) => (
                        <div key={index} className="flex flex-col items-center space-y-6 group">
                            <div className="w-20 h-20 bg-blue-950 rounded-full flex items-center justify-center shadow-lg transition-transform duration-300 group-hover:scale-110">
                                {step.icon}
                            </div>

                            <div className="space-y-3">
                                <h3 className="text-xl font-bold text-blue-950">
                                    {step.title}
                                </h3>
                                <p className="text-gray-500 text-sm leading-relaxed">
                                    {step.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}