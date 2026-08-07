// Task 1: calculateBill(amount, taxRate = 0.05) — Default Parameters 
// Return the final bill after tax is applied. Default tax rate is 5% when not provided.
function calculateBill(amount, taxRate = 0.05){
    const findTax = amount * taxRate;
    const afterAddTaxTotalBill = amount + findTax;
    return afterAddTaxTotalBill;
}

console.log(calculateBill(1000));
