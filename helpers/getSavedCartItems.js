const getSavedCartItems = (cartItems) => {
  // seu código aqui
  const savedCartSection = localStorage.getItem(cartItems);
  return savedCartSection;
};

if (typeof module !== 'undefined') {
  module.exports = getSavedCartItems;
}
