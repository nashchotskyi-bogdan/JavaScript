// 1.
const colorRadios = document.querySelectorAll('input[name="color"]');
colorRadios.forEach(radio => {
    radio.onchange = () => {
        document.body.style.background = radio.value;
    };
});
// 2.
const hobbyBoxes = document.querySelectorAll(".hobby");
const hobbiesResult = document.getElementById("hobbiesResult");
function updateHobbies() {
    const selected = [];
    hobbyBoxes.forEach(box => {
        if (box.checked) {
            selected.push(box.value);
        }
    });
    hobbiesResult.textContent =
        selected.length ? "Вибрані хобі: " + selected.join(", ") : "";
}
hobbyBoxes.forEach(box => box.onchange = updateHobbies);
// 3.
const countrySelect = document.getElementById("countrySelect");
const countryInfo = document.getElementById("countryInfo");
countrySelect.onchange = function () {
    const data = {
        uk: "Україна — столиця Київ",
        pl: "Польща — столиця Варшава",
        de: "Німеччина — столиця Берлін"
    };
    countryInfo.textContent = data[this.value] || "";
};
// 4.
const ratings = document.querySelectorAll('input[name="rating"]');
const ratingText = document.getElementById("ratingText");
ratings.forEach(radio => {
    radio.onchange = () => {
        ratingText.textContent = "Дякуємо за вашу оцінку: " + radio.value;
    };
});
// 5.
const pizzaType = document.getElementById("pizzaType");
const sizeRadios = document.querySelectorAll('input[name="size"]');
const toppings = document.querySelectorAll('input[type="checkbox"]');
const priceEl = document.getElementById("price");
function calculatePrice() {
    let price = 100;
    const size = document.querySelector('input[name="size"]:checked');
    if (size) {
        price += Number(size.value) || 0;
    }
    toppings.forEach(t => {
        if (t.checked) {
            price += Number(t.value) || 0;
        }
    });
    priceEl.textContent = price;
}
sizeRadios.forEach(r => r.onchange = calculatePrice);
toppings.forEach(t => t.onchange = calculatePrice);
pizzaType.onchange = calculatePrice;