// page.js
import Image from "next/image";
import ItemCard from '../components/ItemCard';
import products from '../utils/productsData';

export default function Home() {
  return (
    <div>
    <h1 className="text-3xl font-bold mb-6 text-center">All Products</h1>
    <div className="container mx-auto px-6 py-8">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 lg:gap-10">
        {products.map((product) => (
          <ItemCard key={product.slug} product={product} />
        ))}
      </div>
    </div>
    </div>
  );
}
