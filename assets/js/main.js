const nama = prompt("siapa nama anda?");
alert("selamat datang " + nama + " di web kota jambi");

let author = document.getElementById("author");
let tampilAside = document.getElementById("tampilAside");
tampilAside.onclick = function () {
    author.style.display = "block";
}

let tutup = document.getElementsByClassName("tutup")[0];
tutup.onclick = function () {
    author.style.display = "none";
}