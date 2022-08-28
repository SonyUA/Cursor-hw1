const priceBanana = 15.678;
const priceApple = 123.965;
const priceJuice = 90.2345;

const maxPrice = Math.max(priceBanana, priceApple, priceJuice);
console.log(maxPrice + " " + "максимальне число");

const minPrice = Math.min(priceBanana, priceApple, priceJuice);
console.log(minPrice + " " + "мінімальне число");

const sumOfAll = Number(priceBanana + priceApple + priceJuice);
console.log(sumOfAll + " " + "вартість всіх товарів");

const roundEverythingDown = Math.floor(priceBanana) + Math.floor(priceApple) + Math.floor(priceJuice);
console.log(roundEverythingDown + " " + "сума всіх товарів заокругленно до меньшого");

const roundToHundreds = Math.ceil(sumOfAll / 100) * 100;
console.log(roundToHundreds + " " + "сума заокругленна до сотень в більшу сторону");

const evenOrOdd = roundEverythingDown % 2 === 0;
console.log(evenOrOdd + " " + " - парне true , непарне false");

const rest = 500 - sumOfAll;
console.log(rest + " " + " - здача з 500 грн");

const averageValue = (sumOfAll / 3).toFixed(2);
console.log(averageValue + " " + " - середнє значення цін округлене до другого знаку після коми");

const randomDiscount = Math.round(Math.random() * 100);
console.log(randomDiscount + " % " + " - випадкова знижка");

const discountInGrn = ((sumOfAll * randomDiscount) / 100).toFixed(2);

const discountedAmount = (sumOfAll - (sumOfAll * randomDiscount) / 100).toFixed(2);
console.log(discountedAmount + " " + " сума до оплати з випадковою знижкою округлена до 2 знаків після коми");

const profit = (sumOfAll / 2 - discountInGrn).toFixed(2);
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
