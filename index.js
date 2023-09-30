const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here

const reducer = (accumulator, item) => {
    accumulator += item;
    return accumulator;
}

const totalBatteries = batteryBatches.reduce(reducer, 0);