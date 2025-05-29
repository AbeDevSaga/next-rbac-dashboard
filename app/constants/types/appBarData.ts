import { TAppBar } from "../type";
import logo from "@/public/images/abe.png";

export const appBarData: TAppBar = {
  logo: {
    src: logo,
    alt: "WalifEthiopia Logo",
    width: 140,
    height: 40,
    className: "h-10 w-auto",
  },
  links: [
    { href: "#hero", label: "Home" },
    { href: "#features", label: "Services" },
    { href: "#testimonials", label: "Success Stories" },
    { href: "#about", label: "About Us" },
    { href: "#contact", label: "Contact" },
  ],
  button: {
    href: "/auth/login",
    label: "Login",
  },
};
