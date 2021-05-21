// DOM SELECTION

// document.getElementById() -> return element

const judul = document.getElementById("judul");
judul.style.color = "blue";
judul.style.backgroundColor = "grey";
judul.innerHTML = "Tes Tes";


// document.getElementsByTagName() -> HTMLCollection

const p = document.getElementsByTagName("p");

for(let i = 0; i < p.length; i++){
    p[i].style.backgroundColor = "lightblue";
}

// document.getElementsByClassName() -> HTMLCollection

const p1 = document.getElementsByClassName("p1");
p1[0].innerHTML = "coba ubah oi oi";