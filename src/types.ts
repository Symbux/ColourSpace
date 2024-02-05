export type IColourSpaceType = 'hex' | 'rgb' | 'hsl';
export type IColourSpaceConverterGeneric = (...args: any[]) => any;

export type IColourSpaceConverterMap = Record<IColourSpaceType, {
	from: IColourSpaceConverterGeneric,
	to: IColourSpaceConverterGeneric,
}>;

export type IColourSpaceMap = {
	red: number,
	green: number,
	blue: number,
	alpha: number,
};
