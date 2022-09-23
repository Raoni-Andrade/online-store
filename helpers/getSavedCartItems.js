const getSavedCartItems = (cartItems) => {
  // seu código aqui
  const savedListaCart = localStorage.getItem(cartItems);
  return savedListaCart;
};

if (typeof module !== 'undefined') {
  module.exports = getSavedCartItems;
}
