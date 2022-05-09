function toogleName(e) {
    let gridElem = document.getElementsByTagName("form")[0];
    let elem = document.getElementById("name-data");
    let footElem = document.getElementById("signup");
    
    if (elem.style.display === 'none') {
        gridElem.setAttribute("class", "row-5");
        elem.style.display = 'block';
        footElem.innerHTML = "Have Account? Sign in";
    }
    else{
        elem.style.display = 'none'
        footElem.innerHTML = "New user? Sign up";
        gridElem.setAttribute("class", "row-4");
    }
}