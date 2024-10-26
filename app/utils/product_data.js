// Author: bulbashenko
// Test offline db. Randome data

import { faker } from "@faker-js/faker"

const product_data = {
    products: [
        {
            slug: faker.lorem.slug(),
            name: faker.commerce.productName(),
            category: faker.commerce.product(),
            price: faker.commerce.price(),
            image: faker.image.urlLoremFlickr({ width: 128, height: 128}),
            description: faker.commerce.productDescription(),
        },
        {
            slug: faker.lorem.slug(),
            name: faker.commerce.productName(),
            category: faker.commerce.product(),
            price: faker.commerce.price(),
            image: faker.image.urlLoremFlickr({ width: 128, height: 128}),
            description: faker.commerce.productDescription(),
        },
        {
            slug: faker.lorem.slug(),
            name: faker.commerce.productName(),
            category: faker.commerce.product(),
            price: faker.commerce.price(),
            image: faker.image.urlLoremFlickr({ width: 128, height: 128}),
            description: faker.commerce.productDescription(),
        },
        {
            slug: faker.lorem.slug(),
            name: faker.commerce.productName(),
            category: faker.commerce.product(),
            price: faker.commerce.price(),
            image: faker.image.urlLoremFlickr({ width: 128, height: 128}),
            description: faker.commerce.productDescription(),
        },
        {
            slug: faker.lorem.slug(),
            name: faker.commerce.productName(),
            category: faker.commerce.product(),
            price: faker.commerce.price(),
            image: faker.image.urlLoremFlickr({ width: 128, height: 128}),
            description: faker.commerce.productDescription(),
        },
    ]
}

export default product_data;