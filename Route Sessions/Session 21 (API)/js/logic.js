var productList = []; //if the data that will come is an array of objects, we will store it in this variable
var myHttp = new XMLHttpRequest();
myHttp.open(
  "GET",
  "https://api.nasa.gov/planetary/apod?api_key=lItlFJc85FYUs1FdG89aIJRu5r3aPZx4pd5K6tq5",
);
myHttp.send();
myHttp.addEventListener("readystatechange", function () { //Event dah by7sl kl ma al ready state tet8yr 
  if (myHttp.readyState === 4) {
    console.log(JSON.parse(myHttp.response));
    productList = JSON.parse(myHttp.response); // dah lw data gayaly array wa feh objects aly ha4t8l 3aleha
    productList = JSON.parse(myHttp.response).data; // dah lw data aly gayaly object wa object feh array (data) gwah objects kter heya aly ha4t8l 3aleha
    showProducts(); // When I get the data, I will call this function to show the products
  }
});
function showProducts() {
  var products = "";
  for (var i = 0; i < productList.length; i++) {
    products += `
    //code HTML to show the product
    `;
  }
  document.getElementById("productsRow").innerHTML = products;
}




//Another Example (show that we can take params from the userin search input and send it to the API to get the data we want )

var foodList = []; //if the data that will come is an array of objects, we will store it in this variable
var btnSearch = document.getElementById("btnSearch");
var inputSeacrh = document.getElementById("inputSearch");


function getFood() {
  var userSearch = inputSeacrh.value;
  var myHttp = new XMLHttpRequest();
  myHttp.open(
    "GET",
    `https://forkify-api.jonas.io/api/v2/recipes?search=${userSearch}&key=ede5a62b-b9c6-4ece-ac6c-3448320f0eff`, // keda food aly hayegy 3la 7asb al search
  );
  myHttp.send();

  myHttp.addEventListener("load", function () { //Event dah by3ml al function lma al ready state teb2a b 4 hata lw status code b 400 al mohm response geh (m4 lma kl ma tet8yr)
    if (myHttp.readyState === 4 && myHttp.status >= 200 && myHttp.status < 300) {
      console.log(JSON.parse(myHttp.response));
      foodList = JSON.parse(myHttp.response); // dah lw data gayaly array wa feh objects aly ha4t8l 3aleha
      foodList = JSON.parse(myHttp.response).data; // dah lw data aly gayaly object wa object feh array (data) gwah objects kter heya aly ha4t8l 3aleha
      foodList = JSON.parse(myHttp.response).data.recipes; // lw data gaya object feh array data wa array dah feh recipes array aly feh objects kter l al food
      showFood(); // When I get the data, I will call this function to show the products
    }
  });
  myHttp.addEventListener("error", function () { //Event dah by3ml al function lma al ready state teb2a b 4 (bs fr2 an 7asl network error msln aw mo4kla tanya zy an response maga4 asln (lkn lw geh b status 400 yeb2a load heya aly hat7sl))
    console.log("Error");
  });
}

function showFood() {
 if(foodList.length == 0){ //recipes is an array inside the data object, so we check its length to see if there are any recipes returned from the API
  document.getElementById("productsRow").innerHTML = `<h2 class="text-center text-danger">No Recipes Found</h2>`;
 }  
 else{
  var products = "";
  for (var i = 0; i < foodList.length; i++) {
    products += `
    //code HTML to show the product
    `;
  }
  document.getElementById("productsRow").innerHTML = products;
 }
}

btnSearch.addEventListener("click",getFood); 