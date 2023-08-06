function leapYears(year) {
    //let result = year % 4 === 0 ? true : false;
    // let result = (year % 100 === 0) ? true : false ||
    //     (year % 400 === 0) ? true : false ||
    //     (year % 4 === 0) ? true : false;

    return year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);

}

// Do not edit below this line

module.exports = leapYears;
