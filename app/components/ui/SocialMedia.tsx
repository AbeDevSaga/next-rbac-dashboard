import { TSocialMedia } from "@/app/constants/type";
import React from "react";
import {
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaInstagram,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaTelegram,
  FaWhatsapp,
  FaGithub,
} from "react-icons/fa";
import { FaSquareUpwork } from "react-icons/fa6";
type IconMapping = {
  [key: string]: React.ComponentType<{ className?: string }>;
};
const iconMapping: IconMapping = {
  facebook: FaFacebook,
  telegram: FaTelegram,
  whatsapp: FaWhatsapp,
  twitter: FaTwitter,
  linkedin: FaLinkedin,
  github: FaGithub,
  upwork: FaSquareUpwork,
  instagram: FaInstagram,
  phone: FaPhone,
  envelope: FaEnvelope,
  mapMarkerAlt: FaMapMarkerAlt,
};
interface socialMediaProps {
  index: number;
  social: TSocialMedia;
}

const SocialMedia = ({ index, social }: socialMediaProps) => {
  const IconComponent = social.icon ? iconMapping[social.icon] : null;
  return (
    <a
      key={index}
      href={social.href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-2xl hover:text-blue-400 transition-colors"
      aria-label={social.platform}
    >
      {IconComponent && <IconComponent className="w-4 h-4" />}
    </a>
  );
};

export default SocialMedia;
