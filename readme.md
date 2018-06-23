# flatmap
Flatmaps an array. Array.prototype.flatmap is still experimental feature and will take time to be used globally, this bridges that gap.

## Usage
```flatmap($Arr, $MapFunc <optional>)```
```$Arr``` is a Javascript array to be flattened and mapped
```$MapFunc``` is a function to apply to the values of the array supplied

It will completely flatten the $Arr variable.

## Example
```javascript
const flatmap = require('flatmap');

let array = [1, 2, 3, 4, 5];

let mappingFunction = (v) => [v, v];

let resultMapped = array.map(mappingFunction); // resultMapped = [[1, 1], [2, 2], [3, 3], [4, 4], [5, 5]]

let result = flatmap(array, mappingFunction); // result == [1, 1, 2, 2, 3, 3, 4, 4, 5, 5]
```

Just supplying flatmap with an array will flatten it. It handles arrays of multiple dimensions.