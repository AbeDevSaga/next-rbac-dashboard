import React from "react";
import Link from "next/link";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { TFooterProps, TFooterSection } from "@/app/constants/type";
import SocialMedia from "../ui/SocialMedia";
import { useTranslation } from "next-i18next";

interface footerProps {
  footer: TFooterProps;
}

const Footer: React.FC<footerProps> = ({ footer }) => {
  const { t } = useTranslation("common");

  const getTranslatedContent = React.useCallback(
    (content: string | { key: string; default: string }) => {
      if (typeof content === "string") return content;
      return t(content.key, { defaultValue: content.default });
    },
    [t]
  );

  const handleSmoothScroll = (e: React.MouseEvent, href: string) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      const targetId = href.substring(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
        // Update URL without page reload
        window.history.pushState(null, "", href);
      }
    }
    // For non-hash links, default Link behavior will handle the navigation
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <h3 className="text-xl font-bold mb-4">{footer.header.title}</h3>
            <p className="mb-4">{footer.header.description}</p>
            {/* Social Media */}
            <div className="flex space-x-4 mb-6">
              {footer?.socialMedia?.map((social, index) => (
                <SocialMedia
                  key={`social-${index}`}
                  index={index}
                  social={social}
                />
              ))}
            </div>
          </div>

          {/* Footer Sections */}

          {footer?.sections.map((section: TFooterSection, index: number) => (
            <div key={`section-${index}`} className="mt-4 md:mt-0">
              <h4 className="text-lg font-semibold mb-4 border-b border-gray-700 pb-2">
                {section.title}
              </h4>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={`link-${index}-${linkIndex}`}>
                    {link.href.startsWith("#") ? (
                      <Link
                        href={link.href}
                        onClick={(e) => handleSmoothScroll(e, link.href)}
                        className="hover:text-blue-400 transition-colors"
                      >
                        {getTranslatedContent(link.title)}
                      </Link>
                    ) : (
                      <Link
                        href={link.href}
                        className="hover:text-blue-400 transition-colors"
                      >
                        {getTranslatedContent(link.title)}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact Info */}
          <div className="mt-4 md:mt-0">
            <h4 className="text-lg font-semibold mb-4 border-b border-gray-700 pb-2">
              Contact Us
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <FaPhone className="mt-1 mr-3 text-blue-400" />
                <a
                  href={`tel:${footer?.contactInfo.phone}`}
                  className="hover:text-blue-400 transition-colors"
                >
                  {footer?.contactInfo.phone}
                </a>
              </li>
              <li className="flex items-start">
                <FaEnvelope className="mt-1 mr-3 text-blue-400" />
                <a
                  href={`mailto:${footer?.contactInfo.email}`}
                  className="hover:text-blue-400 transition-colors"
                >
                  {footer?.contactInfo.email}
                </a>
              </li>
              <li className="flex items-start">
                <FaMapMarkerAlt className="mt-1 mr-3 text-blue-400" />
                <span>{footer?.contactInfo.address}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 pt-6 text-center text-gray-400">
          <p>{footer?.copyrightText}</p>
          {/* <p className="mt-2 text-sm">
            Licensed by Ethiopian Ministry of Labor and Skills
          </p> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
