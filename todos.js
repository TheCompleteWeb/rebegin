alert("Connected!");
var LIs = document.querySelectorAll("li");

for(var i = 0; i <LIs.length; i++ ){
    LIs[i].addEventListener("mouseover", function(){
        this.style.color = "green";
    });

    LIs[i].addEventListener("mouseout", function(){
        this.style.color = "black";
    });

    LIs[i].addEventListener("click", function(){
        this.classList.toggle("done");
    });
    
}


