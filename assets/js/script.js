function openBuy(){
    window.open("buy.htm", "_top");
}

function Borderon(id){
    document.getElementById(id).style.borderColor = "#37df37";
}

function Borderoff(id){
    document.getElementById(id).style.borderColor = "transparent";
}

document.getElementById("sell-bt").onchange =() =>{
    let img = document.getElementById("sell-img");
    img.src = URL.createObjectURL(document.getElementById("sell-bt").files[0]);
}
