var mainImage = document.getElementById("main-image");
var smallImages = document.querySelectorAll(".images img");

for(var i=0;i<smallImages.length;i++){
    smallImages[i].addEventListener("mouseenter",function(e){
        var imageNewSrc = e.target.src;
      mainImage.src=imageNewSrc;

    });
}