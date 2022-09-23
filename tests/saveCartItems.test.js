const localStorageSimulator = require('../mocks/localStorageSimulator');
const saveCartItems = require('../helpers/saveCartItems');
// const { expect } = require('chai');

localStorageSimulator('setItem');

describe('3 - Teste a função saveCartItems', () => {
  // implemente seus testes aqui
  it(`Ao executar saveCartItems com "cartItem" como argumento, o método local.Storage.setItem é chamado`, () => {
  // fail('Teste vazio');
  const cartItem = 'cartItem';
  saveCartItems(cartItem);
  expect(localStorage.setItem).toHaveBeenCalled();
});
  it(`saveCartItems(cartItem) é executado e o método local.Storage.setItem é chamado com dois parâmetros "cartItems" e "saveCartItems"`, () => {
    const cartItem = 'cartItem';
    saveCartItems(cartItem);
    expect(localStorage.setItem).toHaveBeenCalledWith('cartItems', cartItem);
  });
});
