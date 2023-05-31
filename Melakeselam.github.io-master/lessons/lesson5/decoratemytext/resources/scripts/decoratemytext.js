setfontsize = function(){
    document.getElementById("text").style.fontSize = "12pt";
}

enlarge = function(){
    let textbox = document.getElementById("text");
    textbox.style.fontSize = parseInt(textbox.style.fontSize) + 2 + "pt";
    
}

bling = function(){
    let blinger = document.getElementById("bling");
    let textbox = document.getElementById("text");
    if(blinger.checked) {
        textbox.style.fontWeight ="bold";
        textbox.style.color = "green";
        textbox.style.textDecoration = "underline";
    }
    else {
        textbox.style.fontWeight ="normal";
        textbox.style.color = "black";
        textbox.style.textDecoration = "none";
    }
}