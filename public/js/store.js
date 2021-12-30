function updateTotal() {
    var CartPrice = document.getElementsByClassName('total')[0]
    var totalAmount = CartPrice.getElementsByClassName('amount')[0]
    var total = sessionStorage.getItem("Total")
    totalAmount.innerText = "₹" + total
    document.cookie = "Total=" + total + ";"
    var Items = '';
    for (i = 0; i < sessionStorage.length - 1; i++) {
        obj1 = i.toString()
        itemInJson = JSON.parse(sessionStorage.getItem(obj1))
        Item = (itemInJson.item).toString()
        Quantity = (itemInJson.quantity).toString()
        Items += Item + "[" + Quantity + "]" + ", "
    }
    Items = Items.slice(0, -2)
    document.cookie = "Items=" + Items + ";"
    sessionStorage.clear()
}