import adminProfile from "@/public/profiles/profile 1.jpg";
import managerProfile from "@/public/profiles/profile 1.jpg";
import userProfile from "@/public/profiles/profile 1.jpg";
import { TTestimonal } from "../type";

export const testimonyData: TTestimonal = {
  header: {
    title: "What Our Users Say",
    description:
      "Hear from those who have transformed their user management with our RBAC dashboard.",
  },
  testimonies: [
    {
      quote:
        "The RBAC dashboard’s granular role control saved us hours in user management and boosted our security compliance.",
      name: "Sarah Johnson",
      role: "System Administrator",
      company: "Tech Corp",
      profileImage: adminProfile,
      color: "primary",
      rating: 5,
    },
    {
      quote:
        "Dynamic routing based on permissions means my team only sees what matters, improving focus and reducing errors.",
      name: "Mark Lee",
      role: "Project Manager",
      company: "Innovate Solutions",
      profileImage: managerProfile,
      color: "secondary",
      rating: 4,
    },
    {
      quote:
        "Real-time permission updates let me quickly adapt to new projects without waiting for admin intervention.",
      name: "Jessica Chen",
      role: "Developer",
      company: "NextGen Apps",
      profileImage: userProfile,
      color: "neutral",
      rating: 5,
    },
  ],
};
