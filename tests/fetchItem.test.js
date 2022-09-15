require('../mocks/fetchSimulator');
const { fetchItem } = require('../helpers/fetchItem');
const item = require('../mocks/item');

describe('2 - Teste a função fetchItem', () => {
  // implemente seus testes aqui
  it(`fetchItem é uma função?`, async () => {
    expect(typeof fetchItem)
      .toBe('function');
  });
  it(`Quando o argumento "MLB1615760527" é passado, a função é chamada?`, async () => {
    await fetchItem('MLB1615760527');
    expect(fetch)
      .toHaveBeenCalled();
  });
  it(`Com o argumento "MLB1615760527" passado, a função utiliza o endpoint correto?`, async () =>  {
    const endpoint = 'https://api.mercadolibre.com/items/MLB1615760527';
    await fetchItem('MLB1615760527');
    expect(fetch)
      .toHaveBeenCalledWith(endpoint);
  });
  it(`Com o argumento "MLB1615760527" passado, a função retorna uma estrutura igual ao objeto "item"`, async () => {
    const expectedObject = item;
    expect(await fetchItem('MLB1615760527'))
      .toEqual(expectedObject);
  });
  it(`Ao chamar a função sem argumento, retorna o erro "You must provide an url"`, async () => {
    expect(await fetchItem())
      .toEqual(new Error('You must provide an url'));
  });
  // fail('Teste vazio');
});
