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
            <div className="flex max-w-screen items-center h-24 bg-blue-950 ">
                <h2 className="text-2xl mx-auto justify-center font-bold text-white text-center">Aktivitas Kami</h2>
            </div>
            <div className="grid-cols-3 mx-auto items-center px-2 md:px2 sm:px-2 py-10 max-w-full grid gap-10">
                {activities.map((activity, index) => (
                    <Card
                        className="max-w-sm mx-auto"
                        imgAlt="Meaningful alt text for an image that is not purely decorative"
                        imgSrc={images[index]}
                    >
                        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                            {activities[index].title}
                        </h5>
                        <p className="font-normal text-gray-700 dark:text-gray-400">
                            {activities[index].description}
                        </p>
                    </Card>
                ))}
            </div>
        </section >
    )
}