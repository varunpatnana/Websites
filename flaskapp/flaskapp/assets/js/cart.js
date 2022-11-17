productsInCart=localStorage.getItem("productsInCart")
cc=document.getElementById("productId")
cc.innerHTML=productsInCart

cart=localStorage.getItem("cart")
console.log(cart)
console.log(products)
cart=JSON.parse(cart);
function clearRecords(){
    console.log("in clear records")
    localStorage.removeItem("cart")
    localStorage.removeItem("productsInCart")
}
countofcart=0
if(cart){
    for(var p of products){
        if(cart[p.id]>0){
            p["incart"]=cart[p.id]
            countofcart+=1
        }else{
            p["incart"]=0
        }
    }
}
total=0
if(countofcart>0){
    document.write(`<thead>
    <tr>
      <th scope="col">ID</th>
      <th scope="col">Name</th>
      <th scope="col">Price</th>
      <th scope="col">Units</th>
      <th scope="col">Total</th>
    </tr>
  </thead>`)
    for(var product of products){
    
        if(product.incart>0){
            
            k=parseInt(product.price.slice(1,))*product.incart
            document.write(`<tr><th scope="row">`+product.id+`</th>
            <td>`+product.name+`</td>
            <td>`+product.price+`</td>
            <td>`+product.incart+`</td>
            <td>`+k+`</td>
            </tr>`)
            total+=k
        }
        
        
        
    }
    if(total>0){
        document.write(`<tr><th scope="row"></th>
        <td></td>
        <td>
        <button onclick="clearRecords()" class="btn btn-primary"><a href="/success" style="color: white !important;">Place Order</a></button>
        </td>
        <td>Total Order amount</td>
        <td>`+total+`</td>
        </tr>`)
    }
}else{
    document.write(`<h3 align="center">No products in the cart</h3>`)
}
