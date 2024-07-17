import { nameOf } from '../../../test/utils/nameOf';
import { toUnique } from './index';

const uniquePrimitives = [1, 2, 3, 4, 'hello', 'world'];

const duplicatePrimitives = [1, 1, 1, 'hello', 'hello'];

const uniqueObjects: { id: string }[] = [
  { id: 'uno' },
  { id: 'dos' },
  { id: 'tres' },
];

const duplicateObjects: { id: string }[] = [
  { id: 'uno' },
  { id: 'dos' },
  { id: 'uno' },
];

describe(nameOf(toUnique), () => {
  it('should return empty array if value is empty array', () => {
    expect([].filter(toUnique())).toEqual([]);
  });

  it('should return same items when they are unique already', () => {
    expect(uniquePrimitives.filter(toUnique())).toEqual(
      uniquePrimitives
    );

    expect(
      uniqueObjects.filter(toUnique({ by: (value) => value.id }))
    ).toEqual(uniqueObjects);
  });

  it('should return array without duplicates', () => {
    const filteredPrimitives = duplicatePrimitives.filter(toUnique());

    expect(filteredPrimitives).toEqual([1, 'hello']);

    const filteredObjects = duplicateObjects.filter(
      toUnique({ by: (value) => value.id })
    );

    expect(filteredObjects).toEqual([{ id: 'uno' }, { id: 'dos' }]);
  });
});
