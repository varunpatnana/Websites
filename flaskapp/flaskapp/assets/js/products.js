
if(localStorage.getItem("cart")){
    cart=localStorage.getItem("cart")
    cart=JSON.parse(cart);
}else{
    cart={}
}
 
 function addToCart(p){
    p=parseInt(p)
    if(p in cart){
        cart[p]+=1
    }
       
    else{
        cart[p]=1
    }
    localStorage.setItem("cart",JSON.stringify(cart))
    if(localStorage.getItem("productsInCart")){
        productsInCart=localStorage.getItem("productsInCart")
        productsInCart=parseInt(productsInCart)
        productsInCart+=1
    }
    else{
        productsInCart=1
    }
    localStorage.setItem("productsInCart",productsInCart)
    cc=document.getElementById("productId")
    cc.innerHTML=productsInCart
    
}
 for(var product of products){
                
                document.write(`<div class="featured-product">
                <div class="featured-box">
                    <div class="featured-new">`+product.type+`</div>
                    <img src=`+product.imageUrl+` alt="featured" class="featured-img">
                </div>
                <div class="featured-data">
                    <h3 class="product-name">`+product.name+`</h3>
                    <span class="product-price">`+product.price+`</span>
                </br>
             
                <button class="btn btn-primary" id="shop" onclick="addToCart('`+product.id+`')">Shop</button>
                </div>
            </div>`)
}
productsInCart=localStorage.getItem("productsInCart")
cc=document.getElementById("productId")
cc.innerHTML=productsInCart


 
