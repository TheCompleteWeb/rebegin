var btn = document.body.querySelector("button");
btn.addEventListener("click", function(){
    
    if(document.body.style.backgroundColor == "purple")
       { 
           document.body.style.backgroundColor = "white";
        }
    else {
        document.body.style.backgroundColor = "purple";
    }
});