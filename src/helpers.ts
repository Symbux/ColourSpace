import { ColourSpace } from './colourspace';

/**
 * Converts a HEX/HEXA string to an RGB string.
 * @param hex The HEX/HEXA string.
 * @param unwrap Whether to unwrap the value.
 * @returns string
 */
export const hexToRgb = (hex: string, unwrap = false): string => new ColourSpace(hex).toRgb(unwrap);

/**
 * Converts a HEX/HEXA string to an RGBA string.
 * @param hex The HEX/HEXA string.
 * @param unwrap Whether to unwrap the value.
 * @returns string
 */
export const hexToRgba = (hex: string, unwrap = false): string => new ColourSpace(hex).toRgba(unwrap);

/**
 * Converts a HEX/HEXA string to an HSL string.
 * @param hex The HEX/HEXA string.
 * @param unwrap Whether to unwrap the value.
 * @returns string
 */
export const hexToHsl = (hex: string, unwrap = false): string => new ColourSpace(hex).toHsl(unwrap);

/**
 * Converts a HEX/HEXA string to an HSLA string.
 * @param hex The HEX/HEXA string.
 * @param unwrap Whether to unwrap the value.
 * @returns string
 */
export const hexToHsla = (hex: string, unwrap = false): string => new ColourSpace(hex).toHsla(unwrap);

/**
 * Converts a RGB/RGBA string to an HEX string.
 * @param hex The RGB/RGBA string.
 * @param unwrap Whether to unwrap the value.
 * @returns string
 */
export const rgbToHex = (rgb: string, unwrap = false): string => new ColourSpace(rgb, 'rgb').toHex(unwrap);

/**
 * Converts a RGB/RGBA string to an HEXA string.
 * @param hex The RGB/RGBA string.
 * @param unwrap Whether to unwrap the value.
 * @returns string
 */
export const rgbToHexa = (rgb: string, unwrap = false): string => new ColourSpace(rgb, 'rgb').toHexa(unwrap);

/**
 * Converts a RGB/RGBA string to an HSL string.
 * @param hex The RGB/RGBA string.
 * @param unwrap Whether to unwrap the value.
 * @returns string
 */
export const rgbToHsl = (rgb: string, unwrap = false): string => new ColourSpace(rgb, 'rgb').toHsl(unwrap);

/**
 * Converts a RGB/RGBA string to an HSLA string.
 * @param hex The RGB/RGBA string.
 * @param unwrap Whether to unwrap the value.
 * @returns string
 */
export const rgbToHsla = (rgb: string, unwrap = false): string => new ColourSpace(rgb, 'rgb').toHsla(unwrap);

/**
 * Converts a HSL/HSLA string to an HEX string.
 * @param hex The HSL/HSLA string.
 * @param unwrap Whether to unwrap the value.
 * @returns string
 */
export const hslToHex = (hsl: string, unwrap = false): string => new ColourSpace(hsl, 'hsl').toHex(unwrap);

/**
 * Converts a HSL/HSLA string to an HEXA string.
 * @param hex The HSL/HSLA string.
 * @param unwrap Whether to unwrap the value.
 * @returns string
 */
export const hslToHexa = (hsl: string, unwrap = false): string => new ColourSpace(hsl, 'hsl').toHexa(unwrap);

/**
 * Converts a HSL/HSLA string to an RGB string.
 * @param hex The HSL/HSLA string.
 * @param unwrap Whether to unwrap the value.
 * @returns string
 */
export const hslToRgb = (hsl: string, unwrap = false): string => new ColourSpace(hsl, 'hsl').toRgb(unwrap);

/**
 * Converts a HSL/HSLA string to an RGBA string.
 * @param hex The HSL/HSLA string.
 * @param unwrap Whether to unwrap the value.
 * @returns string
 */
export const hslToRgba = (hsl: string, unwrap = false): string => new ColourSpace(hsl, 'hsl').toRgba(unwrap);
