export type Dict<T> = {
	[key: string]: T | undefined ;
};

// Array.prototype.map, but for Dict
export function mapDict<T, S>(
	dict: Dict<T>,
	fn: (arg: T, idx: number) => S
): Dict<S> {
	const out: Dict<S> = {}

	Object.keys(dict).forEach((dkey, idx) => {
		const item = dict[dkey]
		if (typeof item  !== 'undefined') {
			out[dkey] = fn(item, idx)
		}
		
	})

	return out
}

mapDict({
	a: 'a',
	b: 'b'
}, str => ({val: str}))

// Array.prototype.reduce, but for Dict 
export function reduceDict() {} 