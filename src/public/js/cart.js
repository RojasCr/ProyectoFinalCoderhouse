const purchaseBtn = document.getElementById("purchaseBtn");
const deleteBtn = document.getElementById("deleteBtn");
const purchaseInfo = document.getElementById("purchaseInfo");
const cartId = document.getElementsByClassName("container")[0].id;

const purchaseDate = document.getElementById("purchaseDate");
const purchaseCode = document.getElementById("purchaseCode");
const purchaseAmount = document.getElementById("purchaseAmount");
const purchaser = document.getElementById("purchaser");

purchaseBtn.addEventListener("click", () => {

    const url = `/api/carts/${purchaseBtn.value}/purchase`
    
    fetch(url)
    .then(response => response.json())
    .then(data => {
        purchaseInfo.style.visibility = "visible";
        purchaseCode.innerHTML += data.payload.code
        purchaseDate.innerHTML += data.payload.purchase_datatime
        purchaseAmount.innerHTML += data.payload.amount
        purchaser.innerHTML += data.payload.purchaser
    })
    .catch(error => console.log(error))
})

deleteBtn.addEventListener("click", () => {
    const url = `api/carts/${cartId}/products/${deleteBtn.value}`

    const headers = {
        "Content-Type": "application/json"
    }

    const method = "DELETE"

    fetch(url, {
        headers,
        method
    })
    .then(response => response.json())
    .then(data => {
        Swal.fire({
            icon: "success",
            text: data.payload
        })
        window.location.reload()
    })
    .catch(err => console.log(err))
})