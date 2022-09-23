const localStorageSimulator = require('../mocks/localStorageSimulator');
const getSavedCartItems = require('../helpers/getSavedCartItems');
const saveCartItems = require('../helpers/saveCartItems');
// const { expect } = require('chai');

localStorageSimulator('getItem');

describe('4 - Teste a função getSavedCartItems', () => {
  // implemente seus testes aqui
  it(`Ao executar getSavedCartItems, o método local.Storage.setItem é chamado`, () => {
    // fail('Teste vazio');
    getSavedCartItems('cartItems');
    expect(localStorage.getItem).toHaveBeenCalled();
  });
  it(`Ao executar getSavedCartItems, o método local.Storage.setItem é chamado com "cartItems" como parâmetro`, () => {
    getSavedCartItems('cartItems');
    expect(localStorage.getItem).toHaveBeenCalledWith('cartItems');
  });
});
