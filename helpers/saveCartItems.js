const saveCartItems = (cartItem) => {
  // seu código aqui
  const listaCart = cartItem.parentElement;
  localStorage.setItem('cartItems', listaCart.innerHTML);
};

if (typeof module !== 'undefined') {
  module.exports = saveCartItems;
}
