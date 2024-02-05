import type { IColourSpaceType, IColourSpaceMap, IColourSpaceConverterMap } from './types';

export class ColourSpace {
	private colour: IColourSpaceMap;
	private mapping: IColourSpaceConverterMap = {
		hex: { from: this.fromHex, to: this.toHex },
		rgb: { from: this.fromRgb, to: this.toRgb },
		hsl: { from: this.fromHsl, to: this.toHsl },
	};

	/**
	 * Create an instance of the colour space class.
	 * @param colour The colour to convert.
	 * @param type [Optional] The format of the input colour, will be guessed if not provided.
	 */
	public constructor(colour: string, type?: IColourSpaceType) {
		const vtype = type ?? this.guessFormat(colour);
		const map = this.mapping[vtype];
		if (!map) throw new Error('Invalid type passed to constructor.');
		this.colour = map.from(colour);
	}

	/**
	 * Will convert a HEX / HEXA string to the internal
	 * object structure.
	 * @param hex The HEX/HEXA string to convert.
	 * @returns IColourSpaceMap
	 */
	public fromHex(hex: string): IColourSpaceMap {
		hex = hex.startsWith('#') ? hex : `#${hex}`;
		const hexa = hex.length === 9;
		const alpha = hexa ? parseFloat((parseInt(hex.slice(7, 9), 16) / 255).toPrecision(2)) : 1;
		const red = parseInt(hex.slice(1, 3), 16);
		const green = parseInt(hex.slice(3, 5), 16);
		const blue = parseInt(hex.slice(5, 7), 16);
		return { red, green, blue, alpha };
	}

	/**
	 * Will convert an RGB / RGBA string to the internal
	 * object structure.
	 * @param rgb The RGB/RGBA string to convert.
	 * @returns IColourSpaceMap
	 */
	public fromRgb(rgb: string) {
		let [red, green, blue, alpha] = rgb.split(rgb.includes(',') ? ',' : ' ')
			.filter(v => v !== '/')
			.map(v => v.replace(/[^0-9.]/g, ''))
			.map(v => v.includes('.') ? parseFloat(v) : parseInt(v));

		if (rgb.includes('/')) alpha = alpha / 100;
		return { red, green, blue, alpha: alpha ?? 1 };
	}

	/**
	 * Will convert an HSL / HSLA string to the internal
	 * object structure.
	 * @param hsl The HSL/HSLA string to convert.
	 * @returns ICoulourSpaceMap
	 */
	public fromHsl(hsl: string) {
		let [hue, saturation, lightness, alpha] = hsl.split(hsl.includes(',') ? ',' : ' ')
			.filter(v => v !== '/')
			.map(v => v.replace(/[^0-9.]/g, ''))
			.map(v => v.includes('.') ? parseFloat(v) : parseInt(v));

		if (hsl.includes('/')) alpha = alpha / 100;
		saturation /= 100;
		lightness /= 100;

		const k = (n: number) => (n + hue / 30) % 12;
		const a = saturation * Math.min(lightness, 1 - lightness);
		const f = (n: number) => lightness - a * Math.max(-1, Math.min(k(n) - 3, Math.min(9 - k(n), 1)));

		return {
			red: Math.round(255 * f(0)),
			green: Math.round(255 * f(8)),
			blue: Math.round(255 * f(4)),
			alpha: alpha ?? 1,
		};
	}

	/**
	 * Will convert the internal object structure to an HEX string.
	 * @param unwrap Whether to unwrap the value.
	 * @returns string
	 */
	public toHex(unwrap = false) {
		const { red, green, blue } = this.colour;
		const hex = `#${red.toString(16)}${green.toString(16)}${blue.toString(16)}`;
		return unwrap ? hex.slice(1) : hex;
	}

	/**
	 * Will convert the internal object structure to an HEXA string.
	 * @param unwrap Whether to unwrap the value.
	 * @returns string
	 */
	public toHexa(unwrap = false) {
		const { red, green, blue, alpha } = this.colour;
		const hex = `#${red.toString(16)}${green.toString(16)}${blue.toString(16)}${Math.round(alpha * 255).toString(16)}`;
		return unwrap ? hex.slice(1) : hex;
	}

	/**
	 * Will convert the internal object structure to an RGB string.
	 * @param unwrap Whether to unwrap the value.
	 * @returns string
	 */
	public toRgb(unwrap = false) {
		const { red, green, blue } = this.colour;
		const rgb = `${red}, ${green}, ${blue}`;
		return unwrap ? rgb : `rgb(${rgb})`;
	}

	/**
	 * Will convert the internal object structure to an RGBA string.
	 * @param unwrap Whether to unwrap the value.
	 * @returns string
	 */
	public toRgba(unwrap = false) {
		const { red, green, blue, alpha } = this.colour;
		const rgba = `${red}, ${green}, ${blue}, ${alpha}`;
		return unwrap ? rgba : `rgba(${rgba})`;
	}

	/**
	 * Will convert the internal object structure to an HSL string.
	 * @param unwrap Whether to unwrap the value.
	 * @returns string
	 */
	public toHsl(unwrap = false) {
		let { red, green, blue } = this.colour;
		red /= 255;
		green /= 255;
		blue /= 255;

		let cmin = Math.min(red, green, blue),
			cmax = Math.max(red, green, blue),
			delta = cmax - cmin,
			hue = 0,
			saturation = 0,
			lightness = 0;

		if (delta == 0) hue = 0;
		else if (cmax == red) hue = ((green - blue) / delta) % 6;
		else if (cmax == green) hue = (blue - red) / delta + 2;
		else hue = (red - green) / delta + 4;
		hue = Math.round(hue * 60);
		if (hue < 0) hue += 360;
		lightness = (cmax + cmin) / 2;

		saturation = delta == 0 ? 0 : delta / (1 - Math.abs(2 * lightness - 1));
		saturation = +(saturation * 100).toFixed(1);
		lightness = +(lightness * 100).toFixed(1);

		const hsl = `${Math.round(hue)}, ${Math.round(saturation)}%, ${Math.round(lightness)}%`;
		return unwrap ? hsl : `hsl(${hsl})`;
	}

	/**
	 * Will convert the internal object structure to an HSLA string.
	 * @param unwrap Whether to unwrap the value.
	 * @returns string
	 */
	public toHsla(unwrap = false) {
		const { alpha } = this.colour;
		const hsl = this.toHsl(true);
		const hsla = `${hsl}, ${alpha}`;
		return unwrap ? hsla : `hsla(${hsla})`;
	}

	/**
	 * Simply returns the internal object structure.
	 * @returns IColourSpaceMap
	 */
	public getRaw() {
		return this.colour;
	}

	/**
	 * Will guess the format of the colour string using the
	 * leading definition.
	 * @param value The value to guess the format of.
	 * @returns ICoulourSpaceType
	 */
	private guessFormat(value: string) {
		if (value.startsWith('#')) return 'hex';
		if (value.startsWith('rgb')) return 'rgb';
		if (value.startsWith('hsl')) return 'hsl';
		throw new Error('Unable to guess colour format, please define it manually.');
	}
}
