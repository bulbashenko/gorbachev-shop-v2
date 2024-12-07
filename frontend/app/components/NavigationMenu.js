// components/NavigationMenu.js

import Link from 'next/link';
import { FaHome, FaUser, FaEnvelope, FaCog, FaInfoCircle, FaPhone } from 'react-icons/fa';
import links from '../utils/navigationLinks';

const NavigationMenu = () => {
  return (
    <nav className="my-4">
      {/* For smartphones */}
      <div className="flex md:hidden scrollbar-hide overflow-x-auto space-x-4 px-4">
        {links.map((link) => (
          <div key={link.href} className="flex-shrink-0 text-center">
            <Link href={link.href}>
              <div className="w-16 h-16 bg-transparent border-white border-2 rounded-full flex items-center justify-center text-x">
                {link.icon}
              </div>
              <span className="block mt-2 text-md">{link.smalllabel}</span>
            </Link>
          </div>
        ))}
      </div>
    </nav>
  );
};

export default NavigationMenu;