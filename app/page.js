import Image from "next/image";
import { faker } from "@faker-js/faker";
import product_data from "./utils/product_data"
import Item from "./components/Item";

const randomImage = faker.image.urlLoremFlickr({ width: 128, height: 128});


export default function Home() {
  return (
    // Author: bulbashenko
    // Output of product cards
    <div>
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-wrap -mx-4">
          {product_data.products.map((product) => (
            <div key={product.slug} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 px-4 mb-6">
              <Item product={product} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
