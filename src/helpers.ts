import { ColourSpace } from './colourspace';

// Hex To X
export const hexToRgb = (hex: string): string => new ColourSpace(hex).toRgb();
export const hexToRgba = (hex: string): string => new ColourSpace(hex).toRgba();
export const hexToHsl = (hex: string): string => new ColourSpace(hex).toHsl();
export const hexToHsla = (hex: string): string => new ColourSpace(hex).toHsla();

// RGB To X
export const rgbToHex = (rgb: string): string => new ColourSpace(rgb, 'rgb').toHex();
export const rgbToHexa = (rgb: string): string => new ColourSpace(rgb, 'rgb').toHexa();
export const rgbToHsl = (rgb: string): string => new ColourSpace(rgb, 'rgb').toHsl();
export const rgbToHsla = (rgb: string): string => new ColourSpace(rgb, 'rgb').toHsla();

// HSL To X
export const hslToHex = (hsl: string): string => new ColourSpace(hsl, 'hsl').toHex();
export const hslToHexa = (hsl: string): string => new ColourSpace(hsl, 'hsl').toHexa();
export const hslToRgb = (hsl: string): string => new ColourSpace(hsl, 'hsl').toRgb();
export const hslToRgba = (hsl: string): string => new ColourSpace(hsl, 'hsl').toRgba();
