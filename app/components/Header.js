// components/Header.js

import Link from 'next/link';
import { FaQuestionCircle, FaUser, FaShoppingBag } from 'react-icons/fa';

const Header = () => {
  return (
    <header className="bg-black text-white p-4">
      {/* For larger screens */}
      <div className="hidden md:flex justify-between items-center">
        {/* Left side: Help link with icon */}
        <Link href="/help" className="flex items-center">
          <FaQuestionCircle className="mr-2" />
          <span>help</span>
        </Link>
        {/* Center: Gorbachev link */}
        <Link href="/" className="text-2xl font-bold">
          gorbachev
        </Link>
        {/* Right side: Users and Shopping Bag icons */}
        <div className="flex space-x-4">
          <Link href="/users">
            <FaUser />
          </Link>
          <Link href="/cart">
            <FaShoppingBag />
          </Link>
        </div>
      </div>
      {/* For smartphones */}
      <div className="flex md:hidden justify-between items-center">
        {/* Left side: Gorbachev link */}
        <Link href="/" className="text-xl font-bold">
          gorbachev
        </Link>
        {/* Right side: Users and Shopping Bag icons */}
        <div className="flex space-x-4">
          <Link href="/users">
            <FaUser />
          </Link>
          <Link href="/cart">
            <FaShoppingBag />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
