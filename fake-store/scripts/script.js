'use strict';
//elements
const productsContainer = document.getElementById('products-container');

//global variables
const randomProducts = `https://fakestoreapi.com/products`;

//functions
const showProducts = (products) => {
  productsContainer.innerHTML = ``;
  products.forEach((product) => {
    const { id, title, price, image } = product;
    const productElement = document.createElement('li');
    productElement.className = 'product';

    productElement.innerHTML = `
    <div class="product-image-container">
            <img
              src="${image}"
              alt="${title}"
              class="product-image"
            />
          </div>
          <h4 class="product-title">${title
            .split(' ')
            .slice(0, 3)
            .join(' ')}</h4>
          <h5 class="product-price">₹${price}</h5>
    `;
    productsContainer.appendChild(productElement);
  });
};

const fetchData = (url) => {
  fetch(url)
    .then((response) => response.json())
    .then((result) => showProducts(result));
};

fetchData(randomProducts);

//event Listeners

//initial settings

//Promise -> Pending, fulfilled or rejected
