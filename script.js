function shuffle(){
    var img = document.querySelectorAll("img")[0];
    let randomNumber1 = Math.floor(Math.random() * 6) + 1;
    console.log(randomNumber1);
    var randomImage1 = "images/dice" + randomNumber1 + ".png";
    img.setAttribute("src", randomImage1);

    var img = document.querySelectorAll("img")[1];
    let randomNumber2 = Math.floor(Math.random() * 6) + 1;
    console.log(randomNumber2);
    var randomImage2 = "images/dice" + randomNumber2 + ".png";
    img.setAttribute("src", randomImage2);

    //<!-------results based on option selected--------!>

    let val1 = document.querySelectorAll("img")[0].getAttribute("src");
    let slice1 = parseInt(val1.slice(11,12));
    let val2 = document.querySelectorAll("img")[1].getAttribute("src");
    let slice2 = parseInt(val2.slice(11,12));

    let option1 = document.getElementById("bet1");
    let option2 = document.getElementById("bet2");
    let option3 = document.getElementById("bet3"); 

    let resultant = slice1 + slice2;
    if(resultant > 6 && option3.checked == true){
        document.querySelector(".gameTitle").innerHTML = "YOU WIN";
    }
    else if(resultant < 6 && option1.checked == true){
        document.querySelector(".gameTitle").innerHTML = "YOU WIN";
    }
    else if(resultant === 6 && option2.checked == true){
        document.querySelector(".gameTitle").innerHTML = "YOU WIN";
    }
    else if(option1.checked==false && option2.checked==false && option3.checked==false){
        alert("Please choose your bet!");
    }else{
        document.querySelector(".gameTitle").innerHTML = "YOU LOOSE";
    }

}
function animation(){
    setTimeout(shuffle, 500);
    const img1 = document.querySelectorAll("img")[0];
    const img2 = document.querySelectorAll("img")[1];
    img1.setAttribute("src", "images/dice-anime.gif");
    img2.setAttribute("src", "images/dice-anime.gif");
}