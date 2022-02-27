# nukit

Tiny collection of essential JavaScript utilities.

## Contents

### Filters

  - [**isUndefined**](src/filters/isUndefined/index.ts) — returns true if value is undefined. [(tests)](src/filters/isUndefined/index.test.ts)
  - [**isNull**](src/filters/isNull/index.ts) — returns true if value is null. [(tests)](src/filters/isNull/index.test.ts)
  - [**isBoolean**](src/filters/isBoolean/index.ts) — returns true if value is a boolean. [(tests)](src/filters/isBoolean/index.test.ts)
  - [**isNumber**](src/filters/isNumber/index.ts) — returns true if value is a number. [(tests)](src/filters/isNumber/index.test.ts)
    - TODO: make options to disallow NaN and infinity.
  - [**isString**](src/filters/isString/index.ts) — returns true if value is a string. [(tests)](src/filters/isString/index.test.ts)
  - [**isPrimitive**](src/filters/isPrimitive/index.ts) — returns true if value is a primitive, i.e. undefined, null, boolean, number or string. [(tests)](src/filters/isPrimitive/index.test.ts)
  - [**isArray**](src/filters/isArray/index.ts) — returns true if value is array of any items. [(tests)](src/filters/isArray/index.test.ts)
  - [**isObject**](src/filters/isObject/index.ts) — returns true if value is an object but not null nor array. [(tests)](src/filters/isObject/index.test.ts)
    - TODO: Add options to pass nulls and arrays
  - [**isEmpty**](src/filters/isEmpty/index.ts) — returns true if value is empty, i.e. undefined, null, empty string, empty array or empty object (i.e. object without own properties)
    - TODO: allow to pass custom empty values
    - TODO: add option to count prototype properties too
  - [**allOf**](src/filters/allOf/index.ts) — returns true if all values in array meets filter condition. [(tests)](src/filters/allOf/index.test.ts)
  - [**oneOf**](src/filters/oneOf/index.ts) — returns true if at least one of values in array meets filter condition. [(tests)](src/filters/oneOf/index.test.ts)
  - TODO: **equally** — returns true if value meets all filters conditions
  - TODO: **neither** — returns true if value meets at least one of filters conditions

### Mappers

  - [**toBoolean**](src/mappers/toBoolean/index.ts) — maps value into a boolean if possible. [(tests)](src/mappers/toBoolean/index.test.ts)
  - [**toNumber**](src/mappers/toNumber/index.ts) — maps value into a number if possible. [(tests)](src/mappers/toNumber/index.test.ts)
  - [**toString**](src/mappers/toString/index.ts) — maps value into a string. [(tests)](src/mappers/toString/index.test.ts)
  - [**filterObject**](src/mappers/filterObject/index.ts) — filters object entries by predicate like standard array's filter.
    - TODO: add option to filter prototype properties too
  - [**mapObject**](src/mappers/mapObject/index.ts) — maps object entries by callback function like standard array's map.
    - TODO: add option to filter prototype properties too
  - [**repeat**](src/mappers/repeat/index.ts) — repeats some action for a specified number of times. [(tests)](src/mappers/repeat/index.test.ts)
    - TODO: add option to pass iterator

### Random

  - [**bool**](src/random/bool/index.ts) — returns random boolean value.
  - [**int**](src/random/int/index.ts) — returns random integer number value.
  - [**float**](src/random/float/index.ts) — returns random float number value.
  - [**char**](src/random/char/index.ts) — returns random character (string with only one item).
  - [**str**](src/random/str/index.ts) — returns random string value.
  - [**pick**](src/random/pick/index.ts) — returns random value from an array of one or more items.
  - [**shuffle**](src/random/shuffle/index.ts) — shuffles array in random order.
  - TODO: **weighted** — returns random value from an array of values and weights.

### TODO: Seedable Random

Just like random utilities above, but with seeding support.

### Timestamps

  - [**ts**](src/timestamps/ts/index.ts) — returns a Unix timestamp for current or specified date.
