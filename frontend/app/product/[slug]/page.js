// app/product/[slug]/page.js

import { notFound } from 'next/navigation';
import products from '../../utils/productsData';
import ProductPage from '../../components/ProductPage';

const ProductDetail = ({ params }) => {
  const { slug } = params;

  // Находим продукт по slug
  const product = products.find((item) => item.slug === slug);

  // Если продукт не найден, показываем страницу 404
  if (!product) {
    notFound();
  }

  return <ProductPage product={product} />;
};

export default ProductDetail;