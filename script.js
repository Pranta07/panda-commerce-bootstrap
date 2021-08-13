//////////////////////////// problem 1 ///////////////////////////
const h2 = document.getElementsByTagName("h2");
// console.log(h2);
for (const el of h2) {
    el.style.color = "hotpink";
}

//////////////////////// problem 2 /////////////////////////
const backpack = document.getElementById("backpack");
// backpack.style.backgroundColor = "lightsalmon";
backpack.style.paddingBottom = "15px";

////////////////////////// problem 3 //////////////////////////
const cards = document.getElementsByClassName("card");
// console.log(cards);
for (const card of cards) {
    // card.style.backgroundColor = "lightgreen";
    // card.style.border = "10px solid";
    // card.style.borderRadius = "30px !important";
    card.setAttribute("style", "border-radius: 30px !important");
    // card.setAttribute("style", "background-color:lightgreen");
    card.style.setProperty("background-color", "lightblue");
}

////////////////////// problem 4 ////////////////////////
const btn = document.querySelector(".panda-btn-primary");
// console.log(btn);
// btn.style.marginLeft = "50px";
btn.addEventListener("click", function () {
    console.log("button clicked");
});

//////////////////////// problem 5 //////////////////////
const btns = document.querySelectorAll(".panda-btn-primary");
// console.log(btns);
for (const btn of btns) {
    // console.log(btn.innerText);
    // console.log(btn.parentNode);
    if (btn.innerText.indexOf("Buy Now") != -1) {
        //console.log(btn.innerText);
        btn.addEventListener("click", function (ev) {
            // console.log(ev.target);
            // ev.target.style.display = "none";
            ev.target.parentNode.removeChild(ev.target);
        });
    }

    /* btn.addEventListener("click", function (ev) {
        // console.log(ev.target);
        // ev.target.style.display = "none";
        ev.target.parentNode.removeChild(ev.target);
    }); */
}

///////////////////////// problem 6 ///////////////////////////////
const input = document.getElementById("email-field");

input.addEventListener("keyup", function () {
    // console.log(input.value);
    if (input.value == "email") {
        document.getElementById("submit-btn").removeAttribute("disabled");
    } else {
        document.getElementById("submit-btn").setAttribute("disabled", true);
    }
});

//////////////////////////// problem 7 /////////////////////////////
// const backpack = document.getElementById("backpack"); previously declared in problem 2
const images = backpack.getElementsByTagName("img");
console.log(images);
for (const img of images) {
    const prevSource = img.src;
    img.addEventListener("mouseover", function () {
        img.src = "images/bags/bag-2.png";
    });
    img.addEventListener("mouseout", function () {
        img.src = prevSource;
    });
}

//////////////////////////// problem 8 /////////////////////////////
const subscribe = document.getElementById("subscribe");
// console.log(subscribe);
subscribe.addEventListener("dblclick", function () {
    // subscribe.setAttribute("style", "background-color: red");
    subscribe.style.backgroundColor = "lightblue";
});
