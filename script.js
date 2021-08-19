// Checks is window has loaded and displays message that you should switch to Landscape on mobile for best gameplay:

window.addEventListener('load', () => {
    if(window.innerHeight > window.innerWidth){
        alert("Rotate your device horizontally for best gameplay mode!");
    }
  });

// Controls the toggle pump

var fuel = 18; // Starting height of blue fuel level
var green = 225; // Starting green value of RGB color
var blue = 255; // Starting blue value of RGB color
var score = 0; // Starting score
function switchitUp () { // This function runs each time you click the toggle
    const pumpButton = document.getElementById('pumptoggle');
    const pumpPosition = document.getElementById('pumpposition');
    const fuelLevel = document.getElementById('fuellevel');
    if (pumpButton.checked) {
        pumpPosition.src = "images/playerpumpdown2.svg"; // Changes to image of stickman with pump down
        fuel += 2;
        fuelLevel.style.height = fuel + 'px'; // Adds 2px to the height of the fuel
        green -= 2; // Subtracts 2 from the most recent value of "green"
        blue -=2; // Subtracts 2 from the most recent value of "blue"
        fuelLevel.style.backgroundColor = "rgb(0," + green + "," + blue + ")"; // Updates color of fuel to a slightly darker blue
        pumpButton.checked = true;
    } else {
        pumpPosition.src = "images/playerpumpup2.svg"; // Changes to images of stickman with pump up
        fuel += 2;
        fuelLevel.style.height = fuel + 'px'; // Adds 2px to the height of the fuel level
        green -= 2;
        blue -=2; 
        fuelLevel.style.backgroundColor = "rgb(0," + green + "," + blue + ")";
        pumpButton.checked = false;
};
}

// Controls what happens when you click "Ready?" from the Pre-Game overlay

function readyToPlay () {
    overlayDiv = document.getElementById("overlay");
    overlayDiv.style.display = "none";
    overlayStartGame = document.getElementById("overlaystartgame");
    overlayStartGame.style.display = "block";
}

// Controls what happens when you press "Start Game" and what happens when the timer hits "0"

function startTimer () {
    document.getElementById("overlaystartgame").style.display = "none";
    startButton = document.getElementById('startgame');
    startButton.style.fontSize = "30px";
    startButton.style.borderRadius = "15px";
    startButton.style.width = "275px";
    startButton.style.height = "50px";
    newStartButton = document.getElementById('gametimerafter');
    newStartButton.append(startButton);
    let timeleft = 10;
    let gameTimer = setInterval(countdown, 1000);
    function countdown () {
    if (timeleft <= 0) {
        clearInterval(gameTimer);   
        document.getElementById("overlayend").style.display = "block";
        score = ((fuel - 18) / 1.53).toFixed(0);
        if (score >= 100) {
            document.getElementById("finalscore").innerHTML = "You fueled " + '<span style="color:#4CBB17;">' + 100 + '%<br></span><span>of the rocket!</span>';
        }
        else {document.getElementById("finalscore").innerHTML = "You fueled " + '<span style="color:#4CBB17;">' + score + '%<br></span><span>of the rocket!</span>';
        }
    } else {
        document.getElementById("startgame").innerHTML = timeleft; 
        document.getElementById("startgame").style.backgroundColor = "rgb(51, 0, 62)";
        document.getElementById("startgame").style.fontSize = "30px";
        document.getElementById("startgame").style.border = "0px";
        document.getElementById("startgame").style.color = "white";
        document.getElementById("startgame").style.width = "100px";
        document.getElementById("startgame").style.height = "50px";
    }
    timeleft -=1;
};
};

// Controls the post-game rocket animations; score range determines which animation runs

