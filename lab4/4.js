/**
 * Напишите функцию get1DArray(arr),
 * на вход подается массив бесконечной вложенности массивов arr
 * необходимо вернуть одномерный массив
 * Примеры:
 * [1, 2, 'aa', [1, 2, 3],
    [
        [1, 2],
        [1, 2]
    ],
    [
        [
            [1, 2, [1, 2, [2]]], 3
        ], 4
    ]
]; ---> [1, 2, "aa", 1, 2, 3, 1, 2, 1, 2, 1, 2, 1, 2, 2, 3, 4]
*/

function get1DArray(arr) {
    //code here
    let newArr = [];
    (function flat(arr) {
        arr.forEach(function(element) {
            if (Array.isArray(element)) {
                flat(element);
            } else {
                newArr.push(element);
            }
        });
    })(arr);
    return newArr;
}

module.exports = get1DArray;
