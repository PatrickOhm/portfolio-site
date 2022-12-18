const canvas = document.getElementById("canvas");
const canvas_ctx = canvas.getContext("2d");

const startMonitor = document.querySelector('.desc-container');
const gameOverMonitor = document.querySelector('.game-over-display')
const scoreDisplay = document.querySelector('#score-display');

const rotateDivOne = document.querySelector('.div-rotate-size-1');
const rotateDivTwo = document.querySelector('.div-rotate-size-2');
const rotateDivThree = document.querySelector('.div-rotate-size-3');
const rotateDivFour = document.querySelector('.div-rotate-size-4');
const rotateDivFive = document.querySelector('.div-rotate-size-5');
const rotateDivSix = document.querySelector('.div-rotate-size-6');
const rotateDivSeven = document.querySelector('.div-rotate-size-7');
const rotateDivEight = document.querySelector('.div-rotate-size-8');

const triangle = document.querySelector('.triangle');

canvas.style.webkitTransform = 'translate(-50%, -50%) rotate('+0 +'deg)';
triangle.style.webkitTransform = 'translate(-50%, -50%) rotate('+0 +'deg)';
rotateDivOne.style.webkitTransform = 'translate(-50%, -50%) rotate('+45 +'deg)';
rotateDivTwo.style.webkitTransform = 'translate(-50%, -50%) rotate('+0 +'deg)';
rotateDivThree.style.webkitTransform = 'translate(-50%, -50%) rotate('+45 +'deg)';
rotateDivFour.style.webkitTransform = 'translate(-50%, -50%) rotate('+0 +'deg)';
rotateDivFive.style.webkitTransform = 'translate(-50%, -50%) rotate('+45 +'deg)';
rotateDivSix.style.webkitTransform = 'translate(-50%, -50%) rotate('+0 +'deg)';
rotateDivSeven.style.webkitTransform = 'translate(-50%, -50%) rotate('+45 +'deg)';
rotateDivEight.style.webkitTransform = 'translate(-50%, -50%) rotate('+0 +'deg)';


let snake,
    dx,
    dy,
    food_x,
    food_y,
    directionChange,
    rotate,
    gameOn = false,
    score = 0;
    degMod = 0;

let deg,
    degOne;
  
 
function init() {
    snake = [
        {x: 200, y: 200},
        {x: 190, y: 200},
        {x: 180, y: 200},
        {x: 170, y: 200},
        {x: 160, y: 200},
    ]
    
    dx = 10;
    dy = 0;
    
    directionChange = false;
    rotate = true; 

    score = 0;

    deg = parseInt(canvas.style.transform.slice(29).slice(0,-4));
    
 
} 

init();
generateFood();

function drawSnakePart(snakePart) {
    canvas_ctx.fillStyle = 'white';
    canvas_ctx.strokeStyle = '#0A0047';
    canvas_ctx.fillRect(snakePart.x, snakePart.y, 10, 10);
    canvas_ctx.strokeRect(snakePart.x, snakePart.y, 10, 10);
}

function drawSnake() {
    snake.forEach(drawSnakePart);
}

var run = window.setInterval(function() {
    startGame();
    
}, 100);

function startGame() {
        
    if(gameOver() || gameOn == false) {
        gameOverAnimatin();
        return; 
    };

    directionChange = false;
    
     clearCanvas();
     drawFood();
     moveSnake();
     drawSnake();

     rotateCanvas();
     rotateDiv(triangle, 1, 'plus', degOne);
     rotateDiv(rotateDivOne, 1, 'minus', degOne);
     rotateDiv(rotateDivTwo, 1, 'plus', degOne);
     rotateDiv(rotateDivThree, 1, 'minus', degOne);
     rotateDiv(rotateDivFour, 1, 'plus', degOne);
     rotateDiv(rotateDivFive, 1, 'minus', degOne);
     rotateDiv(rotateDivSix, 1, 'plus', degOne);
     rotateDiv(rotateDivSeven, 1, 'minus', degOne);
     rotateDiv(rotateDivEight, 1, 'plus', degOne);
   
        
}

function clearCanvas() {
    canvas_ctx.fillStyle = '#0A0047';
    canvas_ctx.fillRect(0,0, canvas.width, canvas.height);
}

function moveSnake() {
    const head = {x: snake[0].x + dx, y: snake[0].y + dy};
    snake.unshift(head);

    if (snake[0].x === food_x && snake[0].y === food_y) {
        generateFood();
        score++;
        
    } else {
        snake.pop();
    }
}

function snakeController(event) {
    // Keys 
    const LK = 37;
    const RK = 39;
    const UK = 38;
    const DK = 40;

    if (directionChange) return;
    directionChange = true;
    
    const Up = dy === -10;
    const Down = dy === 10;
    const Right = dx === 10;
    const Left = dx === -10;

    if (event.keyCode === LK && !Right) {
        dx = -10;
        dy = 0;
    }

    if (event.keyCode === UK && !Down) {
        dx = 0;
        dy = -10;
    }

    if (event.keyCode === RK && !Left) {
        dx = 10;
        dy = 0;
    }

    if (event.keyCode === DK && !Up) {
        dx = 0;
        dy = 10;
    }
}

