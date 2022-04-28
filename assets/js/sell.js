function setradio(x){
    if (x === "yes"){
        let elem = document.getElementById("sel-1");
        elem.setAttribute('class', 'label-select');
        elem = document.getElementById("sel-2");
        elem.setAttribute('class', 'label-unselect');
    }
    else{
        let elem = document.getElementById("sel-2");
        elem.setAttribute('class', 'label-select');
        elem = document.getElementById("sel-1");
        elem.setAttribute('class', 'label-unselect');
    }
}