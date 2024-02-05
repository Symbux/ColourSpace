# ColourSpace

ColourSpace is a simple package for handling conversion between various colour formats.

## Features

- Convert between RGB, HSL, and HEX colour formats.
- Convert between alpha channel variants of the above (RGBA, HSLA, HEXA).
- Can accept wrapped and unwrapped values. e.g. `rgba(79, 147, 62, 0.5)` and `79, 147, 62, 0.5`.
- When a wrapped value is provided, the class can guess the format.

## Installation

```bash
yarn add colourspace
```

## Usage

```typescript
import { ColourSpace } from 'colourspace';

// Define colours from hex formats, including alpha channel.
const colour1 = new ColourSpace('#391bb1');
const colour2 = new ColourSpace('391bb1');
const colour3 = new ColourSpace('#391bb180');
const colour4 = new ColourSpace('391bb180');

// Define colours from rgb formats, including alpha channel and using the percentage format.
const colour5 = new ColourSpace('rgb(79, 147, 62)');
const colour6 = new ColourSpace('79, 147, 62');
const colour7 = new ColourSpace('rgba(79, 147, 62, 0.5)');
const colour8 = new ColourSpace('79, 147, 62, 0.5');
const colour9 = new ColourSpace('rgba(79 147 62 / 50%)');
const colour9 = new ColourSpace('rgba(79 147 62 / 50%)');

// Define colours from hsl formats, including alpha channel and using the percentage format.
const colour10 = new ColourSpace('hsl(79, 147, 62)');
const colour11 = new ColourSpace('79, 147, 62');
const colour12 = new ColourSpace('hsla(79, 147, 62, 0.5)');
const colour13 = new ColourSpace('79, 147, 62, 0.5');
const colour14 = new ColourSpace('hsla(79 147 62 / 50%)');
const colour15 = new ColourSpace('79 147 62 / 50%');

// Convert to other formats without wrapper.
console.log(colour1.toHex()); // 391bb1
console.log(colour1.toHexa()); // 391bb180
console.log(colour1.toRgb()); // 79, 147, 62
console.log(colour1.toRgba()); // 79, 147, 62, 0.5
console.log(colour1.toHsl()); // 108, 41%, 41%
console.log(colour1.toHsla()); // 108, 41%, 41%, 0.5

// Convert to other formats with wrapper.
console.log(colour1.toHex(true)); // #391bb1
console.log(colour1.toHexa(true)); // #391bb180
console.log(colour1.toRgb(true)); // rgb(79, 147, 62)
console.log(colour1.toRgba(true)); // rgba(79, 147, 62, 0.5)
console.log(colour1.toHsl(true)); // hsl(108, 41%, 41%)
console.log(colour1.toHsla(true)); // hsla(108, 41%, 41%, 0.5)
```
