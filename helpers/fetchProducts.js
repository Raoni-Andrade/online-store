const fetchProducts = async (product) => {
  // seu código aqui
  try {
    const url = `https://api.mercadolibre.com/sites/MLB/search?q=${product}`;
    const promiseFetch = await fetch(url);
    const response = await promiseFetch.json();
    return response.results;
  } catch (err) {
    return err;
  }
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchProducts,
  };
}
