function setradio(x) {
    if (x === "yes") {
        let elem = document.getElementById("sel-1");
        elem.setAttribute('class', 'label-select');
        elem = document.getElementById("sel-2");
        elem.setAttribute('class', 'label-unselect');
    }
    else {
        let elem = document.getElementById("sel-2");
        elem.setAttribute('class', 'label-select');
        elem = document.getElementById("sel-1");
        elem.setAttribute('class', 'label-unselect');
    }
}

//Funtion to make a list
let addlist = document.getElementById("amen-add").onclick = () => {
    let val = document.getElementById("amenities").value;
    if(!val) return;
    let cont = document.getElementById("values");
    let c_id = cont.getElementsByTagName("button");
    if (c_id[0]) {
        c_id = c_id[c_id.length - 1].id;
        c_id = c_id ? parseInt(c_id) : 1;
    }
    else {
        c_id = 0
    }
    let html = cont.innerHTML + `<span class="amen-inp">
    <input class="amen-data amen-vals" type="text" value="${val}" style = "width:${val.length*9}px" disabled>
    <button id="${c_id + 1}" class="amen-bt" type="button">x</button>
</span>`
    cont.innerHTML = html;
    document.getElementById("amenities").value = "";
}

document.getElementById("amenities").onkeydown = (event) =>{
    return event.key === "Enter"? addlist():0;
}