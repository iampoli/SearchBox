let btn = document.querySelector(".icon-search");
let input = document.querySelector(".search");

btn.onclick=()=>{
    if(input.value.trim()!==""){
        alert("Searched");
        return
    }
    btn.parentElement.classList.toggle("hide");
    input.focus();
    // btn.previousElementSibling.value="" && btn.previousElementSibling.classList.contains("hide");
}

input.onkeydown=(e)=>{
    if(e.key =="Enter"){
        input.value.trim()!=="" ? alert("Searched") : btn.click();
        return
    }
}