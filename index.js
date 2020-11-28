//1. Create index.js and link that in the index.js at the end of the body, right before closing body--Done @ ine 23
//2. Display the starting images on the webpage: img src should point certain image files: --Done @ Line 16 and 20
//3. Go to index.js, generate random number and use it to select random dice. For this, we first need to generate random num,then select random image

var randomNum, randomNum2;
// 7. Select the image using document.querySelectorAll(“”)[index]
// 8. Change the attribute of image1 using setAttribute(“attributename”,”what you want to change attribute into?”)
function display()
{

    //4. We should generate a whole number between 1 and 6
    randomNum= Math.floor(Math.random() *6)+1;
    //5. Using this random number to select a random dice image: dice(randomnum).png
    document.querySelector(".img1").setAttribute("src", "images/dice"+randomNum+".png")
    var randomNum2 = Math.floor(Math.random() *6)+1;
    // 6. Get the image path using the random dice image: images/dice(randomnum).png
    document.querySelector(".img2").setAttribute("src", "images/dice"+randomNum2+".png");
    //call chekWinner with current score.
    checkWinner(randomNum, randomNum2);
}


// 9.TEST YOUR CODE BY REFRESHING THE PAGE. Every time you refresh the page, img1 should change!
// 10. Generating random img2. Basically do same steps for img2
// 11. Show the winner. Biggest dice number wins the game
function checkWinner(num1, num2)
{
    // If randomnum1>randomnum2, display “Player 1 Wins1”
    if (num1>num2)
        document.querySelector("#result").innerHTML="Player 1 Wins";
    // If randomnum1>randomnum2, display “Player 2 Wins1”
    else if (num2>num1)
         document.querySelector("#result").innerHTML="Player 2 Wins";
         // I If randomnum1=randomnum2, display “Draw!”
    else
        document.querySelector("#result").innerHTML="Draw Again"

}


// Note that we can combine some steps, but we get do this one step by step to make it more understandable

function choose()
{
//get an array of images    
let images=document.querySelectorAll("img");
//for each images assign them to dices
for (index in images) //forEach in JS
{
    let randomNumber1=Math.floor(Math.random()*6)+1;//1-6
    let ranromDiceImage="dice"+randomNumber1+".png";//dice1.png OR dice6.png,etc
    let randomImageSource="images/"+ranromDiceImage;//images/dice6.png etc...
    images[index].setAttribute("src",randomImageSource);
}

D
}