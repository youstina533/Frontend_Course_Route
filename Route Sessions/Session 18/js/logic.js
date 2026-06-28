var products = [
    {title: "iPhone", price: 5000, onSale : false},
    {title: "iPhone pro", price: 10000, onSale : true},
    {title: "oppo", price: 4000, onSale : false},
]


var box= "";

for (var i =0; i< products.length; i++){

    console.log(1111);
    

    if(products[i].onSale){
        box += `
            <div class="col-lg-4 col-md-6 col-sm-12 ">
               <div class="card-inner position-relative bg-primary">
                <h2>title: ${products[i].title}</h2>
                <h2>price: ${products[i].price}</h2>
                <span class="position-absolute top-0 right-0 bg-danger" >Sale</span>
               </div>
            </div>   
        `
    }
    else{
        box += `
            <div class="col-lg-4 col-md-6 col-sm-12 ">
               <div class="card-inner position-relative bg-primary">
                    <h2>title: ${products[i].title}</h2>
                    <h2>price: ${products[i].price}</h2>
               </div>
            </div>   
        `
    }


}




document.getElementById("rowData").innerHTML = box;