  function myFunction(x) {
    x.classList.toggle("change");
    var y = document.getElementById("menu");
    if(y.classList.contains("hidden"))
        y.classList.remove("hidden");
    else   
        y.classList.add("hidden")

}