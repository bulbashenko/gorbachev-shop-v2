import { FaHome, FaUser, FaEnvelope, FaCog, FaInfoCircle, FaPhone, FaShoppingBag, FaTshirt, FaHatCowboy, FaRulerHorizontal, FaMale } from 'react-icons/fa';

const links = [
    { href: '/catalog', label: 'All Products', smalllabel: 'shop', icon: <FaShoppingBag /> },
    { href: '/catalog/accesories', label: 'Accessories', smalllabel: 'extra', icon: <FaHatCowboy /> },
    { href: '/catalog/sweaters', label: 'Sweaters', smalllabel: 'sweaters', icon: <FaTshirt /> },
    { href: '/catalog/tshirts', label: 'T-shirts', smalllabel: 't-shirts', icon: <FaTshirt /> },
    { href: '/catalog/pants', label: 'Pants', smalllabel: 'pants', icon: <FaMale /> },
    { href: '/catalog/bags', label: 'Bags', smalllabel: 'bags', icon: <FaShoppingBag /> },
    { href: '/sizeCalc', label: 'Size Calculator', smalllabel: 'sizes', icon: <FaRulerHorizontal /> }
];

export default links;
