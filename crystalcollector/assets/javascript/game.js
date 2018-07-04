var wins = 0; //set the things
var losses = 0;
var money = 0;

var targetNumber = 30 + Math.floor(Math.random() * 70); //set the things that will be reset later
var playerSum = 0;
var crysValue = [3 + Math.floor(Math.random() * 9), 3 + Math.floor(Math.random() * 9), 3 + Math.floor(Math.random() * 9), 3 + Math.floor(Math.random() * 9)]

function gameUpdate() { //make it show the stuffs
    $("#targetNumber").text(targetNumber)
    $("#playerSum").text(playerSum)
    $("#wins").text("Wins: " + wins)
    $("#losses").text("Losses: " + losses)
}

function gameReset() { //start over
    targetNumber = 30 + Math.floor(Math.random() * 70);
    playerSum = 0;
    crysValue = [3 + Math.floor(Math.random() * 9), 3 + Math.floor(Math.random() * 9), 3 + Math.floor(Math.random() * 9), 3 + Math.floor(Math.random() * 9)]
    gameUpdate();
}
gameUpdate();

$("#crystal1").on("click", function () { //make it do stuff
    if (playerSum + crysValue[0] < targetNumber) {
        playerSum += crysValue[0];
        gameUpdate();;
    } else if (playerSum + crysValue[0] == targetNumber) {
        wins += 1;
        $("#winLose").text("You Won!");
        gameReset();
    } else if (playerSum + crysValue[0] > targetNumber) {
        losses += 1;
        $("#winLose").text("You Lost!");
        gameReset();
    }
})

$("#crystal2").on("click", function () {
    if (playerSum + crysValue[1] < targetNumber) {
        playerSum += crysValue[1];
        gameUpdate();;
    } else if (playerSum + crysValue[1] == targetNumber) {
        wins += 1;
        $("#winLose").text("You Won!");
        gameReset();
    } else if (playerSum + crysValue[1] > targetNumber) {
        losses += 1;
        $("#winLose").text("You Lost!");
        gameReset();
    }
})

$("#crystal3").on("click", function () {
    if (playerSum + crysValue[2] < targetNumber) {
        playerSum += crysValue[2];
        gameUpdate();;
    } else if (playerSum + crysValue[2] == targetNumber) {
        wins += 1;
        $("#winLose").text("You Won!");
        gameReset();
    } else if (playerSum + crysValue[2] > targetNumber) {
        losses += 1;
        $("#winLose").text("You Lost!");
        gameReset();
    }
})

$("#crystal4").on("click", function () {
    if (playerSum + crysValue[3] < targetNumber) {
        playerSum += crysValue[3];
        gameUpdate();;
    } else if (playerSum + crysValue[3] == targetNumber) {
        wins += 1;
        $("#winLose").text("You Won!");
        gameReset();
    } else if (playerSum + crysValue[3] > targetNumber) {
        losses += 1;
        $("#winLose").text("You Lost!");
        gameReset();
    }
})

$("#crystal5").on("click", function () {
    if (money) {
        if (playerSum + 1 < targetNumber) {
            playerSum += 1;
            gameUpdate();;
        } else if (playerSum + 1 == targetNumber) {
            wins += 1;
            $("#winLose").text("You Won!");
            gameReset();
        } else if (playerSum + 1 > targetNumber) {
            losses += 1;
            $("#winLose").text("You Lost!");
            gameReset();
        }
    }
})

$("#crystal1").hover(function () { //make it fancy
    $("#crystal1").attr("src", "assets/images/crystal1.gif")
}, function () {
    $("#crystal1").attr("src", "assets/images/crystal1stop.png")
})

$("#crystal2").hover(function () {
    $("#crystal2").attr("src", "assets/images/crystal2.gif")
}, function () {
    $("#crystal2").attr("src", "assets/images/crystal2stop.png")
})

$("#crystal3").hover(function () {
    $("#crystal3").attr("src", "assets/images/crystal3.gif")
}, function () {
    $("#crystal3").attr("src", "assets/images/crystal3stop.png")
})

$("#crystal4").hover(function () {
    $("#crystal4").attr("src", "assets/images/crystal4.gif")
}, function () {
    $("#crystal4").attr("src", "assets/images/crystal4stop.png")
})

$("#crystal5").hover(function () {
    if (money) {
        $("#crystal5").attr("src", "assets/images/crystal5.gif")
    }
}, function () {
    if (money) {
        $("#crystal5").attr("src", "assets/images/crystal5stop.gif")
    }
})

$("#giveMeMoney").on("click", function () { //get my money
    money = confirm("You agree to pay me $19.99?");
    if (money) {
        $("#crystal5").html("")
        $("#crystal5").attr("src", "assets/images/crystal5stop.gif")
        $("#crystal5").attr("class", "img-thumbnail")
        $("#giveMeMoney").remove()
    }
})






