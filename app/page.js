// page.js
import Image from "next/image";
import ItemCard from './components/ItemCard';
import products from './utils/productsData';

export default function Home() {
  return (
    
    <div className="container mx-auto px-6 py-8">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 lg:gap-10">
        {products.map((product) => (
          <ItemCard key={product.slug} product={product} />
        ))}
      </div>
    </div>

  );
}
