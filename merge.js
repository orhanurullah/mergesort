const merge = (l = [], r = [], m = []) => {
    let compare = ([a], [b]) => (a ?? b+1) < (b ?? a + 1);
    let side = () => compare(l,r,) ? l:r;

    while(l.length && r.length) m.push(side().shift())
    while(r.length) m.push(r.shift())
    while(l.length) m.push(l.shift())

    return m;
}
const mergeSort = (items = []) => {
    if(items.length <= 1) {
        return items;
    }
    const middle = Math.floor(items.length/2);

    return merge(mergeSort(items.slice(0, middle)),
        mergeSort(items.slice(middle, items.length)));
}
console.log(mergeSort([16,21,11,8,12,22]));