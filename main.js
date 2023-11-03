function theLargestNumber(array) {

    let theLargest = array[0];

    for (let index = 1; index < array.length; index++) {
        if (array[index] > theLargest) {
            theLargest = array[index];
        }
    }
    return theLargest;
}

const numbers = [58, 65, 100, 203, 400, 45, 500, 5, 7, 8];
const bigNummber = theLargestNumber(numbers);

console.log("Arraydaki en boyuk eded:", bigNummber);

