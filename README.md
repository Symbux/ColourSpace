# ColourSpace

ColourSpace is a simple package for handling conversion between various colour formats.

## Features

- Convert between RGB, HSL, and HEX colour formats.
- Convert between alpha channel variants of the above (RGBA, HSLA, HEXA).
- Can accept wrapped and unwrapped values. e.g. `rgba(79, 147, 62, 0.5)` and `79, 147, 62, 0.5`.
- When a wrapped value is provided, the class can guess the format.

> Note: When the class attempts to guess the colour format it looks specifically for the use of `#`, `rgb`, and `hsl` at the start, it can't guess unwrapped values.

## Installation

```bash
yarn add colourspace
```

## Usage

```typescript
import ColourSpace from 'colourspace';

// Define colours from hex formats, including alpha channel.
const colour1 = new ColourSpace('#391bb1');
const colour2 = new ColourSpace('391bb1', 'hex');
const colour3 = new ColourSpace('#391bb180');
const colour4 = new ColourSpace('391bb180', 'hex');

// Define colours from rgb formats, including alpha channel and using the percentage format.
const colour5 = new ColourSpace('rgb(79, 147, 62)');
const colour6 = new ColourSpace('79, 147, 62', 'rgb');
const colour7 = new ColourSpace('rgba(79, 147, 62, 0.5)');
const colour8 = new ColourSpace('79, 147, 62, 0.5', 'rgb');
const colour9 = new ColourSpace('rgba(79 147 62 / 50%)');

// Define colours from hsl formats, including alpha channel and using the percentage format.
const colour10 = new ColourSpace('hsl(79, 147, 62)');
const colour11 = new ColourSpace('79, 147, 62');
const colour12 = new ColourSpace('hsla(79, 147, 62, 0.5)');
const colour13 = new ColourSpace('79, 147, 62, 0.5');
const colour14 = new ColourSpace('hsla(79 147 62 / 50%)');
const colour15 = new ColourSpace('79 147 62 / 50%');

// Convert to other formats.
console.log(colour1.toHex()); // #391bb1
console.log(colour1.toHexa()); // #391bb180
console.log(colour1.toRgb()); // rgb(79, 147, 62)
console.log(colour1.toRgba()); // rgba(79, 147, 62, 0.5)
console.log(colour1.toHsl()); // hsl(108, 41%, 41%)
console.log(colour1.toHsla()); // hsla(108, 41%, 41%, 0.5)

// Convert to other formats without wrapper.
console.log(colour1.toHex(true)); // 391bb1
console.log(colour1.toHexa(true)); // 391bb180
console.log(colour1.toRgb(true)); // 79, 147, 62
console.log(colour1.toRgba(true)); // 79, 147, 62, 0.5
console.log(colour1.toHsl(true)); // 108, 41%, 41%
console.log(colour1.toHsla(true)); // 108, 41%, 41%, 0.5
```

## Contrast

When you have a ColourSpace instance, you can use the `toContrast` method to return a new instance of the contrast for the current colour (for text display purposes) and then you can convert that to whatever format you need.

```typescript
import ColourSpace from 'colourspace';

const someColour = new ColourSpace('#391bb1');
console.log(someColour.toContrast().toHex()); // #FFFFFF
```

## Functions

There are some helpers for simpler access for conversions, these can accept wrapped or unwrapped values, as they have a defined input format, but they will always return wrapped values.

All of these functions have an `unwrap` parameter (default `false`) which will return the unwrapped value.

```typescript
import {
	hexToRgb, hexToRgba, hexToHsl, hexToHsla, rgbToHex, rgbToHexa, rgbToHsl,
	rgbToHsla, hslToHex, hslToHexa, hslToRgb, hslToRgba
} from './colourspace';

// Hex To X
hexToRgb('#FFFFFF') // rgb(255, 255, 255)
hexToRgba('#FFFFFF'); // rgba(255, 255, 255, 1)
hexToHsl('#FFFFFF'); // hsl(0, 0%, 100%)
hexToHsla('#FFFFFF'); // hsla(0, 0%, 100%, 1)

// RGB To X
rgbToHex('rgb(255, 255, 255)'); // #FFFFFF
rgbToHexa('rgb(255, 255, 255)'); // #FFFFFF
rgbToHsl('rgb(255, 255, 255)'); // hsl(0, 0%, 100%)
rgbToHsla('rgb(255, 255, 255)'); // hsla(0, 0%, 100%, 1)

// HSL To X
hslToHex('hsl(0, 0%, 100%)'); // #FFFFFF
hslToHexa('hsl(0, 0%, 100%)'); // #FFFFFF
hslToRgb('hsl(0, 0%, 100%)'); // rgb(255, 255, 255)
hslToRgba('hsl(0, 0%, 100%)'); // rgba(255, 255, 255, 1)
```

## Contributions

Contributions and feedback are always welcome, I created this package purely to solve my immediate issue, but if it can help others then that's great, either open an issue or a PR with your changes.

## Credits

I used a variety of online sources (Stack Overflow, 30SecondsOfCode, Codepen authors and more) to collect the formulas for the conversions.
This package is mostly stitching together and tweaking them to fix some edge cases I found and to make them as flexible as possible.
