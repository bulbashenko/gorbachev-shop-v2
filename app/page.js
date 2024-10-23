import Image from "next/image";
import { faker } from "@faker-js/faker";

const randomProduct = faker.commerce.productName();
const randomImage = faker.image.urlLoremFlickr({ width: 128, height: 128});


export default function Home() {
  return (
    <div>
      <img src={randomImage} width={128} height={128} />
      <h1 className="text-4xl">{randomProduct}</h1>
      <p>Velit do cupidatat ad mollit consequat irure consectetur culpa excepteur. Enim laborum ad do exercitation enim non sunt consectetur do reprehenderit culpa deserunt culpa. Cillum et tempor sunt occaecat consectetur duis duis dolore culpa esse mollit pariatur. Ipsum quis cillum irure aliqua magna elit laboris ex excepteur in. Ea consequat qui eu veniam eu laboris incididunt dolor irure duis.

Laboris duis do non adipisicing adipisicing aute tempor fugiat nostrud. Deserunt cupidatat deserunt aliqua laborum deserunt ad officia quis occaecat. Mollit laboris consequat nulla dolore reprehenderit.

Cillum ex duis ullamco occaecat aliqua non in esse aute aliqua qui. Consectetur dolor ex proident esse aute culpa sunt nisi veniam consequat. Incididunt et cillum nostrud deserunt do incididunt laboris ex consectetur magna.

Consequat ipsum ea nulla velit consequat. Esse tempor laborum ut minim nisi reprehenderit. Anim reprehenderit excepteur aliqua quis ad. Cillum et nulla aliqua exercitation occaecat Lorem consectetur consectetur ea.</p>
    </div>
  );
}
