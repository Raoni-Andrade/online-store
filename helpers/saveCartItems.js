const saveCartItems = (cartItem) => {
  // seu código aqui
  localStorage.setItem('cartItems', cartItem.innerHTML);
};

if (typeof module !== 'undefined') {
  module.exports = saveCartItems;
}