document.addEventListener("keydown", snakeController);

function gameOver() {
    for (let i = 3; i < snake.length; i++) {
        const hasCollided = snake[i].x === snake[0].x && snake[i].y === snake[0].y;
        if (hasCollided) return true; 
    }

    // wall collider
    const leftWall = snake[0].x < 0;
    const rightWall = snake[0].x > canvas.width - 10;
    const topWall = snake[0].y < 0;
    const bottomWall = snake[0].y > canvas.height - 10;

    return leftWall || rightWall || topWall || bottomWall;
}

function foodCoordinate(min, max) {
    return Math.round((Math.random() * (max - min) + min) / 10) * 10;
}

function generateFood() {
    food_x = foodCoordinate(0, canvas.width - 10);
    food_y = foodCoordinate(0, canvas.height -10);
    snake.forEach(function hasSnakeEaten(part) {
        const hasEaten = part.x == food_x && part.y == food_y;
        if (hasEaten) generateFood();
    });
}

function drawFood() {
    canvas_ctx.fillStyle = 'red';
    canvas_ctx.strokeStyle = '#0A0047';
    canvas_ctx.fillRect(food_x, food_y, 10, 10);
    canvas_ctx.strokeRect(food_x, food_y, 10, 10);
}

// A N I M A T I O N S 

// rotate canvas 

function rotateCanvas() {
    if(rotate) {
        deg = deg + 1;
        canvas.style.webkitTransform = 'translate(-50%, -50%) rotate('+deg+'deg)';
    }
}

function rotateDiv(div, rate, direction, degDiv) {
    degDiv = parseInt(div.style.transform.slice(29).slice(0,-4));
    if(rotate) {
        if(direction == 'plus') degDiv = degDiv + rate;
        if(direction == 'minus') degDiv = degDiv - rate;
        div.style.webkitTransform = 'translate(-50%, -50%) rotate('+degDiv+'deg)';
    }
}

function rotateValue(degV, div, notEven) {
    degV = parseInt(div.style.transform.slice(29).slice(0,-4));

    if(div == canvas || div == triangle) {
        degMod = degV%360;
    } else degMod = degV%90;

    degV = degV - degMod;
    degMod = 0;

    if(notEven) degV = degV + 45;
    return degV;
}

function gameOverAnimatin() {
    if(gameOver() && gameOn) {
        
        triangle.style.webkitTransform = 'translate(-50%, -50%) rotate('+ rotateValue(deg, triangle) +'deg)';
        canvas.style.webkitTransform = 'translate(-50%, -50%) rotate('+ rotateValue(deg, canvas) +'deg)';
        rotateDivOne.style.webkitTransform = 'translate(-50%, -50%) rotate('+ rotateValue(degOne, rotateDivOne, 1) +'deg)';
        rotateDivTwo.style.webkitTransform = 'translate(-50%, -50%) rotate('+ rotateValue(degOne, rotateDivTwo) +'deg)';
        rotateDivThree.style.webkitTransform = 'translate(-50%, -50%) rotate('+ rotateValue(degOne, rotateDivThree, 1) +'deg)';
        rotateDivFour.style.webkitTransform = 'translate(-50%, -50%) rotate('+ rotateValue(degOne, rotateDivFour) +'deg)';
        rotateDivFive.style.webkitTransform = 'translate(-50%, -50%) rotate('+ rotateValue(degOne, rotateDivFive, 1) +'deg)';
        rotateDivSix.style.webkitTransform = 'translate(-50%, -50%) rotate('+ rotateValue(degOne, rotateDivSix) +'deg)';
        rotateDivSeven.style.webkitTransform = 'translate(-50%, -50%) rotate('+ rotateValue(degOne, rotateDivSeven, 1) +'deg)';
        rotateDivEight.style.webkitTransform = 'translate(-50%, -50%) rotate('+ rotateValue(degOne, rotateDivEight) +'deg)';
         
        gameOn = false;

        showGameOverMonitor();

    }
}

function startNewGame(e) {
    if(e.keyCode == 32) {
        if(gameOver() || gameOn == false) {
            init();
            gameOn = true;
            startMonitor.style.opacity = '0';
            gameOverMonitor.style.opacity = '0';
        }
    }
}

document.addEventListener("keydown", startNewGame);

// Get CSS value

function getStyleRuleValue(selector, style) {
    for (var i = 0; i < document.styleSheets.length; i++) {
        var mySheet = document.styleSheets[i];
        var myRules = mySheet.cssRules ? mySheet.cssRules : mySheet.rules;

        for (var j = 0; j < myRules.length; j++) {
            if (myRules[j].selectorText && myRules[j].selectorText.toLowerCase() === selector) {
                return myRules[j].style[style];
            }
        }
    }
}

function showGameOverMonitor() {
    setTimeout(function() {
        scoreDisplay.innerText = `SCORE: ${score}`;
        gameOverMonitor.style.opacity = '1';
        clearCanvas();
    }, 500);
}

