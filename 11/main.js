// spread
console.log("Spread");
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const mergedArray = [...array1, ...array2];
console.log("Об'єднаний масив:", mergedArray);
// rest_1
console.log("Rest_1");
function showStringAndRest(firstString, ...restArgs) {
    console.log("Рядок:", firstString);
    console.log("Масив інших аргументів:", restArgs);
}
showStringAndRest("Hello", 1, 2, 3, "JS");
// rest_2
console.log("Rest_2");
function average(...numbers) {
    if (numbers.length === 0) return 0;
    const sum = numbers.reduce((acc, num) => acc + num, 0);
    return sum / numbers.length;
}
console.log("Середнє значення:", average(10, 20, 30, 40));
// typeof_1
console.log("Typeof_1");
function checkType(value) {
    console.log(`Тип значення: ${typeof value}`);
}
checkType(123);
checkType("Hello");
checkType(true);
// typeof_2
console.log("Typeof_2");
function describeType(variable) {
    const type = typeof variable;
    if (type === "number") {
        console.log("Це число");
    } else if (type === "string") {
        console.log("Це рядок");
    } else {
        console.log("Це інший тип");
    }
}
describeType(10);
describeType("text");
describeType(true);