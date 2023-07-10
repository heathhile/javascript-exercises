const removeFromArray = function (array, ...args) {

    let array2 = [];
    array.forEach(element => {
        if (!args.includes(element)) {
            array2.push(element);
        }
    });

    return array2;
}
// Do not edit below this line
module.exports = removeFromArray;
