var box =" ";

for( var i =0; i<10 ;i++){
    if(i % 2 ==0 ){
        box+= `<span class="dark">Route ${i} </span>`
    }
    else{
        box+=`<span class="light">Route ${i}</span>`
    }
}
document.getElementById("demo").innerHTML=box;
console.log(box);

function Login(){
    var userEmail= window.prompt("Enter your Email:");
    var userPassword= window.prompt("Enter your Paasword:");

    if(userEmail=="yousti@yahoo.com" && userPassword=="123"){
        console.log("hello");
    }
    else{
        console.log("not a user");
    }
}