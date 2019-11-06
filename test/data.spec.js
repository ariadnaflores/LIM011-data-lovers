/* eslint-disable object-curly-newline */
// importamos la función `example`
import { filter } from '../src/data';

const first = [
  { id: 1, name: 'Bulbasaur', type: ['Grass', 'Poison'], weaknesses: ['Fire', 'Ice', 'Flying', 'Psychic'] },
  { id: 2, name: 'Ivysaur', type: ['Grass', 'Poison'], weaknesses: ['Fire', 'Ice', 'Flying', 'Psychic'] },
  { id: 3, name: 'Venusaur', type: ['Grass', 'Poison'], weaknesses: ['Fire', 'Ice', 'Flying', 'Psychic'] },
  { id: 4, name: 'Charmander', type: ['Fire'], weaknesses: ['Water', 'Ground', 'Rock'] },
  { id: 5, name: 'Charmeleon', type: ['Fire'], weaknesses: ['Water', 'Ground', 'Rock'] },
];
const second = [
  { id: 1, name: 'Bulbasaur', type: ['Grass', 'Poison'], weaknesses: ['Fire', 'Ice', 'Flying', 'Psychic'] },
  { id: 2, name: 'Ivysaur', type: ['Grass', 'Poison'], weaknesses: ['Fire', 'Ice', 'Flying', 'Psychic'] },
  { id: 3, name: 'Venusaur', type: ['Grass', 'Poison'], weaknesses: ['Fire', 'Ice', 'Flying', 'Psychic'] },
];

describe('filter', () => {
  it('debería ser una función', () => {
    expect(typeof filter).toBe('function');
  });
  describe('filter', () => {
    it('debería retornar un array con los pokemones de tipo hierba', () => {
      expect(filter(first, 'Grass', 'type')).toEqual(second);
    });
  });
});
