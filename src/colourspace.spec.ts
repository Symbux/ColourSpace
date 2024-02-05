import { describe, test, expect } from 'vitest';
import { ColourSpace } from './colourspace';

// Define the standard output.
const expected = '79,147,62,1';
const expectedAlpha = '79,147,62,0.5';

/*
	Tested Colour:
	Alpha: 0.5 / 50%
	Hex: #4F933E
	RGB: 79, 147, 62
	HSL: 108, 41%, 41%
*/

describe('ColourSpace input format tests.', () => {
	test('should guess the HEX format.', () => {
		const instance = new ColourSpace('#4F933E');
		expect(Object.values(instance.getRaw()).join(',')).toBe(expected);
	});

	test('should guess the RGB format.', () => {
		const instance = new ColourSpace('rgb(79, 147, 62)');
		expect(Object.values(instance.getRaw()).join(',')).toBe(expected);
	});

	test('should guess the HSL format.', () => {
		const instance = new ColourSpace('hsl(108, 41%, 41%)');
		expect(Object.values(instance.getRaw()).join(',')).toBe(expected);
	});

	test('should guess the HEXA format.', () => {
		const instance = new ColourSpace('#4F933E80');
		expect(Object.values(instance.getRaw()).join(',')).toBe(expectedAlpha);
	});

	test('should guess the RGBA format.', () => {
		const instance = new ColourSpace('rgba(79, 147, 62, 0.5)');
		expect(Object.values(instance.getRaw()).join(',')).toBe(expectedAlpha);
	});

	test('should guess the HSLA format.', () => {
		const instance = new ColourSpace('hsla(108deg, 41%, 41%, 0.5)');
		expect(Object.values(instance.getRaw()).join(',')).toBe(expectedAlpha);
	});

	test('should guess the RGB format with the / 50% alpha format.', () => {
		const instance = new ColourSpace('rgba(79 147 62 / 50%)');
		expect(Object.values(instance.getRaw()).join(',')).toBe(expectedAlpha);
	});

	test('should guess the HSL format with the / 50% alpha format.', () => {
		const instance = new ColourSpace('hsla(108deg 41% 41% / 50%)');
		expect(Object.values(instance.getRaw()).join(',')).toBe(expectedAlpha);
	});
});

describe('ColourSpace input tests.', () => {
	test('should accept non-wrapped HEX/HEXA.', () => {
		const instance1 = new ColourSpace('4F933E', 'hex');
		const instance2 = new ColourSpace('4F933E80', 'hex');
		expect(Object.values(instance1.getRaw()).join(',')).toBe(expected);
		expect(Object.values(instance2.getRaw()).join(',')).toBe(expectedAlpha);
	});

	test('should accept wrapped HEX/HEXA.', () => {
		const instance1 = new ColourSpace('#4F933E', 'hex');
		const instance2 = new ColourSpace('#4F933E80', 'hex');
		expect(Object.values(instance1.getRaw()).join(',')).toBe(expected);
		expect(Object.values(instance2.getRaw()).join(',')).toBe(expectedAlpha);
	});

	test('should accept non-wrapped RGB/RGBA.', () => {
		const instance1 = new ColourSpace('79, 147, 62', 'rgb');
		const instance2 = new ColourSpace('79, 147, 62, 0.5', 'rgb');
		expect(Object.values(instance1.getRaw()).join(',')).toBe(expected);
		expect(Object.values(instance2.getRaw()).join(',')).toBe(expectedAlpha);
	});

	test('should accept wrapped RGB/RGBA.', () => {
		const instance1 = new ColourSpace('rgb(79, 147, 62)', 'rgb');
		const instance2 = new ColourSpace('rgba(79, 147, 62, 0.5)', 'rgb');
		expect(Object.values(instance1.getRaw()).join(',')).toBe(expected);
		expect(Object.values(instance2.getRaw()).join(',')).toBe(expectedAlpha);
	});

	test('should accept non-wrapped HSL/HSLA.', () => {
		const instance1 = new ColourSpace('108 41% 41%', 'hsl');
		const instance2 = new ColourSpace('108 41% 41% 0.5', 'hsl');
		expect(Object.values(instance1.getRaw()).join(',')).toBe(expected);
		expect(Object.values(instance2.getRaw()).join(',')).toBe(expectedAlpha);
	});

	test('should accept wrapped HSL/HSLA.', () => {
		const instance1 = new ColourSpace('hsl(108 41% 41%)', 'hsl');
		const instance2 = new ColourSpace('hsla(108, 41%, 41%, 0.5)', 'hsl');
		expect(Object.values(instance1.getRaw()).join(',')).toBe(expected);
		expect(Object.values(instance2.getRaw()).join(',')).toBe(expectedAlpha);
	});
});

describe('ColourSpace output tests.', () => {
	test('should output unwrapped HEX/HEXA.', () => {
		const instance1 = new ColourSpace('#4F933E');
		const instance2 = new ColourSpace('#4F933E80');
		expect(instance1.toHex(true).toUpperCase()).toBe('4F933E');
		expect(instance2.toHexa(true).toUpperCase()).toBe('4F933E80');
	});

	test('should output wrapped HEX/HEXA.', () => {
		const instance1 = new ColourSpace('#4F933E');
		const instance2 = new ColourSpace('#4F933E80');
		expect(instance1.toHex().toUpperCase()).toBe('#4F933E');
		expect(instance2.toHexa().toUpperCase()).toBe('#4F933E80');
	});

	test('should output unwrapped RGB/RGBA.', () => {
		const instance1 = new ColourSpace('#4F933E');
		const instance2 = new ColourSpace('#4F933E80');
		expect(instance1.toRgb(true)).toBe('79, 147, 62');
		expect(instance2.toRgba(true)).toBe('79, 147, 62, 0.5');
	});

	test('should output wrapped RGB/RGBA.', () => {
		const instance1 = new ColourSpace('#4F933E');
		const instance2 = new ColourSpace('#4F933E80');
		expect(instance1.toRgb()).toBe('rgb(79, 147, 62)');
		expect(instance2.toRgba()).toBe('rgba(79, 147, 62, 0.5)');
	});

	test('should output unwrapped HSL/HSLA.', () => {
		const instance1 = new ColourSpace('#4F933E');
		const instance2 = new ColourSpace('#4F933E80');
		expect(instance1.toHsl(true)).toBe('108, 41%, 41%');
		expect(instance2.toHsla(true)).toBe('108, 41%, 41%, 0.5');
	});

	test('should output wrapped HSL/HSLA.', () => {
		const instance1 = new ColourSpace('#4F933E');
		const instance2 = new ColourSpace('#4F933E80');
		expect(instance1.toHsl()).toBe('hsl(108, 41%, 41%)');
		expect(instance2.toHsla()).toBe('hsla(108, 41%, 41%, 0.5)');
	});
});
