// components/NavigationMenu.js

import Link from 'next/link';
import { FaHome, FaUser, FaEnvelope, FaCog, FaInfoCircle, FaPhone } from 'react-icons/fa';

const links = [
  { href: '/', label: 'shop', icon: <FaHome /> },
  { href: '/t-shirts', label: 't-shirts', icon: <FaInfoCircle /> },
  { href: '/hoodies', label: 'hoodies', icon: <FaCog /> },
  { href: '/pants', label: 'pants', icon: <FaEnvelope /> },
  { href: '/jackets', label: 'jackets', icon: <FaUser /> },
  { href: '/support', label: 'bags', icon: <FaPhone /> },
  { href: '/stickers', label: 'stickers'}
];

const NavigationMenu = () => {
  return (
    <nav className="my-4">
      {/* For larger screens */}
      <div className="hidden md:flex justify-center space-x-8 text-black">
        {links.map((link) => (
          <Link key={link.href} href={link.href} className="hover:underline">
            <div className='text-xl'>
                {link.label}
            </div>
          </Link>
        ))}
      </div>

      {/* For smartphones */}
      <div className="flex md:hidden scrollbar-hide overflow-x-auto space-x-4 px-4">
        {links.map((link) => (
          <div key={link.href} className="flex-shrink-0 text-center">
            <Link href={link.href}>
              <div className="w-16 h-16 bg-transparent border-black border-2 rounded-full flex items-center justify-center text-x">
                {link.icon}
              </div>
              <span className="block mt-2 text-md">{link.label}</span>
            </Link>
          </div>
        ))}
      </div>
    </nav>
  );
};

export default NavigationMenu;
