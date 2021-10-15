const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here

function batCount(totalBat, number) {
    return totalBat + number;
}

const totalBatteries = batteryBatches.reduce(batCount, 0)
