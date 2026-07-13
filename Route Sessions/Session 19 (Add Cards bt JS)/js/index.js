var productNameInput = document.getElementById("productName");
var productPriceInput = document.getElementById("productPrice");
var productCategoryInput = document.getElementById("productCategory");
var productDescriptionInput = document.getElementById("productDescription");
var productImageInput = document.getElementById("productImage");
var seacrhInput = document.getElementById("searchInput");
var productList = [];
if(localStorage.getItem("productList") !=null){
  productList = JSON.parse(localStorage.getItem("productList"));
}
showProducts();

function clearInputs(){
    productNameInput.value = "";
    productPriceInput.value = "";
    productCategoryInput.value = "";
    productDescriptionInput.value = "";
    productImageInput.value = "";
    productDescriptionInput.classList.remove("is-valid");
    productDescriptionInput.classList.remove("is-invalid");
    productCategoryInput.classList.remove("is-valid");
    productCategoryInput.classList.remove("is-invalid");
    productNameInput.classList.remove("is-valid");
    productNameInput.classList.remove("is-invalid");
    productPriceInput.classList.remove("is-valid");
    productPriceInput.classList.remove("is-invalid");


}
function addProduct (){
  if(validName() && validPrice() && validCategory() && validDescription()){
    var newProduct = {
      name : productNameInput.value , 
      price : productPriceInput.value , 
      category : productCategoryInput.value ,
      description : productDescriptionInput.value ,
      image : productImageInput.files[0] ? `./images/${productImageInput.files[0].name}` : "./images/cloud2.png" 
  }
  productList.push(newProduct);
  clearInputs();
  showProducts();
  console.log(productList);
  localStorage.setItem("productList",JSON.stringify(productList));
}
  }

function showProducts(){
  var box = "";
  for( var i=0; i< productList.length; i++){
    box += `
     <div class="col-md-4">
        <div class="card h-100">
        <img height="150px" class="card-img-top object-fit-cover" src="${productList[i].image}" alt="${productList[i].name} " />
        <div class="card-body text-center">
            <span class="badge bg-info">ID: ${i} </span>
            <h3 class="card-title h6">${productList[i].name} </h3>
            <div class="d-flex flex-column gap-2">
            <h4 class="card-text small">${productList[i].price} </h4>
            <h4 class="card-text small"> ${productList[i].category} </h4>
            <p class="card-text small">  ${productList[i].description } </p>
            </div>
        </div>

        <div class="card-footer text-center d-flex gap-2 justify-content-center">
            <button onclick="deleteProduct(${i})" class="btn btn-outline-danger"><i class="fas fa-trash"></i></button>
            <button onclick="updateProduct(${i})" class="btn btn-outline-warning"><i class="fas fa-edit"></i></button>
        </div>
        </div>
    </div>
    
    `
  }
document.getElementById("rowData").innerHTML= box;
}

function deleteProduct(index){
  console.log("delete");
  productList.splice(index, 1);
  showProducts();
  localStorage.setItem("productList", JSON.stringify(productList));
}

var cardIndex = 0;

function updateProduct(index){
  cardIndex = index;
  console.log("update" + index);
  var updateProduct = productList[index];

  productNameInput.value = updateProduct.name;
  productCategoryInput.value = updateProduct.category;
  productDescriptionInput.value = updateProduct.description;
  productPriceInput.value = updateProduct.price;

  document.getElementById("btnAdd").classList.add("d-none");
  document.getElementById("btnUpdate").classList.remove("d-none");
}
function saveProduct(){
  var existingImage = productList[cardIndex].image;
  var newProduct = {
      name : productNameInput.value , 
      price : productPriceInput.value , 
      category : productCategoryInput.value ,
      description : productDescriptionInput.value ,
      image: productImageInput.files[0] ? `./images/${productImageInput.files[0].name}`: existingImage , 
  }
  productList.splice(cardIndex, 1, newProduct );
  showProducts();
  clearInputs();
  localStorage.setItem("productList", JSON.stringify(productList));

  document.getElementById("btnAdd").classList.remove("d-none");
  document.getElementById("btnUpdate").classList.add("d-none");
  
}

