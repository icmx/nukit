# nukit

Tiny collection of essential JavaScript utilities.

## Usage

Install:

```
npm i nukit
```

Import:

```ts
import { isNumber, oneOf, pick } from 'nukit';

if (oneOf([null, 'foo', 42], isNumber)) {
  console.log('There is a number!');
}

const value = pick(['apple', 'banana', 'carrot']);
```

## Why?

  - TypeScript: nice types support
  - Small & Simple: 33 (+10) essential functions in about 5 kilobytes of compiled code
  - Modern: doesn't rewrites ESNext features that already exists

## Contents

### Filters

  - [**isUndefined**](src/filters/isUndefined/index.ts) — returns true if value is undefined
  - [**isNull**](src/filters/isNull/index.ts) — returns true if value is null
  - [**isBoolean**](src/filters/isBoolean/index.ts) — returns true if value is a boolean
  - [**isNumber**](src/filters/isNumber/index.ts) — returns true if value is a number
  - [**isString**](src/filters/isString/index.ts) — returns true if value is a string
  - [**isPrimitive**](src/filters/isPrimitive/index.ts) — returns true if value is a primitive, i.e. undefined, null, boolean, number or string
  - [**isArray**](src/filters/isArray/index.ts) — returns true if value is array of any items
  - [**isObject**](src/filters/isObject/index.ts) — returns true if value is an object but not null nor array
  - [**isEmpty**](src/filters/isEmpty/index.ts) — returns true if value is empty, i.e. undefined, null, empty string, empty array or empty object (i.e. object without own properties)
  - [**allOf**](src/filters/allOf/index.ts) — returns true if all values in array meets filter condition
  - [**oneOf**](src/filters/oneOf/index.ts) — returns true if at least one of values in array meets filter condition
  - [**equally**](src/filters/equally/index.ts) — returns true if all of predicates are true
    - [**and**](src/filters/and/index.ts) — alias
  - [**neither**](src/filters/neither/index.ts) — returns true if at least one of predicates is true
    - [**or**](src/filters/or/index.ts) — alias
  - [**unique**](src/filters/unique/index.ts) — returns an array without duplicates
    - See also: **uniquePredicate**, a predicate version for array chaining.

### Mappers

  - [**toBoolean**](src/mappers/toBoolean/index.ts) — maps value into a boolean if possible
  - [**toNumber**](src/mappers/toNumber/index.ts) — maps value into a number if possible
  - [**toString**](src/mappers/toString/index.ts) — maps value into a string
  - [**filterObject**](src/mappers/filterObject/index.ts) — filters object entries by predicate like standard array's filter
  - [**mapObject**](src/mappers/mapObject/index.ts) — maps object entries by callback function like standard array's map
  - [**repeat**](src/mappers/repeat/index.ts) — repeats some action for a specified number of times

### Random

  - [**bool**](src/random/bool/index.ts) — returns random boolean value
  - [**int**](src/random/int/index.ts) — returns random integer number value
  - [**float**](src/random/float/index.ts) — returns random float number value
  - [**char**](src/random/char/index.ts) — returns random character value
  - [**str**](src/random/str/index.ts) — returns random string value
  - [**pick**](src/random/pick/index.ts) — returns random value from an array of one or more items
  - [**shuffle**](src/random/shuffle/index.ts) — returns shuffled copy of array
  - [**weighted**](src/random/weghted/index.ts) — returns weighted random value from an array of values and weights

### Seedable Random

Just like random utilities above, but with seeding support.

  - [**seedBool**](src/seedable/seedBool/index.ts) — creates seeded version of bool function
  - [**seedInt**](src/seedable/seedInt/index.ts) — creates seeded version of char function
  - [**seedFloat**](src/seedable/seedFloat/index.ts) — creates seeded version of float function
  - [**seedChar**](src/seedable/seedChar/index.ts) — creates seeded version of char function
  - [**seedStr**](src/seedable/seedStr/index.ts) — creates seeded version of str function
  - [**seedPick**](src/seedable/seedPick/index.ts) — creates seeded version of pick function
  - [**seedShuffle**](src/seedable/seedShuffle/index.ts) — creates seeded version of shuffle function
  - [**weighted**](src/seedable/seedWeighted/index.ts) — creates seeded version of weighted function

### Date

  - [**ts**](src/date/ts/index.ts) — returns a Unix numeric timestamp for current or specified date
  - [**isValidDate**](src/date/isValidDate/index.ts) — returns true if value is valid Date or suits for Date creation
  - [**diffDate**](src/date/diffDate/index.ts) — returns total amount of time between two dates (years, months, days, hours etc).

### Error

  - [**throwOn**](src/error/throwOn/index.ts) — throws an error if predicate returns true

### RegExp

  - [**re**](src/regexp/re/index.ts) — builds a RegExp from a template string

## Development

```sh
# run tests
npm run test

# build a package
npm run build

# publish a release (requires np: npm install --global np)
np
```
