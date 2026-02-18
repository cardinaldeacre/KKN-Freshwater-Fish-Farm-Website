
import { Navbar, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle } from "flowbite-react";
import { Link } from "react-router-dom";
import icon from './../assets/ikan_icon.png'

export default function Navigation() {
    return (
        <Navbar fluid rounded>
            <NavbarBrand as={Link} href="https://flowbite-react.com">
                <img src={icon} className="mr-3 h-6 sm:h-9 rounded-3xl" alt="Flowbite React Logo" />
                <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Budidaya Ikan Air Tawar</span>
            </NavbarBrand>
            <NavbarToggle />
            <NavbarCollapse>
                <NavbarLink as={Link} to="/" active>
                    Beranda
                </NavbarLink>
                <NavbarLink as={Link} to="/tentang">
                    Tentang
                </NavbarLink>
                <NavbarLink as={Link} to="/produk">
                    Produk
                </NavbarLink>
                <NavbarLink as={Link} to="/kontak">
                    Kontak
                </NavbarLink>
            </NavbarCollapse>
        </Navbar>
    );
}
