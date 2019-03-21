// Initial variables
var wins = 0;
var losses = 0;
var prevGameResults = "";
var totalScore = 0;
var targetNum;

// function to generate random target number between 19-120. display to div
function rndNumTarget(){
    targetNum = 18 + Math.floor(Math.random()*102 + 1);
    console.log("Target Number: " + targetNum);

    $("#target-score").text(targetNum);

    return targetNum;
}

// function to generate random gem values 1-12 per game on reset
function rndNumGem(){
    $("#gem1").attr('value', Math.floor(Math.random()*12 + 1));    
    
    $("#gem2").attr('value', Math.floor(Math.random()*12 + 1));    
    
    $("#gem3").attr('value', Math.floor(Math.random()*12 + 1));    
    
    $("#gem4").attr('value', Math.floor(Math.random()*12 + 1));    
}

// on click function to add specific (but random per game) values to total score
$("#gem1").click(function(){
    totalScore = totalScore + parseInt($('#gem1').attr('value'));
    $('#total').text(totalScore);
    scoreCheck(targetNum);
})

$("#gem2").click(function(){
    totalScore = totalScore + parseInt($('#gem2').attr('value'));
    $('#total').text(totalScore);
    scoreCheck(targetNum);
})

$("#gem3").click(function(){
    totalScore = totalScore + parseInt($('#gem3').attr('value'));
    $('#total').text(totalScore);
    scoreCheck(targetNum);
})

$("#gem4").click(function(){
    totalScore = totalScore + parseInt($('#gem4').attr('value'));
    $('#total').text(totalScore);
    scoreCheck(targetNum);
})

// gamePlay function to run the main logic of the game
function scoreCheck(input){   
    // win case: total score equals target number. reset
    if (totalScore === input){
        wins++;
        $('#win-count').text("Wins: " + wins);
        $('#previous-game-results').text('You won!');
        reset();
    }
    
    // loss case: total score > target number. reset
    if (totalScore > input){
        losses++;
        $('#loss-count').text("Losses: " + losses);
        $('#previous-game-results').text('You lost!');
        reset();
    }
    console.log("lol")
}

// reset function to start game
function reset(){
    totalScore = 0;
    $('#total').text(totalScore);
    rndNumGem();
    targetNum = rndNumTarget();
}

reset();