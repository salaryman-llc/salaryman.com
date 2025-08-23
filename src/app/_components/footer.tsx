import { Link } from "./catalyst/link";
import { navItems } from "../constants";

export default function Footer() {
  return (
    <footer>
      <div className="mx-auto max-w-7xl overflow-hidden px-6 py-6 sm:py-6 lg:px-6">
        <nav
          aria-label="Footer"
          className="-mb-6 flex flex-wrap justify-center gap-x-12 gap-y-3 text-sm/6"
        >
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.url}
              className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <p className="mt-10 text-center text-sm/6 text-gray-600 dark:text-gray-400">
          &copy; 2025 Salaryman LLC. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
