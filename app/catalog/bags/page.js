import products from '../../utils/productsData';
import ItemCard from '../../components/ItemCard';
const BagsPage = () => {
  const pageProducts = products.filter(product => product.category === 'bags');

  return (
    <div>
        <h1 className="text-3xl font-bold mb-6 text-center">Bags</h1>
      <div  className="container mx-auto px-6 py-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 lg:gap-10">
          {pageProducts.map((product) => (
            <div key={product.slug}>
              <ItemCard product={product} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BagsPage;
