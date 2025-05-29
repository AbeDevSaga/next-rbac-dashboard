import { THero } from "../type";
import bg from "@/public/images/bg.jpg";

export const defaultHeroData: THero = {
  title: {
    key: "hero.title",
    default: "Secure and Dynamic RBAC Dashboard for Modern Web Apps",
  },
  description: {
    key: "hero.description",
    default:
      "Manage users, roles, and permissions seamlessly with our responsive, Next.js-powered RBAC dashboard — designed for flexibility, speed, and scalability.",
  },
  backgroundImage: bg,
  overlayColor: "bg-black/30",
  textColor: {
    primary: "text-white",
    secondary: "text-gray-200",
  },
};
