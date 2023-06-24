

document.addEventListener("click", (e) => {
    const currentCart = document.getElementsByClassName("anchor-cart")[0].id;
    const currentProduct = e.target

    
    const url = `/api/carts/${currentCart}/product/${currentProduct.id}`
    const method = "POST";
    const headers = {
        "Content-Type": "application/json"
    }
    
    
    fetch(url, {
        method,
        headers
    })
    .then(response => {
        if(response.ok){
            
            return response.json()
        }
    })    
    .then(data => {
        const quantity = document.getElementById("productQuantity")
        quantity.innerHTML = data.payload.products.length
        
        
        console.log(data)})
    .catch(err => console.error(err))
    //console.log(url)
})