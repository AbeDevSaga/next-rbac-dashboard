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
    { href: "#hero", label: { key: "link.hero", default: "Home" } },
    { href: "#features", label: { key: "link.features", default: "Services" } },
    {
      href: "#testimonials",
      label: { key: "link.testimonials", default: "Success Stories" },
    },
    { href: "#about", label: { key: "link.about", default: "About Us" } },
    { href: "#contact", label: { key: "link.contact", default: "Contact Us" } },
  ],
  button: {
    href: "/auth/login",
    label: {key: "button.login", default:"Login"},
  },
};
