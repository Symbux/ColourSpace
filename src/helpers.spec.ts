import { describe, test, expect } from 'vitest';
import * as helpers from './index';
import './types';

/*
	Tested Colour:
	Alpha: 0.5 / 50%
	Hex: #4F933E
	RGB: 79, 147, 62
	HSL: 108, 41%, 41%
*/

describe('Validate hexToX functions.', () => {
	test('should convert HEX to RGB.', () => {
		expect(helpers.hexToRgb('#4F933E')).toBe('rgb(79, 147, 62)');
	});

	test('should convert HEX to RGBA.', () => {
		expect(helpers.hexToRgba('#4F933E80')).toBe('rgba(79, 147, 62, 0.5)');
	});

	test('should convert HEX to HSL.', () => {
		expect(helpers.hexToHsl('#4F933E')).toBe('hsl(108, 41%, 41%)');
	});

	test('should convert HEX to HSLA.', () => {
		expect(helpers.hexToHsla('#4F933E80')).toBe('hsla(108, 41%, 41%, 0.5)');
	});
});

describe('Validate rgbToX functions.', () => {
	test('should convert RGB to HEX.', () => {
		expect(helpers.rgbToHex('rgb(79, 147, 62)').toUpperCase()).toBe('#4F933E');
	});

	test('should convert RGB to HEX.', () => {
		expect(helpers.rgbToHexa('rgba(79, 147, 62, 0.5)').toUpperCase()).toBe('#4F933E80');
	});

	test('should convert RGB to HSL.', () => {
		expect(helpers.rgbToHsl('rgb(79, 147, 62)')).toBe('hsl(108, 41%, 41%)');
	});

	test('should convert RGB to HSLA.', () => {
		expect(helpers.rgbToHsla('rgba(79, 147, 62, 0.5)')).toBe('hsla(108, 41%, 41%, 0.5)');
	});
});

describe('Validate hslToX functions.', () => {
	test('should convert HSL to HEX.', () => {
		expect(helpers.hslToHex('hsl(108, 41%, 41%)').toUpperCase()).toBe('#4F933E');
	});

	test('should convert HSL to HEXA.', () => {
		expect(helpers.hslToHexa('hsla(108, 41%, 41%, 0.5)').toUpperCase()).toBe('#4F933E80');
	});

	test('should convert HSL to RGB.', () => {
		expect(helpers.hslToRgb('hsl(108, 41%, 41%)')).toBe('rgb(79, 147, 62)');
	});

	test('should convert HSL to RGBA.', () => {
		expect(helpers.hslToRgba('hsla(108, 41%, 41%, 0.5)')).toBe('rgba(79, 147, 62, 0.5)');
	});
});
