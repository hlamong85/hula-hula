function addTotal() {
    // value of best price
    const totalCostText = document.getElementById('total-price').innerText;
    const totalCostInt = parseInt(totalCostText)
    // value of memory cost
    const memoryCostText = document.getElementById('memory-cost').innerText;
    const memoryCostInt = parseInt(memoryCostText)
    //    valu of storage cost
    const storageCostText = document.getElementById('storage-cost').innerText;
    const storageCostInit = parseInt(storageCostText)
    //    value of delivery cost
    const deliveryCostText = document.getElementById('delivery-charge').innerText;
    const deliveryCostInt = parseInt(deliveryCostText)
    //  sum of all costs
    const productTotalPrice = totalCostInt + memoryCostInt + storageCostInit + deliveryCostInt;
    //    set the cost to total amount

    document.getElementById('total-amount').innerText = productTotalPrice;

    //    bottom total price
    document.getElementById('bottom-total').innerText = productTotalPrice;
}


function memoryTotal(memory) {
    document.getElementById('memory-cost').innerText = memory;
    addTotal()


}
function storageTotal(storage) {


    document.getElementById('storage-cost').innerText = storage;
    addTotal()

}
function deliveryCharge(charge) {
    document.getElementById('delivery-charge').innerText = charge;
    addTotal()
}

// --------------memory buttons---------------
document.getElementById('first-memory').addEventListener('click', function () {
    memoryTotal(0)
})
document.getElementById('second-memory').addEventListener('click', function () {
    memoryTotal(180)



})

// ----------------Storage buttons------------
document.getElementById('first-storage').addEventListener('click', function () {
    storageTotal(0)
})
document.getElementById('second-storage').addEventListener('click', function () {
    storageTotal(100)

})
document.getElementById('third-storage').addEventListener('click', function () {
    storageTotal(180)

})
// -------Delivery charge-------

document.getElementById('first-charge').addEventListener('click', function () {
    deliveryCharge(0)

})
document.getElementById('second-charge').addEventListener('click', function () {
    deliveryCharge(20)
})

// ----------------------apply-promocode-------------------------
document.getElementById('apply-btn').addEventListener('click', function () {
    const promo = document.getElementById('promo-code')
    const promoText = promo.value;
    if (promoText.includes('stevekaku')) {
        const bottomTotalText = document.getElementById('bottom-total');
        const bottomTotalValue = bottomTotalText.innerText
        const bottomTotal = parseInt(bottomTotalValue);
        const amount = bottomTotal * 0.2;
        const subtractAmount = bottomTotal - amount;
        console.log(subtractAmount);
        bottomTotalText.innerText = subtractAmount;

    }
})