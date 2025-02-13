import { Dot, X } from "lucide-react";
import { SOCIALS, SITE } from "@consts";
import { useMobileNav } from "@hooks/useMobileNav";

export function MobileNav({ email }: { email: string }) {
  const { isOpen, toggleMenu } = useMobileNav();

  const menuItems = [
    { href: "/", label: "Home" },
    { href: "/projects", label: "Work" },
    { href: "/about", label: "About" },
    { href: `mailto:${email}`, label: "Contact" },
  ];

  return (
    <div className="md:hidden">
      {/* Menu Button */}
      <button
        onClick={toggleMenu}
        className="text-sm font-medium hover:opacity-70 transition-opacity relative flex items-center"
        aria-label="Toggle menu"
      >
        <span className="text-base">
          <Dot />
        </span>
        Menu
      </button>

      {/* Fullscreen Menu */}
      <div
        className={`fixed inset-0 bg-zinc-900 transition-all duration-500 ease-in-out z-40 ${
          isOpen
            ? "opacity-100 visible"
            : "opacity-0 invisible pointer-events-none"
        }`}
        aria-hidden={!isOpen}
      >
        <div
          className={`h-full flex flex-col p-8 transition-all duration-300 delay-100 ${
            isOpen ? "opacity-100" : "opacity-0"
          }`}
        >
          {/* Header */}
          <div className="flex justify-between items-center text-zinc-500 mb-8">
            <span className="uppercase text-sm tracking-wide">Navigation</span>
            <button
              onClick={toggleMenu}
              className="p-2 -m-2"
              aria-label="Close menu"
            >
              <div className="bg-amber-500 rounded-full p-2 transition-transform hover:scale-110">
                <X className="w-5 h-5 text-white" />
              </div>
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="flex-1">
            <ul className="space-y-6 text-white text-4xl font-light">
              {menuItems.map((link, index) => (
                <li
                  key={link.href}
                  style={{
                    transitionDelay: `${(index + 1) * 100}ms`,
                    opacity: isOpen ? 1 : 0,
                    transform: `translateY(${isOpen ? 0 : "10px"})`,
                    transition: "all 0.3s ease-in-out",
                  }}
                >
                  <a
                    href={link.href}
                    className="block hover:opacity-70 transition-opacity"
                    onClick={toggleMenu}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Social Links */}
          <div
            className="mt-auto"
            style={{
              transitionDelay: "500ms",
              opacity: isOpen ? 1 : 0,
              transform: `translateY(${isOpen ? 0 : "10px"})`,
              transition: "all 0.3s ease-in-out",
            }}
          >
            <div className="text-zinc-500 uppercase text-sm tracking-wide mb-4">
              Socials
            </div>
            <ul className="flex flex-wrap gap-6 text-white text-lg">
              {SOCIALS.map((SOCIAL, index) => (
                <li className="flex gap-x-2 text-nowrap">
                  <a
                    href={SOCIAL.HREF}
                    target="_blank"
                    aria-label={`${SITE.NAME} on ${SOCIAL.NAME}`}
                    className="hover:opacity-70 transition-opacity"
                  >
                    {SOCIAL.NAME}
                  </a>
                  {index !== SOCIALS.length - 1 && "/"}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
