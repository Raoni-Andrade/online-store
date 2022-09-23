const saveCartItems = (cartItem) => {
  // seu código aqui
  const cartSection = cartItem.parentElement;
  localStorage.setItem('cartItems', cartSection.innerHTML);
};

if (typeof module !== 'undefined') {
  module.exports = saveCartItems;
}
