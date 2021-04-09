export const moveItem = <TItem>(array: TItem[], from: number, to: number) => {
    const item = array[from];
    return insertItemAtIndex(removeItemAtIndex(array, from), item, to);
};

export function removeItemAtIndex<TItem>(array: TItem[], from: number) {
    return [...array.slice(0, from), ...array.slice(from, array.length)]
};

export function insertItemAtIndex<TItem>(array: TItem[], item : TItem, to: number) {
    return [...array.slice(0,to), item, ...array.slice(to, array.length)]
};