function blastOff () {
    levelText = document.getElementById('level');
    if (score <= 24) {
        document.getElementById('nowhere').style.display = "block";
        document.getElementById('rocketdud').style.display = "block";
        var destination = document.getElementById('destinationmessage')
        destination.style.display = "block";
        destination.innerHTML = "You didn't even leave the atmosphere!"
        document.getElementById('bodytag').style.background = "rgb(46, 46, 46)";
        var displayChange = document.querySelectorAll('.displaychange');
        displayChange.forEach(i => {
            i.style.display = "none";
        });
        setTimeout(function () {
            document.getElementById('playagain').style.display='block';
        }, 6000);
        levelText.innerHTML = "You made it to <strong>Level 1 of 6</strong>. Try and beat your score!"
    } else if (score > 24 && score <= 49) {
        document.getElementById('moon').style.display = "block";
        document.getElementById('rocketfire').style.display = "block";
        var destination = document.getElementById('destinationmessage')
        destination.style.display = "block";
        destination.innerHTML = "You got to the moon!"
        document.getElementById('bodytag').style.background = "rgb(46, 46, 46)";
        var displayChange = document.querySelectorAll('.displaychange');
        displayChange.forEach(i => {
            i.style.display = "none";
        });
        setTimeout(function () {
            document.getElementById('playagain').style.display='block';
        }, 10000);
        levelText.innerHTML = "You made it to <strong>Level 2 of 6</strong>. Try and beat your score!"
    } else if (score > 49 && score <= 69) {
        document.getElementById('mars').style.display = "block";
        document.getElementById('rocketfire').style.display = "block";
        var destination = document.getElementById('destinationmessage')
        destination.style.display = "block";
        destination.innerHTML = "You got to Mars!"
        document.getElementById('bodytag').style.background = "rgb(46, 46, 46)";
        var displayChange = document.querySelectorAll('.displaychange');
        displayChange.forEach(i => {
            i.style.display = "none";
        });
        setTimeout(function () {
            document.getElementById('playagain').style.display='block';
        }, 10000);
        levelText.innerHTML = "You made it to <strong>Level 3 of 6</strong>. Try and beat your score!"
    } else if (score > 69 && score <= 84) {
        document.getElementById('saturn').style.display = "block";
        document.getElementById('rocketfire').style.display = "block";
        var destination = document.getElementById('destinationmessage')
        destination.style.display = "block";
        destination.innerHTML = "You got to Saturn!"
        document.getElementById('bodytag').style.background = "rgb(46, 46, 46)";
        var displayChange = document.querySelectorAll('.displaychange');
        displayChange.forEach(i => {
            i.style.display = "none";
        });
        setTimeout(function () {
            document.getElementById('playagain').style.display='block';
        }, 10000);
        levelText.innerHTML = "You made it to <strong>Level 4 of 6</strong>. Try and beat your score!"
    } else if (score > 84 && score <= 99) {
        document.getElementById('neptune').style.display = "block";
        document.getElementById('rocketfire').style.display = "block";
        var destination = document.getElementById('destinationmessage')
        destination.style.display = "block";
        destination.innerHTML = "You got to Neptune!"
        document.getElementById('bodytag').style.background = "rgb(46, 46, 46)";
        var displayChange = document.querySelectorAll('.displaychange');
        displayChange.forEach(i => {
            i.style.display = "none";
        });
        setTimeout(function () {
            document.getElementById('playagain').style.display='block';
        }, 10000);
        levelText.innerHTML = "You made it to <strong>Level 5 of 6</strong>. Try and beat your score!"
    } else {
        document.getElementById('aliens').style.display = "block";
        document.getElementById('rocketfire').style.display = "block";
        var destination = document.getElementById('destinationmessage')
        destination.style.display = "block";
        destination.innerHTML = "You got to an alien planet out of this galaxy!"
        document.getElementById('bodytag').style.background = "rgb(46, 46, 46)";
        var displayChange = document.querySelectorAll('.displaychange');
        displayChange.forEach(i => {
            i.style.display = "none";
        });
        setTimeout(function () {
            document.getElementById('playagain').style.display='block';
        }, 10000);
        levelText.innerHTML = "You made it to <strong>Level 6 of 6</strong>. YOU WIN!"
    }}