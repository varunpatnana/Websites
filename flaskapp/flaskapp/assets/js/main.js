

// 👇️ {
//   name: 'Alice',
//   country: 'Austria',
//   tasks: [ 'develop', 'design', 'test' ],
//   age: 30
// }
// fetch("./../products.json")
// .then(response => {
//    return response.json();
// })
// .then(data => console.log(data));


 if(localStorage.getItem("productsInCart")){
    productsInCart=localStorage.getItem("productsInCart")
 }else{
    localStorage.setItem("productsInCart",0)
    productsInCart=0
 }
    
    
 localStorage.getItem("productsInCart");



// nav toggle
const toggleNav = (navMenu, navToggle)=>{
    const navmenu = document.getElementById(navMenu);
    const navtoggle = document.getElementById(navToggle);
    if(navmenu && navtoggle) {
        navtoggle.addEventListener('click', ()=>{
            navmenu.classList.toggle('show')
        })
    }
}
toggleNav('nav-menu', 'nav-toggle')

// add and  remove active 
const navmenu = document.getElementById('nav-menu')
const navLink = document.querySelectorAll('.nav-link')
const addActive = (e)=>{
    navLink.forEach(n => n.classList.remove('active'))
    e.target.classList.add('active')
    navmenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', addActive))

cc=document.getElementById("productId")
cc.innerHTML=productsInCart

function subscribe(){
    alert("Thank you for subscribing to our alerts program")
}