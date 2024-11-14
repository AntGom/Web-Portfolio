import { lazy, Suspense } from "react";

const FaGithub = lazy(() => import("react-icons/fa").then((mod) => ({ default: mod.FaGithub })));
const FaLinkedin = lazy(() => import("react-icons/fa").then((mod) => ({ default: mod.FaLinkedin })));

const socialLinks = [
  {
    href: "https://github.com/AntGom",
    label: "GitHub",
    Icon: FaGithub,
  },
  {
    href: "https://www.linkedin.com/in/antonio-g%C3%B3mez-dom%C3%ADnguez/",
    label: "LinkedIn",
    Icon: FaLinkedin,
  },
];

const Footer = () => {
  return (
    <footer className="bg-[#0f4069] pt-4 pb-2">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center">
          <div className="flex space-x-6 mb-4">
            {socialLinks.map(({ href, label, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-50"
                aria-label={label}
              >
                <Suspense fallback={<span>...</span>}>
                  <Icon className="text-2xl" />
                </Suspense>
              </a>
            ))}
          </div>
          <p className="text-gray-50 text-center">
            © {new Date().getFullYear()} Antonio Gómez Domínguez. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
