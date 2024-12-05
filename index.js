// Code your solution in this file!

const returnFirstTwoDrivers = function(drivers){
    return drivers.slice(0, 2)
}

console.log(returnFirstTwoDrivers(['Antonia', 'Nuru', 'Amari', 'Mo']));


const returnLastTwoDrivers = function (drivers){
    return drivers.slice(2, 4);
}

console.log(returnLastTwoDrivers(['Antonia', 'Nuru', 'Amari', 'Mo']));

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(power){
    function fareMultiplier(fare){
        const multiplier = fare * power;
        return multiplier;
    }
    return fareMultiplier;
}

console.log(createFareMultiplier(5)(5));

const newFare = () => console.log(createFareMultiplier(5)(5));


function fareDoubler(doubled){
    let doubler = doubled * 2;
    return doubler;
}

console.log(fareDoubler(newFare()));


function fareTripler(trippled){
    let trippler = trippled * 3;
    return trippler;
}

console.log(fareDoubler(newFare()));



const selectDifferentDrivers = (arrayOfDrivers, callback) => {
    arrayOfDrivers = ['Antonia', 'Nuru', 'Amari', 'Mo']
    return callback(arrayOfDrivers);

};

selectDifferentDrivers(['Antonia', 'Nuru', 'Amari', 'Mo'], returnFirstTwoDrivers);