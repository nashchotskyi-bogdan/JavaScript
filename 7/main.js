// push
console.log("Push");
// 1
let pushArray = [];
pushArray.push(10);
pushArray.push(20);
pushArray.push(30);
console.log("Push 1:", pushArray);
// 2
function addElement(array, element) {
    array.push(element);
    return array;
}
console.log("Push 2:", addElement([1, 2, 3], 4));
// pop
console.log("Pop");
// 1
let popArray = [1, 2, 3, 4];
popArray.pop();
console.log("Pop 1:", popArray);
// 2
function removeLast(array) {
    array.pop();
    return array;
}
console.log("Pop 2:", removeLast([5, 6, 7, 8]));
// unshift
console.log("Unshift");
// 1
let unshiftArray = [3, 4];
unshiftArray.unshift(1, 2);
console.log("Unshift 1:", unshiftArray);
// 2
function addFirst(array, element) {
    array.unshift(element);
    return array;
}
console.log("Unshift 2:", addFirst([2, 3, 4], 1));
// shift
console.log("Shift");
// 1
let shiftArray = [10, 20, 30];
shiftArray.shift();
console.log("Shift 1:", shiftArray);
// 2
function removeFirst(array) {
    array.shift();
    return array;
}
console.log("Shift 2:", removeFirst([100, 200, 300]));
// fill
console.log("Fill");
// 1
let fillArray = new Array(5);
fillArray.fill("A");
console.log("Fill 1:", fillArray);
// 2
function fillElements(array, value, start, end) {
    array.fill(value, start, end);
    return array;
}
console.log("Fill 2:", fillElements([1, 2, 3, 4, 5], 0, 1, 4));
// splice
console.log("Splice");
// 1
let spliceArray = [1, 2, 3, 4, 5];
spliceArray.splice(2, 2);
console.log("Splice 1:", spliceArray);
// 2
function removeElements(array, index, count) {
    array.splice(index, count);
    return array;
}
console.log("Splice 2:", removeElements([10, 20, 30, 40, 50], 1, 2));
// reverse
console.log("Reverse");
// 1
let reverseArray = [1, 2, 3, 4, 5];
reverseArray.reverse();
console.log("Reverse 1:", reverseArray);
// 2
function reverseElements(array) {
    return array.reverse();
}
console.log("Reverse 2:", reverseElements([10, 20, 30]));
// concat
console.log("Concat");
// 1
let firstArray = [1, 2];
let secondArray = [3, 4];
let newArray = firstArray.concat(secondArray);
console.log("Concat 1:", newArray);
// 2
function combineArrays(array1, array2) {
    return array1.concat(array2);
}
console.log("Concat 2:", combineArrays(["A", "B"], ["C", "D"]));
// includes
console.log("Includes");
// 1
let includesArray = [5, 10, 15];
console.log("Includes 1:", includesArray.includes(10));
// 2
function hasElement(array, element) {
    return array.includes(element);
}
console.log("Includes 2:", hasElement([1, 2, 3], 3));
// filter
console.log("Filter");
// 1
let numbers = [1, 2, 3, 4, 5, 6];
let evenNumbers = numbers.filter(number => number % 2 === 0);
console.log("Filter 1:", evenNumbers);
// 2
function filterArray(array, condition) {
    return array.filter(condition);
}
console.log(
    "Filter 2:",
    filterArray([10, 15, 20, 25, 30], number => number >= 20)
);
// map
console.log("Map");
// 1
let nums = [1, 2, 3, 4];
let squares = nums.map(number => number * number);
console.log("Map 1:", squares);
// 2
function mapArray(array, transformer) {
    return array.map(transformer);
}
console.log(
    "Map 2:",
    mapArray([1, 2, 3], number => "Значення: " + number)
);