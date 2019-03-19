// Initial variables
var wins = 0;
var losses = 0;
var prevGameResults = "";
var totalScore = 0;
var gameOver = false;

// function to generate random target number between 19-120. display to div
function rndNumTarget(){
    var targetNum = 18 + Math.floor(Math.random()*102 + 1);
    console.log("Target Number: " + targetNum);

    $("#target-score").text(targetNum);
}

// function to generate random gem values 1-12 per game on reset
function rndNumGem(){
    var gemNum1 = Math.floor(Math.random()*12 + 1)
    $("#gem1").attr('value', gemNum1);    
    
    var gemNum2 = Math.floor(Math.random()*12 + 1)
    $("#gem2").attr('value', gemNum2);    
    
    var gemNum3 = Math.floor(Math.random()*12 + 1)
    $("#gem3").attr('value', gemNum3);    
    
    var gemNum4 = Math.floor(Math.random()*12 + 1)
    $("#gem4").attr('value', gemNum4);    
}

// on click function to add specific (but random per game) values to total score
$(".btn").click(function(){
    totalScore = totalScore + parseInt($('#gem1').attr('value'));
    
    // Write to total score div
    $('#total').text(totalScore);

    console.log(parseInt($('img').attr('value')));
    // console.log(totalScore);
})

// gamePlay function to run the main logic of the game

// win case: total score equals target number. treigger gameOver boolean and reset

// loss case: total score > target number. trigger gameOver boolean and reset

// reset function to start game
function reset(){
    totalScore = 0;
    gameOver = false;
    rndNumTarget();
    rndNumGem();
    

}

reset();