// cards
card1 = 'url(card1.png)';
card2 = 'url(card2.png)';
card3 = 'url(card3.png)';
card4 = 'url(card4.png)';
card5 = 'url(card5.png)';
card6 = 'url(card6.png)';
card7 = 'url(cardBack.png)';

let first = false;
let second = false;
let firstItem = false;
let secondItem = false;
let gameOn = false;

let matches = 0;
let clicks = 0;
let s = 0;
let record = 0;

let grid_item_1 = document.querySelector('.card1');
let grid_item_2 = document.querySelector('.card2');
let grid_item_3 = document.querySelector('.card3');
let grid_item_4 = document.querySelector('.card4');
let grid_item_5 = document.querySelector('.card5');
let grid_item_6 = document.querySelector('.card6');

let grid_item_7 = document.querySelector('.card7');
let grid_item_8 = document.querySelector('.card8');
let grid_item_9 = document.querySelector('.card9');
let grid_item_10 = document.querySelector('.card10');
let grid_item_11 = document.querySelector('.card11');
let grid_item_12 = document.querySelector('.card12');

let newGameBtn = document.getElementById('newGame');
let matchesTracker = document.getElementById('matches');
let clicksTracker = document.getElementById('clicksTotal');
let timeTracker = document.getElementById('time');
let recordTracker = document.getElementById('record');

let cards = [card1, card2, card3, card4, card5, card6, card1, card2, card3, card4, card5, card6];
let gridItems = [grid_item_1, grid_item_2, grid_item_3, grid_item_4, grid_item_5, grid_item_6, grid_item_7, grid_item_8, grid_item_9, grid_item_10, grid_item_11, grid_item_12];
arr = shuffle(cards);

function check() {
    console.log('loaded');
}

function init() {
    first = false;
    second = false;
    firstItem = false;
    secondItem = false;
    gameOn = false;

    s = 0;

    arr = shuffle(cards);

    matches = 0;
    matchesTracker.innerHTML = '0';

    clicks = 0;
    clicksTracker.innerHTML = '0';

    timeTracker.innerHTML = '0.0 sec';


    for (let i = 0; i < gridItems.length; i++) {
        gridItems[i].style.backgroundImage = card7;
    }
}


grid_item_1.addEventListener('click', function() {

    if(this.style.backgroundImage == 'none') {
        return;
    }

    grid_item_1.style.backgroundImage = arr[0];
    firstSec(grid_item_1.style.backgroundImage, 1);
    
    removeCards();
    reset();
});

grid_item_2.addEventListener('click', function() {

    if(this.style.backgroundImage == 'none') {
        return;
    }

    grid_item_2.style.backgroundImage = arr[1];
    firstSec(grid_item_2.style.backgroundImage,2);
   
    removeCards();
    reset();
});


grid_item_3.addEventListener('click', function() {

    if(this.style.backgroundImage == 'none') {
        return;
    }
    grid_item_3.style.backgroundImage = arr[2];
    firstSec(grid_item_3.style.backgroundImage,3);
   
    removeCards();
    reset();
});

grid_item_4.addEventListener('click', function() {

    if(this.style.backgroundImage == 'none') {
        return;
    }
    grid_item_4.style.backgroundImage = arr[3];
    firstSec(grid_item_4.style.backgroundImage,4);
   
    removeCards();
    reset();
});

grid_item_5.addEventListener('click', function() {

    if(this.style.backgroundImage == 'none') {
        return;
    }
    grid_item_5.style.backgroundImage = arr[4];
    firstSec(grid_item_5.style.backgroundImage,5);
  
    removeCards();
    reset();
});

grid_item_6.addEventListener('click', function() {

    if(this.style.backgroundImage == 'none') {
        return;
    }
    grid_item_6.style.backgroundImage = arr[5];
    firstSec(grid_item_6.style.backgroundImage,6);

    removeCards();
    reset();
});

grid_item_7.addEventListener('click', function() {

    if(this.style.backgroundImage == 'none') {
        return;
    }
    grid_item_7.style.backgroundImage = arr[6];
    firstSec(grid_item_7.style.backgroundImage,7);
   
    removeCards();
    reset();
});

grid_item_8.addEventListener('click', function() {

    if(this.style.backgroundImage == 'none') {
        return;
    }
    grid_item_8.style.backgroundImage = arr[7];
    firstSec(grid_item_8.style.backgroundImage,8);
  
    removeCards();
    reset();
});

grid_item_9.addEventListener('click', function() {

    if(this.style.backgroundImage == 'none') {
        return;
    }
    grid_item_9.style.backgroundImage = arr[8];
    firstSec(grid_item_9.style.backgroundImage),9;
  
    removeCards();
    reset();
});

grid_item_10.addEventListener('click', function() {

    if(this.style.backgroundImage == 'none') {
        return;
    }
    grid_item_10.style.backgroundImage = arr[9];
    firstSec(grid_item_10.style.backgroundImage,10);
  
    removeCards();
    reset();
});

grid_item_11.addEventListener('click', function() {

    if(this.style.backgroundImage == 'none') {
        return;
    }
    grid_item_11.style.backgroundImage = arr[10];
    firstSec(grid_item_11.style.backgroundImage,11);

    removeCards();
    reset();
});

grid_item_12.addEventListener('click', function() {

    if(this.style.backgroundImage == 'none') {
        return;
    }
    grid_item_12.style.backgroundImage = arr[11];
    firstSec(grid_item_12.style.backgroundImage,12);
 
    removeCards();
    reset();
});


newGameBtn.addEventListener('click', function() {
    init();
});





// FISHER YADES SHUFFLE
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        let t = array[i];
        array[i] = array[j];
        array[j] = t;
    }

    return array;
}


function checkSameCards() {
    
    if (second == first) {
        return true;
    }

    if (first != false && second != false && first != second) {
        return false;
    }


    
}


function firstSec(item, n) {

    clicks++;
    gameOn = true;
    clicksTracker.innerHTML = clicks;
        
    if (first == false) {
        first = item;
        firstItem = n;
    }

    else {
        secondItem = n;
        if (secondItem == firstItem){
            return;
        }
        second = item;
    }
}

function reset() {
    if (first != false && second != false) {
        first = false;
        second = false;
    }  
}

function removeCards() {
    if (checkSameCards() == true) {

        matches++;
        
        for (let i = 0; i < gridItems.length; i++) {
            if (gridItems[i].style.backgroundImage == first) {
                setTimeout(function() {
                    gridItems[i].style.backgroundImage = 'none';
                    gridItems[i].style.backgroundColor = 'transparent';
                },200);
                
            }
        }
    } 

    else if (checkSameCards() == false) {
        for (let i = 0; i < gridItems.length; i++) {
            if (gridItems[i].style.backgroundImage != 'none') {
                setTimeout(function() {
                    gridItems[i].style.backgroundImage = card7;
                },500);
            }
        }
    }
}




setInterval(function() {
    if(clicks > 0 && matches < 6) {
        s++;
        timeTracker.innerHTML = s/10 + ' sec';
    }
    if (matches == 6) {
        
        if (s < record || record == 0) {
            record = s;
            recordTracker.innerHTML = record/10 + ' sec';
        }
    }
    matchesTracker.innerHTML = matches;
},100);


function preloadImage(url) {
    var img = new Image();
    img.src = url;
}

preloadImage('card1.png');
preloadImage('card2.png');
preloadImage('card3.png');
preloadImage('card4.png');
preloadImage('card5.png');
preloadImage('card6.png');










