const flatMap = require('./index.js');

describe('index.js', () => {

    let inputArr = [1, 2, 3, 4, 5, 6, 7];

    test('returns 1d array when supplied with 1d array and no mapping function', () => {
        let result = flatMap(inputArr);

        expect(result).toEqual(inputArr);
    });

    test('Returns 1d array when mapping function returns single values', () => {
        let mappingFunction = (val) => 2 * val;

        let result = flatMap(inputArr, mappingFunction);

        expect(result).toEqual([2, 4, 6, 8, 10, 12, 14]);
    });

    test('Returns 1d array when supplied with a 2d array and no mapping function', () => {
        let input2DArray = [
            [1, 2, 3],
            [4, 5],
            [6],
            [7]
        ];

        let result = flatMap(input2DArray)

        expect(result).toEqual(inputArr);
    });


    test('Returns 1d array when supplied with mapping function returns 2d array, input is 1d', () => {
        let mappingFunction = (val) => [val, val];

        let result = flatMap(inputArr, mappingFunction)

        expect(result).toEqual([1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7])
    });


    test('Returns 1d array when mapping function supplied with 3d array', () => {
        let input3DArray = [
            [
                [1],
                [2, 3]
            ],
            [4],
            [
                [5],
                [6],
                [7]
            ]
        ];

        let result = flatMap(input3DArray)

        expect(result).toEqual(inputArr);
    });


    test('Returns 1d array when mapping function supplied with an xd array', () => {
        let inputXDArray = [1, [2],
            [
                [3]
            ],
            [
                [
                    [4]
                ]
            ],
            [
                [
                    [
                        [5, 6, [7]]
                    ]
                ]
            ]
        ];

        let result = flatMap(inputXDArray);

        expect(result).toEqual(inputArr);
    });
});