var foodList = [];


//Promise code 

function getPizza(){
    return new Promise(function(resolve,reject){
        var myHttp = new XMLHttpRequest();
        myHttp.open(
            "GET",
            `https://forkify-api.jonas.io/api/v2/recipes?search=${userSearch}&key=ede5a62b-b9c6-4ece-ac6c-3448320f0eff`, // keda food aly hayegy 3la 7asb al search
        );
        myHttp.send();

        myHttp.addEventListener("load", function () { 
            if (myHttp.readyState === 4 && myHttp.status >= 200 && myHttp.status < 300) {
            console.log(JSON.parse(myHttp.response));
            foodList = JSON.parse(myHttp.response); 
            showFood(); //lazm aktbha gwa al if
            resolve(); // aly hatb2a getPasta
            }
        });
        myHttp.addEventListener("error", function () { //Event dah by3ml al function lma al ready state teb2a b 4 (bs fr2 an 7asl network error msln aw mo4kla tanya zy an response maga4 asln (lkn lw geh b status 400 yeb2a load heya aly hat7sl))
            console.log("Error");
            reject("Error from Pizza API");
        });

})
}

function getPasta(){
    return new Promise(function(resolve,reject){
        var myHttp = new XMLHttpRequest();
        myHttp.open(
            "GET",
            `https://forkify-api.jonas.io/api/v2/recipes?search=${userSearch}&key=ede5a62b-b9c6-4ece-ac6c-3448320f0eff`, // keda food aly hayegy 3la 7asb al search
        );
        myHttp.send();

        myHttp.addEventListener("load", function () { 
            if (myHttp.readyState === 4 && myHttp.status >= 200 && myHttp.status < 300) {
            console.log(JSON.parse(myHttp.response));
            foodList = JSON.parse(myHttp.response);
            showFood(); //lazm aktbha gwa al if
            resolve(); // aly heya function aly bt3ml console bs deh (34an te2fl al loop)
            }
        });
        myHttp.addEventListener("error", function () { //Event dah by3ml al function lma al ready state teb2a b 4 (bs fr2 an 7asl network error msln aw mo4kla tanya zy an response maga4 asln (lkn lw geh b status 400 yeb2a load heya aly hat7sl))
            console.log("Error");
            reject("Error from Pasta API");
        });

})
}

getPizza().then(getPasta).then(() => {console.log('done');}).catch(function(error){
    console.log(error);
}
)
// 3amlt function console keda 3abeta 34an resolve getPasta yekon mawgod
// getpizza heya aly hay7slha call al 2awl ba3den getpasta ye7slha call ba3den function aly feh then ba3deha (aly bt3rd console bs)
//ye7slha call wa tetnfz fe3ln, ba3den getpasta tetnffz fe3ln ba3den getpizza tetnfz fe3ln 
// aly hay7slo call al 2awl 1- getPizaa  2- getPasta  3- function aly feh then ba3deha (aly bt3rd console bs)
//aly hay7slo complete/finish al 2awl 1- function aly feh then ba3deha (aly bt3rd console bs)  2- getPasta  3- getPizza




// Fetch code 34an al API (aly han4t8l beh daimn)
async function getPizza(){
    var res = await fetch("https://forkify-api.jonas.io/api/v2/recipes?search=&key=ede5a62b-b9c6-4ece-ac6c-3448320f0eff");
    var dataFromApi = await res.json();
}
getPizza();