import { TFooterProps } from "../type";

export const defaultFooterData: TFooterProps = {
  header: {
    title: "RBAC Dashboard",
    description:
      "Crafted by Amanuel Daniel (AbeDevSaga), a full-stack dev from Ethiopia. Open for jobs and collabs, let’s connect!",
  },
  sections: [
    {
      title: "Quick Links",
      links: [
        { title: "Home", href: "#hero" },
        { title: "Features", href: "#features" },
        { title: "Testimonials", href: "#testimonials" },
        { title: "Contact", href: "#contact" },
      ],
    },
    {
      title: "Connect With Me",
      links: [
        { title: "GitHub", href: "https://github.com/AbeDevSaga" },
        {
          title: "Portfolio",
          href: "https://portfolio-abedevsagas-projects.vercel.app/",
        },
        {
          title: "LinkedIn",
          href: "https://linkedin.com/in/amanuel-daniel-4573b1309/",
        },
        { title: "Email Me", href: "mailto:2000amandanm@gmail.com" },
      ],
    },
  ],
  socialMedia: [
    {
      platform: "Telegram",
      icon: "telegram",
      href: "https://t.me/AbeDani/",
    },
    {
      platform: "Upwork",
      icon: "upwork",
      href: "https://www.upwork.com/freelancers/~014e7dc7fe05aa7131/",
    },
    {
      platform: "GitHub",
      icon: "github",
      href: "https://github.com/AbeDevSaga/",
    },
    {
      platform: "LinkedIn",
      icon: "linkedin",
      href: "https://linkedin.com/in/amanuel-daniel-4573b1309/",
    },
  ],
  contactInfo: {
    email: "2000amandanm@gmail.com",
    phone: "+251919755719",
    address: "Addis Ababa, Ethiopia",
  },
  copyrightText:
    "© 2025 Amanuel Daniel (AbeDevSaga). Built for the dev community.",
};
