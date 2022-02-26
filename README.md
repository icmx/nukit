# nukit

Tiny collection of essential JavaScript utilities.

## Contents

### Filters

  - [**allOf**](src/filters/allOf/index.ts) — returns true if all values in array meets filter condition.
  - [**oneOf**](src/filters/oneOf/index.ts) — returns true if at least one of values in array meets filter condition.
  - [**isUndefined**](src/filters/isUndefined/index.ts) — returns true if value is undefined.
  - [**isNull**](src/filters/isNull/index.ts) — returns true if value is null.
  - [**isBoolean**](src/filters/isBoolean/index.ts) — returns true if value is a boolean.
  - [**isNumber**](src/filters/isNumber/index.ts) — returns true if value is a number.
    - TODO: make options to disallow NaN and infinity.
  - [**isString**](src/filters/isString/index.ts) — returns true if value is a string.
  - [**isPrimitive**](src/filters/isPrimitive/index.ts) — returns true if value is a primitive, i.e. undefined, null, boolean, number or string.
  - [**isArray**](src/filters/isArray/index.ts) — returns true if value is array of any items.
  - [**isObject**](src/filters/isObject/index.ts) — returns true if value is an object but not null nor array.
    - TODO: Add options to pass nulls and arrays
  - [**isEmpty**](src/filters/isEmpty/index.ts) — returns true if value is empty, i.e. undefined, null, empty string, empty array or empty object (i.e. object without own properties)
  - TODO: **equally** — returns true if value meets all filters conditions
  - TODO: **neither** — returns true if value meets at least one of filters conditions

### Mappers

  - [**toBoolean**](src/mappers/toBoolean/index.ts) — maps value into a boolean if possible.
  - [**toNumber**](src/mappers/toNumber/index.ts) — maps value into a number if possible.
  - [**toString**](src/mappers/toString/index.ts) — maps value into a string.
  - [**filterObject**](src/mappers/filterObject/index.ts) — filters object entries by predicate like standard array's filter.
  - [**mapObject**](src/mappers/mapObject/index.ts) — maps object entries by callback function like standard array's map.
  - [**repeat**](src/mappers/repeat/index.ts) — repeats some action for a specified number of times.

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
