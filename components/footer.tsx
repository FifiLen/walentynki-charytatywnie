import Link from "next/link";
import { Facebook, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary-100 dark:bg-primary-950 text-primary-800 dark:text-primary-200">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">Adopt Love</h3>
            <p className="text-primary-600 dark:text-primary-400">
              Pomagamy zwierzętom znaleźć kochający dom. Dołącz do nas w misji
              tworzenia szczęśliwych historii adopcyjnych.
            </p>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-4">Szybkie linki</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                >
                  Strona główna
                </Link>
              </li>
              <li>
                <Link
                  href="/o-nas"
                  className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                >
                  O nas
                </Link>
              </li>
              <li>
                <Link
                  href="/adoptuj"
                  className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                >
                  Adoptuj
                </Link>
              </li>
              <li>
                <Link
                  href="/wolontariat"
                  className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                >
                  Wolontariat
                </Link>
              </li>
              <li>
                <Link
                  href="/kontakt"
                  className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                >
                  Kontakt
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-4">Kontakt</h4>
            <p className="mb-2">Email: kontakt@adoptlove.pl</p>
            <p className="mb-4">Tel: +48 123 456 789</p>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-600 hover:text-primary-800 dark:text-primary-400 dark:hover:text-primary-200 transition-colors"
              >
                <Facebook size={24} />
                <span className="sr-only">Facebook</span>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-600 hover:text-primary-800 dark:text-primary-400 dark:hover:text-primary-200 transition-colors"
              >
                <Instagram size={24} />
                <span className="sr-only">Instagram</span>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-600 hover:text-primary-800 dark:text-primary-400 dark:hover:text-primary-200 transition-colors"
              >
                <Twitter size={24} />
                <span className="sr-only">Twitter</span>
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-primary-200 dark:border-primary-800 text-center text-primary-600 dark:text-primary-400">
          <p>
            &copy; {new Date().getFullYear()} Adopt Love. Wszelkie prawa
            zastrzeżone.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
