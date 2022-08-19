let priceBanana = 15.678;
let priceApple = 123.965;
let priceJuice = 90.2345;

let maxPrice = Math.max(priceBanana, priceApple, priceJuice);
console.log(maxPrice + " " + "максимальне число");

let minPrice = Math.min(priceBanana, priceApple, priceJuice);
console.log(minPrice + " " + "мінімальне число");

let sumOfAll = Number(priceBanana + priceApple + priceJuice);
console.log(sumOfAll + " " + "вартість всіх товарів");

let roundEverythingDown = Math.floor(sumOfAll);
console.log(roundEverythingDown + " " + "сума всіх товарів заокругленно до меньшого");

let roundToHundreds = Math.ceil(sumOfAll / 100) * 100;
console.log(roundToHundreds + " " + "сума заокругленна до сотень в більшу сторону");

let evenOrOdd = roundEverythingDown % 2 === 0;
console.log(evenOrOdd + " " + " - парне true , непарне false");

/* function TheCustomerBuys(n) {
    if (Number.isFinite(n) === true) {
        let rest = n - sumOfAll;
        console.log(rest + " " + `здача з ${n} грн`);
    } else {
        false;
    }
}
TheCustomerBuys(500); */
let rest = 500 - sumOfAll;
console.log(rest + " " + " - здача з 500 грн");

let averageValue = (sumOfAll / 3).toFixed(2);
console.log(averageValue + " " + " - середнє значення цін округлене до другого знаку після коми");

let randomDiscount = Math.round(Math.random() * 100);
console.log(randomDiscount + " % " + " - випадкова знижка");

let discountInGrn = ((sumOfAll * randomDiscount) / 100).toFixed(2);

let = discountedAmount = (sumOfAll - (sumOfAll * randomDiscount) / 100).toFixed(2);
console.log(discountedAmount + " " + " сума до оплати з випадковою знижкою округлена до 2 знаків після коми");

let profit = (sumOfAll / 2 - discountInGrn).toFixed(2);
console.log(profit + " " + "чистий прибуток");

let text = document.getElementById("box");
text.innerHTML = `<p>Максимальне число - <span>${maxPrice}</span></p>
            <p>Мінімальне число - <span>${minPrice}</span></p>
            <p>Вартість всіх товарів - <span>${sumOfAll}</span></p>
            <p>Сума всіх товарів заокругленно до меньшого - <span>${roundEverythingDown}</span></p>
            <p>Сума заокругленна до сотень в більшу сторону - <span>${roundToHundreds}</span></p>
            <p>Парне true , непарне false - <span>${evenOrOdd}</span></p>
            <p>Здача з 500 грн - <span>${rest}</span></p>
            <p>Середнє значення цін округлене до другого знаку після коми - <span>${averageValue}</span></p>
            <p>Випадкова знижка - <span>${randomDiscount} %</span></p>
            <p>Сума до оплати з випадковою знижкою округлена до 2 знаків після коми - <span>${discountedAmount}</span></p>
            <p>Чистий прибуток - <span>${profit}</span></p>`;
