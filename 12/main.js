// getElementById
const header = document.getElementById("mainHeader");
console.log("getElementById:", header);
// getElementsByClassName
const itemsByClass = document.getElementsByClassName("item");
console.log("getElementsByClassName:", itemsByClass);
// getElementsByTagName
const allDivs = document.getElementsByTagName("div");
console.log("getElementsByTagName:", allDivs);
// querySelector
const list = document.querySelector("#mainList");
const firstItem = list.querySelector("li:first-child");
const lastItem = list.querySelector("li:last-child");
const thirdItem = list.querySelector("li:nth-child(3)");
console.log("First item:", firstItem);
console.log("Last item:", lastItem);
console.log("Third item:", thirdItem);
// querySelectorAll
const allLi = document.querySelectorAll("#mainList li");
console.log("querySelectorAll NodeList:", allLi);
const liArray = Array.from(allLi);
console.log("Converted to array:", liArray);
let listItems = document.querySelectorAll("ul.nav > li");
console.log("ul.nav > li:", listItems);
let listItem = document.querySelectorAll("li:nth-child(2)");
console.log("li:nth-child(2):", listItem);