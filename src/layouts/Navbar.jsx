import icon from './../assets/ikan_icon.png'
import ThemeToggle from "@/components/ThemeToggle";
import PillNav from "@/components/ui/PillNav";
import { useLocation } from "react-router-dom";

export default function Navigation() {
    const location = useLocation();

    return (
        <PillNav
            logo={icon}
            title="Budidaya Ikan Air Tawar"
            items={[
                { label: 'Beranda', href: '/' },
                { label: 'Tentang', href: '/tentang' },
                { label: 'Produk', href: '/produk' },
                { label: 'Kontak', href: '/kontak' },
                { label: 'Panduan', href: '/panduan' }
            ]}
            activeHref={location.pathname}
            rightElement={<ThemeToggle />}
            baseColor="var(--color-pond-dark)"
            pillColor="#ffffff"
            pillTextColor="#020617"
            hoveredPillTextColor="#ffffff"
        />
    );
}