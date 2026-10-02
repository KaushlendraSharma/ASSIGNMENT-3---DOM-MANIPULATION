const heading = document.getElementById("top");

const redbtn = document.getElementById("redbtn");
const bluebtn = document.getElementById("bluebtn");
const greenbtn = document.getElementById("greenbtn");
const yellowbtn = document.getElementById("yellowbtn");

const nameInput = document.getElementById("nameInput");
const greetBtn = document.getElementById("greetBtn");



redbtn.addEventListener("click", function () {
    redbtn.style.backgroundColor = "red";
});


bluebtn.addEventListener("click", function () {
    bluebtn.style.backgroundColor = "blue";
});


greenbtn.addEventListener("click", function () {
    greenbtn.style.backgroundColor = "green";
});



yellowbtn.addEventListener("click", function () {
    yellowbtn.style.backgroundColor = "yellow";
});


greetBtn.addEventListener("click", function () {

    const name = nameInput.value;

    heading.innerText = "Hello, " + name;

});