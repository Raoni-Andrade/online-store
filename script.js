// Esse tipo de comentário que estão antes de todas as funções são chamados de JSdoc,
// experimente passar o mouse sobre o nome das funções e verá que elas possuem descrições!

// const saveCartItems = require("./helpers/saveCartItems");

// const { fetchItem } = require("./helpers/fetchItem");

// const { id } = require("./mocks/item");

// const { fetchProducts } = require('./helpers/fetchProducts');

// Fique a vontade para modificar o código já escrito e criar suas próprias funções!
const listaCart = document.querySelector('.cart__items');
const productsList = document.querySelector('.items');
const totalPricer = document.querySelector('.total-price');
let totalPrice = 0;

/**
 * Função responsável por criar e retornar o elemento de imagem do produto.
 * @param {string} imageSource - URL da imagem.
 * @returns {Element} Elemento de imagem do produto.
 */
const createProductImageElement = (imageSource) => {
  const img = document.createElement('img');
  img.className = 'item__image';
  img.src = imageSource;
  return img;
};

/**
 * Função responsável por criar e retornar qualquer elemento.
 * @param {string} element - Nome do elemento a ser criado.
 * @param {string} className - Classe do elemento.
 * @param {string} innerText - Texto do elemento.
 * @returns {Element} Elemento criado.
 */
const createCustomElement = (element, className, innerText) => {
  const e = document.createElement(element);
  e.className = className;
  e.innerText = innerText;
  return e;
};

/**
 * Função responsável por criar e retornar o elemento do produto.
 * @param {Object} product - Objeto do produto.
 * @param {string} product.id - ID do produto.
 * @param {string} product.title - Título do produto.
 * @param {string} product.thumbnail - URL da imagem do produto.
 * @param {string} product.price - Preço do produto.
 * @returns {Element} Elemento de produto.
 */
const createProductItemElement = ({ id, title, thumbnail }) => {
  const section = document.createElement('section');
  section.className = 'item';

  section.appendChild(createCustomElement('span', 'item_id', id));
  section.appendChild(createCustomElement('span', 'item__title', title));
  section.appendChild(createProductImageElement(thumbnail));
  section.appendChild(createCustomElement('button', 'item__add', 'Adicionar ao carrinho!'));
  // section.appendChild(createCustomElement('span', 'item_price', price));

  return section;
};

const savesPrice = (price) => {
  localStorage.setItem('totalPriceSaved', JSON.stringify(price));
};

const priceUpdated = () => {
  totalPricer.innerHTML = totalPrice.toFixed(2);
  savesPrice(totalPrice);
  saveCartItems(listaCart);
};

/**
 * Função que recupera o ID do produto passado como parâmetro.
 * @param {Element} product - Elemento do produto.
 * @returns {string} ID do produto.
 */

const cartItemClickListener = async (event) => {
  // ESSA FUNÇÃO TIRA O ITEM DO CARRINHO DE COMPRAS
  const cartItem = event.target;
  const removedItem = await fetchItem(cartItem.id);
  totalPrice -= removedItem.price;
  // console.log(cartItem.parentElement);
};

priceUpdated();
listaCart.removeChild(cartItem);

/**
 * Função responsável por criar e retornar um item do carrinho.
 * @param {Object} product - Objeto do produto.
 * @param {string} product.id - ID do produto.
 * @param {string} product.title - Título do produto.
 * @param {string} product.price - Preço do produto.
 * @returns {Element} Elemento de um item do carrinho.
 */

const createCartItemElement = ({ id, title, price }) => {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = `ID: ${id} | TITLE: ${title} | PRICE: $${price}`;
  li.id = `${id}`;
  listaCart.appendChild(li);
  li.addEventListener('click', cartItemClickListener); 
  return li;
};

const getIdFromProductItem = (product) => product.querySelector('span.item_id').innerText;

const addLoading = () => {
  const loading = document.createElement('p');
  loading.className = 'loading';
  loading.innerHTML = 'carregando...';
  productsList.appendChild(loading);
};

const removeLoading = async () => {
  productsList.firstChild.remove();
};

const addToCart = async (id) => {
  const itemAdded = await fetchItem(id);
  const itemOnTheCart = createCartItemElement(itemAdded);
  listaCart.appendChild(itemOnTheCart);
  totalPrice += parseFloat(itemAdded.price);
  priceUpdated();
};

const cleanCart = () => {
  const cleanButton = document.querySelector('.empty-cart');
  cleanButton.addEventListener('click', () => {
    for (let index = listaCart.childNodes.length - 1; index >= 0; index -= 1) {
      listaCart.childNodes[index].remove();
    }
    totalPrice = 0;
    priceUpdated();
  });
};

cleanCart();

const getSavedPrice = () => {
  const savedPrice = localStorage.getItem('totalPriceSaved');
  return savedPrice;
};

const getLocalStorage = () => {
  const saved = localStorage.getItem('itemAdded');
  console.log(saved);
};

const showProducts = async () => {
  // const productsList = document.querySelector('.items');
  const computers = await fetchProducts('computador');
  removeLoading();

  computers.forEach((product) => {
    const newProduct = createProductItemElement(product);
    productsList.appendChild(newProduct);
    newProduct.querySelector('button.item__add').addEventListener('click', async () => {
      const itemId = getIdFromProductItem(newProduct);
      await addToCart(itemId);
  });
  });
};

// const addToCart = () => {
//   const bigSection = document.querySelector('.items');
//   const sections = document.getElementsByClassName('item');
//   const btn = document.getElementsByClassName('item__add');
  // const sections = (bigSection).childNodes;
  // console.log(sections);
  // console.log(bigSection);
  // console.log(btn);
  // const itemId = element.target.parentNode.firstChild.innerText;
// };

window.onload = () => {
  showProducts();
  addLoading();
  totalPricer.innerHTML = '';

  const savedListaCart = getSavedCartItems('cartItems');
  listaCart.innerHTML = savedListaCart;

  const savedPrice = getSavedPrice() || 0;
  totalPrice = parseFloat(savedPrice);
  totalPricer.innerHTML = totalPrice;
};
