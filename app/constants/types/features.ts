import { TFeatureSection } from "../type";

export const featuresData: TFeatureSection = {
  header: {
    title: "Key Features",
    description:
      "Explore the powerful features that make our RBAC dashboard a must-have for modern web applications.",
  },
  features: [
    {
      title: "Role Management",
      description:
        "Easily create, assign, and manage user roles with fine-grained permission controls",
      icon: "🛡️",
      color: "primary",
    },
    {
      title: "Dynamic Routing",
      description:
        "Routes adapt based on user permissions to securely control access to dashboard pages",
      icon: "🚦",
      color: "secondary",
    },
    {
      title: "User Activity Logs",
      description:
        "Track user actions and access history for security audits and compliance",
      icon: "📜",
      color: "tertiary",
    },
    {
      title: "Multi-level Access",
      description:
        "Support for nested roles and hierarchical permissions for complex organizations",
      icon: "🏢",
      color: "primary",
    },
    {
      title: "Responsive Design",
      description:
        "Optimized for all screen sizes with a smooth user experience on mobile and desktop",
      icon: "📱",
      color: "secondary",
    },
    {
      title: "Real-time Updates",
      description:
        "Instant permission changes and dashboard updates without page reloads",
      icon: "⚡",
      color: "tertiary",
    },
  ],
};
