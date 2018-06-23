/**
 * Maps the array with the mapping function and returns a flattened array. If mapping function 
 * is not supplied then returns a flattened array.
 * @param arr Is an array to be mapped and flattened
 * @param mappingFunction is a function to map each element of the arr with
 * @returns An array that has been flattened and mapped.
 */
module.exports = (arr, mappingFunction) => {
    return flatten(arr, mappingFunction);
};

const flatten = (array, mappingFunc) => {
    const a = [];

    const reducingFunction = (prev, curr) => {
        if (mappingFunc !== undefined && typeof mappingFunc === function) {
            curr = mappingFunc(curr);
        }

        const a = isMultiDimensional(curr) ?
            flatten(curr) :
            curr;

        return prev.concat(a);
    }

    return array.reduce(reducingFunction, []);
}

const isMultiDimensional = (arr) => {
    if (Array.isArray(arr)) {
        return arr.map((val) => val !== undefined && val.constructor === Array)
            .reduce((p, c) => p || c);
    } else {
        return false;
    }
};