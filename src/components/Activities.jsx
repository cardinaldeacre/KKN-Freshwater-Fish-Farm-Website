import { Card } from "flowbite-react";
import img1 from '@/assets/img_landscape.png'
import img2 from '@/assets/rame.png'

export default function Activities() {
    const images = [img1, img2, img1, img2, img1];
    const activities = [
        {
            title: "Budidaya Ikan Lele",
            description: "Pelajari cara budidaya ikan lele yang efektif dan efisien untuk hasil panen yang optimal."
        },
        {
            title: "Budidaya Ikan Nila",
            description: "Temukan tips dan trik dalam budidaya ikan nila untuk meningkatkan produktivitas dan kualitas hasil panen."
        },
        {
            title: "Budidaya Ikan Mas",
            description: "Dapatkan informasi lengkap tentang budidaya ikan mas, mulai dari pemilihan bibit hingga teknik pemeliharaan yang tepat."
        }
    ];

    return (
        <section>
            <div className="flex items-center h-24 bg-blue-950 shadow-inner">
                <h2 className="text-2xl md:text-3xl mx-auto font-bold text-white text-center">
                    Aktivitas Kami
                </h2>
            </div>

            <div className="container mx-auto px-4 py-12">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
                    {activities.map((activity, index) => (
                        <Card
                            key={index}
                            className="max-w-full w-full sm:max-w-sm border-none shadow-lg hover:shadow-xl transition-shadow duration-300 dark:bg-gray-800"
                            imgAlt={activity.title}
                            imgSrc={images[index % images.length]}
                        >
                            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-blue-100">
                                {activity.title}
                            </h5>
                            <p className="font-normal text-gray-600 dark:text-gray-400 leading-relaxed">
                                {activity.description}
                            </p>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    )
}