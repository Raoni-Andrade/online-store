const fetchItem = async (id) => {
  // seu código aqui
  try {
    const endpoint = `https://api.mercadolibre.com/items/${id}`;
    const fetchPromise = await fetch(endpoint);
    const dataJSON = await fetchPromise.json();
    console.log('ESSE É O DATA.JSON -> ', dataJSON);
    return dataJSON;
  } catch (err) {
    return err;
  }
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchItem,
  };
}
