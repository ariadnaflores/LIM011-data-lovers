/* eslint-disable object-curly-newline */
// importamos la función `example`
import { filter, order } from '../src/data';

const firstInput = [
  { id: 1, name: 'Bulbasaur', type: ['Grass', 'Poison'], weaknesses: ['Fire', 'Ice', 'Flying', 'Psychic'] },
  { id: 2, name: 'Ivysaur', type: ['Grass', 'Poison'], weaknesses: ['Fire', 'Ice', 'Flying', 'Psychic'] },
  { id: 3, name: 'Venusaur', type: ['Grass', 'Poison'], weaknesses: ['Fire', 'Ice', 'Flying', 'Psychic'] },
  { id: 4, name: 'Charmander', type: ['Fire'], weaknesses: ['Water', 'Ground', 'Rock'] },
  { id: 5, name: 'Charmeleon', type: ['Fire'], weaknesses: ['Water', 'Ground', 'Rock'] },
];
const firstOutput = [
  { id: 1, name: 'Bulbasaur', type: ['Grass', 'Poison'], weaknesses: ['Fire', 'Ice', 'Flying', 'Psychic'] },
  { id: 2, name: 'Ivysaur', type: ['Grass', 'Poison'], weaknesses: ['Fire', 'Ice', 'Flying', 'Psychic'] },
  { id: 3, name: 'Venusaur', type: ['Grass', 'Poison'], weaknesses: ['Fire', 'Ice', 'Flying', 'Psychic'] },
];
const secondOutput = [
  { id: 4, name: 'Charmander', type: ['Fire'], weaknesses: ['Water', 'Ground', 'Rock'] },
  { id: 5, name: 'Charmeleon', type: ['Fire'], weaknesses: ['Water', 'Ground', 'Rock'] },
];
const thirdOutput = [
  { id: 5, name: 'Charmeleon', type: ['Fire'], weaknesses: ['Water', 'Ground', 'Rock'] },
  { id: 4, name: 'Charmander', type: ['Fire'], weaknesses: ['Water', 'Ground', 'Rock'] },
  { id: 3, name: 'Venusaur', type: ['Grass', 'Poison'], weaknesses: ['Fire', 'Ice', 'Flying', 'Psychic'] },
  { id: 2, name: 'Ivysaur', type: ['Grass', 'Poison'], weaknesses: ['Fire', 'Ice', 'Flying', 'Psychic'] },
  { id: 1, name: 'Bulbasaur', type: ['Grass', 'Poison'], weaknesses: ['Fire', 'Ice', 'Flying', 'Psychic'] },
];
const fourthOutput = [
  { id: 1, name: 'Bulbasaur', type: ['Grass', 'Poison'], weaknesses: ['Fire', 'Ice', 'Flying', 'Psychic'] },
  { id: 4, name: 'Charmander', type: ['Fire'], weaknesses: ['Water', 'Ground', 'Rock'] },
  { id: 5, name: 'Charmeleon', type: ['Fire'], weaknesses: ['Water', 'Ground', 'Rock'] },
  { id: 2, name: 'Ivysaur', type: ['Grass', 'Poison'], weaknesses: ['Fire', 'Ice', 'Flying', 'Psychic'] },
  { id: 3, name: 'Venusaur', type: ['Grass', 'Poison'], weaknesses: ['Fire', 'Ice', 'Flying', 'Psychic'] },
];
const fifthOutput = [
  { id: 3, name: 'Venusaur', type: ['Grass', 'Poison'], weaknesses: ['Fire', 'Ice', 'Flying', 'Psychic'] },
  { id: 2, name: 'Ivysaur', type: ['Grass', 'Poison'], weaknesses: ['Fire', 'Ice', 'Flying', 'Psychic'] },
  { id: 5, name: 'Charmeleon', type: ['Fire'], weaknesses: ['Water', 'Ground', 'Rock'] },
  { id: 4, name: 'Charmander', type: ['Fire'], weaknesses: ['Water', 'Ground', 'Rock'] },
  { id: 1, name: 'Bulbasaur', type: ['Grass', 'Poison'], weaknesses: ['Fire', 'Ice', 'Flying', 'Psychic'] },
];

describe('filter', () => {
  it('debería ser una función', () => {
    expect(typeof filter).toBe('function');
  });
  describe('filter', () => {
    it('debería retornar un array con los pokemones de tipo hierba', () => {
      expect(filter(firstInput, 'type', 'Grass')).toEqual(firstOutput);
    });
    it('debería retornar un array con los pokemones con debilidad agua', () => {
      expect(filter(firstInput, 'weaknesses', 'Water')).toEqual(secondOutput);
    });
  });
});
describe('order', () => {
  it('debería ser una función', () => {
    expect(typeof order).toBe('function');
  });
  describe('order', () => {
    it('debería retornar un array con los pokemones ordenados en forma descendente por id', () => {
      expect(order(firstInput, 'id', 'desc')).toEqual(thirdOutput);
    });
    it('debería retornar un array con los pokemones ordenados por nombre a-z', () => {
      expect(order(firstInput, 'name', 'a-z')).toEqual(fourthOutput);
    });
    it('debería retornar un array con los pokemones ordenados por nombre z-a', () => {
      expect(order(firstInput, 'name', 'z-a')).toEqual(fifthOutput);
    });
  });
});
