import { removeLastItem, addItem } from '../arrayUtils';

describe('removeItem', () => {
  it('returns new array with last item removed', () => {
    const arr = ['foo', 'bar'];
    expect(removeLastItem(arr)).toEqual(['foo']);
  });
  it('returns empty array when paramater is undefined', () => {
    expect(removeLastItem()).toEqual([]);
  });
});

describe('addItem', () => {
  it('returns new array with added item', () => {
    const arr = ['foo'];
    expect(addItem(arr, 'bar')).toEqual(['foo', 'bar']);
  });
  it("returns array when item isn't passed", () => {
    const arr = ['foo'];
    expect(addItem(arr)).toEqual(['foo']);
  });
});