function searchProduct(){
  var searchText = seacrhInput.value;
  if(validsearch()){
    var productCard = ""
     for(var i=0; i<productList.length; i++){
      if(productList[i].name.toLocaleLowerCase().trim().includes(searchText.toLocaleLowerCase().trim()) ||
         productList[i].price.trim().includes(searchText.trim()) ||
         productList[i].category.toLocaleLowerCase().trim().includes(searchText.toLocaleLowerCase().trim()) ||
         productList[i].description.toLocaleLowerCase().trim().includes(searchText.toLocaleLowerCase().trim())){
        productCard += `
          <div class="col-md-4">
            <div class="card h-100">
              <img height="150px" class="card-img-top object-fit-cover" src="${productList[i].image}" alt="${productList[i].name} " />
              <div class="card-body text-center">
                 <span class="badge bg-info">ID: ${i} </span>
                 <h3 class="card-title h6">${productList[i].name} </h3>
                  <div class="d-flex flex-column gap-2">
                    <h4 class="card-text small">${productList[i].price} </h4>
                    <h4 class="card-text small"> ${productList[i].category} </h4>
                    <p class="card-text small">  ${productList[i].description } </p>
                  </div>
              </div>
              <div class="card-footer text-center d-flex gap-2 justify-content-center">
                <button onclick="deleteProduct(${i})" class="btn btn-outline-danger"><i class="fas fa-trash"></i></button>
                <button onclick="updateProduct(${i})" class="btn btn-outline-warning"><i class="fas fa-edit"></i></button>
             </div>
            </div>
          </div>
     `
      }
      document.getElementById("rowData").innerHTML = productCard;
     }
  }
}
function validsearch(){
  var userText = seacrhInput.value.trim();
  var searchRegex = /^[A-Za-z0-9\s]*$/;
  if(searchRegex.test(userText)){
    console.log( "Search matchs");    
    return true;
  }
  else{
    console.log("Search does not match");
  }
}

function validName(){
  var userText = productNameInput.value.trim();
  var nameRegex = /^[A-Z][A-Za-z ]{1,12}$/;
  if(nameRegex.test(userText)){
    console.log( "Name matchs");
    productNameInput.classList.add("is-valid");
    productNameInput.classList.remove("is-invalid");
    document.getElementById("nameError").classList.add("d-none");
    return true;
  }
  else{
    console.log("Name does not match");
    productNameInput.classList.remove("is-valid");
    productNameInput.classList.add("is-invalid");
    document.getElementById("nameError").classList.remove("d-none");
  }
}

function validPrice(){
  var userText = productPriceInput.value.trim();
  var priceRegex = /^(?!0(\.0{1,2})?$)\d+(\.\d{1,2})?$/ ;
  if(priceRegex.test(userText)){
    console.log("Price matchs");
    productPriceInput.classList.add("is-valid");
    productPriceInput.classList.remove("is-invalid");
    document.getElementById("priceError").classList.add("d-none");
    return true;
  }
  else{
    console.log("Price does not match");
    productPriceInput.classList.remove("is-valid");
    productPriceInput.classList.add("is-invalid");
    document.getElementById("priceError").classList.remove("d-none");
  }
};

function validCategory(){
  var userText = productCategoryInput.value.trim();
  var categoryRegex = /^[A-Z][A-Za-z ]{1,12}$/  ;
  if(categoryRegex.test(userText)){
    console.log("Category matchs");
    productCategoryInput.classList.add("is-valid");
    productCategoryInput.classList.remove("is-invalid");
    document.getElementById("categoryError").classList.add("d-none");
    return true;
  }
  else{
    console.log("Category does not match");
    productCategoryInput.classList.remove("is-valid");
    productCategoryInput.classList.add("is-invalid");
    document.getElementById("categoryError").classList.remove("d-none");
  }
}
function validDescription(){
  var userText = productDescriptionInput.value.trim();
  var descriptionRegex = /^(\S+\s+){4,}\S+$/;
  if(descriptionRegex.test(userText)){
    console.log("Description matchs");
    productDescriptionInput.classList.add("is-valid");
    productDescriptionInput.classList.remove("is-invalid");
    document.getElementById("descriptionError").classList.add("d-none");
    return true;
  }
  else{
    console.log("description does not match");
    productDescriptionInput.classList.remove("is-valid");
    productDescriptionInput.classList.add("is-invalid");
    document.getElementById("descriptionError").classList.remove("d-none");
  }
}
// I can make a Validation on the Image to valid its size and its type (to be an image , or an image with a specefic extension)//

// I can make only one validation function that take a regex and input as a parameter and make validation on whatever an input // 

// the refactoring:
// an yekon feh function btrg3 al object newProduct 3latol mn 8er ma afdl aktbo kl 4waya

// an ne4el function Show Product deh wa ne5leha heya heya function search, 34an includes lma yekon gwaha "" keda btl3 true
// wa keda keda hayzhr kl al product 3andy tol ma search fady fah ne4el function show() wa search() keda keda hat3ml nafs al fekra

// an yekon feh function gwaha function show() wa clearInputs() set local storage bma anha bttkr kter ya3ny




