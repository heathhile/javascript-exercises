
function sumAll(start, end) {
    let myArray = [];
    let total = 0
    if (!Number.isInteger(start) || !Number.isInteger(end) || start < 0 || end < 0) {
        return 'ERROR'
    }
    if (start > end) {
        const temp = start;
        start = end;
        end = temp;
    }

    for (let i = start; i <= end; i++){
        myArray.push(i);
    }

    for (let i in myArray) {
        total = total + myArray[i];
    }
    return total;
}

// Do not edit below this line
module.exports = sumAll;
