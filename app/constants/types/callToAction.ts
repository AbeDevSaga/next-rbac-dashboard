import { TCallToAction } from "../type";
import bg from "@/public/images/bg.jpg";

export const defaultCallToAction: TCallToAction = {
  title: "Ready to Take Control of Your Platform?",
  description: "Empower your team with a scalable RBAC dashboard built with Next.js, Tailwind, Redux, and MongoDB — crafted by AbeDevSaga.",
  backgroundColor: "primary",
  backgroundImage: bg,
  buttons: [
    {
      text: "Check it on GitHub",
      variant: "solid",
      href: "https://github.com/AbeDevSaga/next-rbac-dashboard"
    },
    {
      text: "Contact Me",
      variant: "outline",
      href: "mailto:2000amandanm@gmail.com"
    }
  ],
  textColor: {
    primary: "text-white",
    secondary: "text-gray-100",
    button: "text-white"
  }
};
