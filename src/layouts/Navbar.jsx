import icon from './../assets/ikan_icon.png'
import ThemeToggle from "@/components/ThemeToggle";
import PillNav from "@/components/ui/PillNav";
import { useLocation } from "react-router-dom";

export default function Navigation() {
    const location = useLocation();

    return (
        <PillNav
            logo={icon}
            title="Budidaya Ikan Air Tawar" // Memasukkan teks judul
            items={[
                { label: 'Beranda', href: '/' },
                { label: 'Tentang', href: '/tentang' },
                { label: 'Produk', href: '/produk' },
                { label: 'Kontak', href: '/kontak' }
            ]}
            activeHref={location.pathname}
            rightElement={<ThemeToggle />} // Memasukkan ThemeToggle
            // Warna disesuaikan dengan tema biru kamu
            baseColor="var(--color-pond-dark)"
            pillColor="#ffffff"
            pillTextColor="#020617"
            hoveredPillTextColor="#ffffff"
        />
    );
}