// Problem 1: Bulk Discount Applier
//   applyDiscount(prices, rate) — apply a discount % to every price in the
//   array and return a NEW array. The ORIGINAL prices array must stay
//   exactly the same.

let applyDiscount = (prices, discountRete = 0) => {
    let afterDiscount = prices.map((elem, ind, arr) => {
        const priceDiscount = elem - (elem*discountRete)/100
        return priceDiscount
    })
    return afterDiscount
};

let prices = [200, 500, 1000, 450]
console.log(applyDiscount(prices, 10))