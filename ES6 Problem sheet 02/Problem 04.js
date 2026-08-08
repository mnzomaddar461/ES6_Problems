//  Problem 2: Shopping Cart Total (reduce)
//   getCartTotal(cart) — sum price * qty across every item in the cart
//   using reduce().

let getCartTotal = (cart) => {
    let totalPrice = cart.reduce((accumulator, item) => {
        return accumulator + (item.price * item.qty)
    }, 0)

    return totalPrice;
}

let cart = [
    { name: "Pen", price: 20, qty: 3 },
    { name: "Notebook", price: 50, qty: 2 },
    { name: "Speaker", price: 500, qty: 2 },
    { name: "Perfume", price: 2500, qty: 1 },
]

console.log(getCartTotal(cart))