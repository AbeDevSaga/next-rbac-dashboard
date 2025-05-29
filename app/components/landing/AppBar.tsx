import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { TAppBar } from "@/app/constants/type";
import { motion, AnimatePresence } from "framer-motion";
import { LanguageSelection } from "../ui/LanguageSelection";
import { useRouter } from "next/navigation";
import { useTranslation } from "next-i18next";
import React from "react";

export default function AppBar({ logo, links, button }: TAppBar) {
  const router = useRouter();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const { t } = useTranslation("common");
  const getTranslatedContent = React.useCallback(
    (content: string | { key: string; default: string }) => {
      if (typeof content === "string") return content;
      return t(content.key, { defaultValue: content.default });
    },
    [t]
  );

  const handleSmoothScroll = (e: React.MouseEvent, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);

    if (href.startsWith("#")) {
      const targetId = href.substring(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
        window.history.pushState(null, "", href);
      }
    } else {
      router.push(href);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-gray-900 shadow-md z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Company Logo (Left) */}
        <Link href="/" className="flex items-center">
          <Image
            src={logo.src}
            alt={logo.alt}
            width={logo.width}
            height={logo.height}
            className={logo.className || "h-10 w-auto"}
          />
        </Link>

        {/* Desktop Navigation (Center) */}
        <nav className="hidden md:flex space-x-8">
          {links.map((link, index) => (
            <Link
              key={index}
              href={link.href}
              onClick={(e) => handleSmoothScroll(e, link.href)}
              className={`text-gray-100 hover:text-white transition ${
                link.className || ""
              }`}
            >
              {getTranslatedContent(link.label)}
            </Link>
          ))}
        </nav>

        {/* Desktop Right Section (Language + Button) */}
        <div className="hidden md:flex items-center space-x-4">
          <LanguageSelection />
          <Link
            href={button.href}
            className={`bg-white text-gray-900 px-6 py-2 rounded-lg hover:bg-gray-100 transition duration-200`}
          >
            {getTranslatedContent(button.label)}
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center space-x-4">
          <LanguageSelection />
          <button
            type="button"
            className="-m-2.5 p-2.5 text-gray-100 hover:text-white"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open menu</span>
            <Bars3Icon className="h-6 w-6" />
          </button>
        </div>
      </div>
      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <Dialog
            as="div"
            static
            open={mobileMenuOpen}
            onClose={setMobileMenuOpen}
            className="md:hidden fixed inset-0 z-50"
          >
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50"
              onClick={() => setMobileMenuOpen(false)}
            />

            {/* Panel - Now scrollable */}
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "tween", ease: "easeInOut", duration: 0.3 }}
              className="fixed inset-y-0 left-0 w-4/5 max-w-sm flex flex-col bg-gray-800 shadow-xl"
            >
              {/* Header with logo and close button */}
              <div className="flex-shrink-0 px-4 py-3 border-b border-gray-700">
                <div className="flex items-center justify-between">
                  <Link
                    href="/"
                    className="flex items-center"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <Image
                      src={logo.src}
                      alt={logo.alt}
                      width={80}
                      height={32}
                      className="h-8 w-auto"
                    />
                  </Link>
                  <button
                    type="button"
                    className="-m-2.5 p-2.5 text-gray-100 hover:text-white"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <span className="sr-only">Close menu</span>
                    <XMarkIcon className="h-6 w-6" />
                  </button>
                </div>
              </div>

              {/* Scrollable content area */}
              <div className="flex-1 overflow-y-auto">
                <div className="px-4 py-6">
                  <div className="space-y-4 pb-6">
                    {links.map((link, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.05 + 0.1 }}
                      >
                        <Link
                          href={link.href}
                          onClick={(e) => handleSmoothScroll(e, link.href)}
                          className={`block py-2 text-lg text-gray-100 hover:text-white ${
                            link.className || ""
                          }`}
                        >
                          {getTranslatedContent(link.label)}
                        </Link>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Footer with language selection and button */}
              <div className="flex-shrink-0 px-4 py-6 border-t border-gray-700">
                <div className="space-y-4">
                  {/* Mobile Language Selection */}
                  <div className="flex flex-col space-y-2">
                    <span className="text-gray-400 text-sm">
                      {t("select_language")}
                    </span>
                    <LanguageSelection mobile />
                  </div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: links.length * 0.05 + 0.1 }}
                  >
                    <Link
                      href={button.href}
                      className={`block w-full text-center bg-white text-gray-900 px-6 py-3 rounded-lg text-lg hover:bg-gray-100`}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {getTranslatedContent(button.label)}
                    </Link>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </Dialog>
        )}
      </AnimatePresence>
    </header>
  );
}
