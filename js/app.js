// ----------------------------------------memory part------------------------------------------------
function updateMemoryCost(memoryCost) {
    const costMemory = document.getElementById('memory-cost');

    if (memoryCost == true) {
        costMemory.innerText = 0;
    }
    else {
        costMemory.innerText = 180;
    }

    const totalCost = document.getElementById('totalCost');
    const totalCossText = totalCost.innerText;

}
document.getElementById('memory8GB').addEventListener('click', function () {

    updateMemoryCost(true);
    totalCost();

})
document.getElementById('memory16GB').addEventListener('click', function () {

    updateMemoryCost(false);
    totalCost();
})


// ----------------------------------------storage part------------------------------------------------

document.getElementById('storage256GB').addEventListener('click', function () {
    const storageCost = document.getElementById('storage-cost');
    storageCost.innerText = 0;
    totalCost();
})
document.getElementById('storage512GB').addEventListener('click', function () {
    const mediumStorageCost = document.getElementById('storage-cost');
    mediumStorageCost.innerText = 100;
    totalCost();
})
document.getElementById('storage1TB').addEventListener('click', function () {
    const highStorageCost = document.getElementById('storage-cost');
    highStorageCost.innerText = 180;
    totalCost();

})


// ----------------------------------------delivery part------------------------------------------------
function updateDeliveryCost(deliveryCost) {
    const delivery = document.getElementById('delivery-cost');

    if (deliveryCost == true) {
        delivery.innerText = 0;
    }
    else {
        delivery.innerText = 20;
    }


}

document.getElementById('freeDelivery').addEventListener('click', function () {

    updateDeliveryCost(true);
    totalCost();
})
document.getElementById('paidDelivery').addEventListener('click', function () {

    updateDeliveryCost(false);
    totalCost();

})

// ----------------------------------------totalCost part------------------------------------------------

const memoryCost = document.getElementById('memory-cost');
const storageCost = document.getElementById('storage-cost');
const delivery = document.getElementById('delivery-cost');

function totalCost() {
    let totalCost =
        parseFloat(document.getElementById("memory-cost").innerText) +
        parseFloat(document.getElementById("storage-cost").innerText) +
        parseFloat(document.getElementById("delivery-cost").innerText) + 1299;

    document.getElementById("totalCost").innerText = totalCost;
    document.getElementById("updateTotal").innerText = totalCost;
    return totalCost;
}


// ----------------------------------------promoCode part------------------------------------------------

document.getElementById("promoButton").addEventListener("click", () => {
    let promoCodeInput = document.getElementById("promoCodeInput");
    let promoCodeValue = promoCodeInput.value;

    if (promoCodeValue == "stevekaku") {

        let previousTotal = totalCost();
        let discount = (previousTotal * 20) / 100;

        let updateTotal = previousTotal - discount;

        document.getElementById("updateTotal").innerText = updateTotal;
        promoCodeInput.value = "";
    }
});







