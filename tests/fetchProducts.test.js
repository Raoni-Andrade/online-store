require('../mocks/fetchSimulator');
const { fetchProducts } = require('../helpers/fetchProducts');
const computadorSearch = require('../mocks/search');
const { expect } = require('@jest/globals');

describe('1 - Teste a função fetchProducts', () => {
  // implemente seus testes aqui
  it(`fetchProducts é uma função?`, async () => {
    expect(typeof fetchProducts)
      .toBe('function');
  });
  it(`Quando o argumento "computador" é passado, a função é chamada?`, async () => {
    await fetchProducts('computador');
    expect(fetch)
      .toHaveBeenCalled();
  });
  it(`Com o argumento "computador" passado, a função utiliza o endpoint correto?`, async () =>  {
    const endpoint = 'https://api.mercadolibre.com/sites/MLB/search?q=computador';
    await fetchProducts('computador');
    expect(fetch)
      .toHaveBeenCalledWith(endpoint);
  });
  it(`Com o argumento "computador" passado, a função retorna uma estrutura igual ao objeto "computadorSearch"`, async () => {
    const expectedObject = computadorSearch.results;
    expect(await fetchProducts('computador'))
      .toEqual(expectedObject);
  });
  it(`Ao chamar a função sem argumento, retorna o erro "You must provide an url"`, async () => {
    expect(await fetchProducts())
      .toEqual(new Error('You must provide an url'));
  });
  // it(`Teste vazio`, () => {
  //   fail('Teste vazio');
  // });
});
