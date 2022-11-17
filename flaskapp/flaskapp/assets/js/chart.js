{/* <script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.5.0/Chart.min.js"></script> */}

data=[];
labels=[];
for(var product of products){
    data.push(product.unitsSold)
    labels.push(product.name)
}
new Chart(document.getElementById("bar-chart"), {
    type: 'bar',
    data: {
      labels: labels,
      datasets: [
        {
          label: "units sold",
          backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
          data: data
        }
      ]
    },
    options: {
      legend: { display: false },
      title: {
        display: true,
        text: 'Number of Units sold 2050'
      }
    }
});
productsInCart=localStorage.getItem("productsInCart")
cc=document.getElementById("productId")
cc.innerHTML=productsInCart