var totalPrice = 0;

function addItem(itemName, price, itemAmount) {
  var orderList = document.getElementById("order-list");
  var amount = document.getElementById(itemAmount).value;
  var listItem = document.createElement("li");

  if (amount > 0) {
    listItem.innerHTML +=
      itemName + "- QTY: " + amount + ", Total: " + price * amount;
    orderList.appendChild(listItem);

    var itemTotal = price * amount;
    totalPrice += itemTotal;

    document.getElementById("order-total").innerText =
      "Total: " + totalPrice + " PHP";
  } else {
    return;
  }
}
function pay() {
  var paymentAmount = document.getElementById("pay-amount").value;
  var change = paymentAmount - totalPrice;

  if (paymentAmount >= totalPrice) {
    alert("Payement successful! Your change is " + change + " PHP");
  } else {
    alert("Invalid amount. Please enter a larger amount.");
  }
}
