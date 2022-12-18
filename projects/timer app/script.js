// -------------P O M O D O R O   T I M E R ----------------
var path = window.location.pathname;
var page = path.split("/").pop();

if (page == "uhr") {page = 'uhr.html';}

const navItems = document.querySelectorAll('li');

if (page == 'index.html') {
    navItems[3].style.backgroundColor = 'red';
}
if (page == 'uhr.html') navItems[0].style.backgroundColor = 'red';
if (page == 'stopp.html') navItems[1].style.backgroundColor = 'red';
if (page == 'wecker.html') navItems[2].style.backgroundColor = 'red';
if (page == 'timer.html') navItems[4].style.backgroundColor = 'red';


navItems[0].onclick = function() {
    window.location.href = 'uhr.html';
}

navItems[1].onclick = function() {
    window.location.href = 'stopp.html';
}

navItems[2].onclick = function() {
    window.location.href = 'wecker.html';
}

navItems[3].onclick = function() {
    window.location.href = 'index.html';
}

navItems[4].onclick = function() {
    window.location.href = 'timer.html';
}


if (page == 'index.html') {

let start_btn = document.querySelector('.start');
let reset_btn = document.querySelector('.reset');
let stopp_btn = document.querySelector('.stopp');
let settings_btn = document.querySelector('.settings_icon');
let settingsClose_btn = document.querySelector('.close');
let settingsSave_btn = document.querySelector('.save');


let minDisplay = document.querySelector('#min');
let secDisplay = document.querySelector('#sec');
let pauseDisplay = document.querySelector('.pause');
let settingsModul = document.querySelector('.settings');
let settingsBackdrop = document.querySelector('.model-backdrop');


// input fields
let inputDuration = document.querySelector('#Pomodoro_duration');
let inputShortPause = document.querySelector('#shortPause_duration');
let inputLongPause = document.querySelector('#longPause_duration');
let inputIterations = document.querySelector('#iterations_total');

//input alerts
let inputDurationAlert = document.querySelector('.pomodoro_duration_alert');
let inputShortPauseDurationAlert = document.querySelector('.shortPause_duration_alert');
let inputLongPauseDurationAlert = document.querySelector('.longPause_duration_alert');
let inputTotalIterationsAlert = document.querySelector('.iterations_total_alert');


let min = parseInt(minDisplay.innerHTML)
let sec = parseInt(secDisplay.innerHTML)


let timerOn = false;
let pause = false;
let end_sound = new Audio('/sounds/ding-sound-effect_2.mp3');
let iteration = 1;
let iterationStatus = 4;
let pomodoroDuration = 25;
let pauseDuration = 5;
let longPauseDuration = 30;

start_btn.onclick = function() {
    timerOn = true;
    start_btn.style.display = 'none';
    stopp_btn.style.display = 'block';
}

stopp_btn.onclick = function() {
    timerOn = false;
    start_btn.style.display = 'block';
    stopp_btn.style.display = 'none';
}

reset_btn.onclick = function() {
    timerOn = false;
    pause = false;
    minDisplay.innerHTML = pomodoroDuration;
    secDisplay.innerHTML = '00';
    min = pomodoroDuration;
    sec = 0;


    start_btn.style.display = 'block';
    stopp_btn.style.display = 'none';
    pauseDisplay.style.display = 'none';
    iteration = 1;
}

settings_btn.onclick = function() {
    settingsModul.style.display = 'block'
}

settingsBackdrop.onclick = function() {
    settingsModul.style.display = 'none';

    inputDuration.value = pomodoroDuration;
    inputShortPause.value = pauseDuration;
    inputLongPause.value = longPauseDuration;
    inputIterations.value = iterationStatus;

    inputDurationAlert.style.display = 'none';
    inputShortPauseDurationAlert.style.display = 'none';
    inputLongPauseDurationAlert.style.display = 'none';
    inputTotalIterationsAlert.style.display = 'none';
}

settingsClose_btn.onclick = function() {
    settingsModul.style.display = 'none';

    inputDuration.value = pomodoroDuration;
    inputShortPause.value = pauseDuration;
    inputLongPause.value = longPauseDuration;
    inputIterations.value = iterationStatus;


    inputDurationAlert.style.display = 'none';
    inputShortPauseDurationAlert.style.display = 'none';
    inputLongPauseDurationAlert.style.display = 'none';
    inputTotalIterationsAlert.style.display = 'none';
}

settingsSave_btn.onclick = function() {
    if(inputDuration.value <= 0) {
        inputDurationAlert.style.display = 'block'
      
    } else {
        pomodoroDuration = inputDuration.value; 
        minDisplay.innerHTML = pomodoroDuration;
        secDisplay.innerHTML = '00';
        min = pomodoroDuration;
        inputDurationAlert.style.display = 'none';
    }
    
    if (inputShortPause.value <= 0) {
        inputShortPauseDurationAlert.style.display = 'block';
        
    } else {
        pauseDuration = inputShortPause.value;
        inputShortPauseDurationAlert.style.display = 'none';
    }

    if (inputLongPause.value <= 0) {
        inputLongPauseDurationAlert.style.display = 'block';
        
    } else {
        longPauseDuration = inputLongPause.value;
        inputLongPauseDurationAlert.style.display = 'none';
    }

    if (inputIterations.value <= 0) {
        inputTotalIterationsAlert.style.display = 'block';
       
    } else {
        iterationStatus = inputIterations.value;
        inputTotalIterationsAlert.style.display = 'none';
    }

    if (inputDuration.value > 0 && inputShortPause.value > 0 && inputLongPause.value > 0 && inputIterations.value > 0) {
        settingsModul.style.display = 'none';
    }
    

    
}


let pomodoro = setInterval(function() {
    if(timerOn == true) {
        if(sec == 0) {
            sec = 60;
            min--
        }
        sec--
    
        if (min == 0 && sec == 0) {
            end_sound.play();
            timerOn = false;

            if (pause == false) {
                pauseDisplay.style.display = 'block';
                if (iteration != iterationStatus) min = pauseDuration;
                sec = 0;
                pause = true;

                if (iteration == iterationStatus) {
                    min = longPauseDuration;
                }
            }  else {
                pauseDisplay.style.display = 'none';
                min = pomodoroDuration;
                sec = 0
                iteration++;
                pause = false;
            }
            
            if (sec >= 10) secDisplay.innerHTML = sec;
            if (sec < 10) secDisplay.innerHTML = '0' + sec;
    
            if (min >= 10) minDisplay.innerHTML = min;
            if (min < 10) minDisplay.innerHTML = '0' + min;

            start_btn.style.display = 'block';
            stopp_btn.style.display = 'none';
        }
        if (sec >= 10) secDisplay.innerHTML = sec;
        if (sec < 10) secDisplay.innerHTML = '0' + sec;
    
        if (min >= 10) minDisplay.innerHTML = min;
        if (min < 10) minDisplay.innerHTML = '0' + min;
    }
    
     

}, 1000);

}



// --------------------------------------------------------------------------
// ----------------- UHRZEIT ------------------------------------------------
// --------------------------------------------------------------------------

if (page == 'uhr.html') {

let uhrzeitStunde = document.querySelector('#stunden');
let uhrzeitMinute = document.querySelector('#minuten');
let uhrzeitSekunde = document.querySelector('#sekunden');

let uhrzeitWochentag = document.querySelector('#wochentag');
let uhrzeitTag = document.querySelector('#tag');
let uhrzeitMonat = document.querySelector('#monat');
let uhrzeitJahr = document.querySelector('#jahr');

displayDate = function() {
    let d = new Date();

    
    if(d.getSeconds() < 10) {
        uhrzeitSekunde.innerHTML = '0' + d.getSeconds();
    } else uhrzeitSekunde.innerHTML = d.getSeconds();

    if(d.getMinutes() < 10) {
        uhrzeitMinute.innerHTML = '0' + d.getMinutes();
    } else uhrzeitMinute.innerHTML = d.getMinutes();

    if(d.getHours() < 10) {
        uhrzeitStunde.innerHTML = '0' + d.getHours();
    } else uhrzeitStunde.innerHTML = d.getHours();


    switch(d.getDay()) {
        case 1: uhrzeitWochentag.innerHTML = 'Montag, '; break;
        case 2: uhrzeitWochentag.innerHTML = 'Dienstag, '; break;
        case 3: uhrzeitWochentag.innerHTML = 'Mittwoch, '; break;
        case 4: uhrzeitWochentag.innerHTML = 'Donnerstag, '; break;
        case 5: uhrzeitWochentag.innerHTML = 'Freitag, '; break;
        case 6: uhrzeitWochentag.innerHTML = 'Samstag, '; break;
        case 0: uhrzeitWochentag.innerHTML = 'Sonntag, '; break;
    }

    if (d.getDate() < 10) {
        uhrzeitTag.innerHTML = '0' + d.getDate() + '. ';
    } else uhrzeitTag.innerHTML = d.getDate() + '. ';


    switch(d.getMonth()) {
        case 0: uhrzeitMonat.innerHTML = 'Januar '; break;
        case 1: uhrzeitMonat.innerHTML = 'Februar '; break;
        case 2: uhrzeitMonat.innerHTML = 'März '; break;
        case 3: uhrzeitMonat.innerHTML = 'Aprill '; break;
        case 4: uhrzeitMonat.innerHTML = 'Mai '; break;
        case 5: uhrzeitMonat.innerHTML = 'Juni '; break;
        case 6: uhrzeitMonat.innerHTML = 'Juli '; break;
        case 7: uhrzeitMonat.innerHTML = 'August '; break;
        case 8: uhrzeitMonat.innerHTML = 'September '; break;
        case 9: uhrzeitMonat.innerHTML = 'Oktober '; break;
        case 10: uhrzeitMonat.innerHTML = 'November '; break;
        case 11: uhrzeitMonat.innerHTML = 'Dezember '; break;
    }
    
    uhrzeitJahr.innerHTML = d.getFullYear();
}

displayDate();

let uhrzeit = setInterval(function() {
    displayDate();
}, 1000);

}


//--------------------------------------------------------------------------------
// -------------------- Stoppuhr -------------------------------------------------
//--------------------------------------------------------------------------------

if (page == 'stopp.html') {

let start_btn = document.querySelector('.start');
let reset_btn = document.querySelector('.reset');
let stopp_btn = document.querySelector('.stopp');
let intervall;

let minuten = document.querySelector('#minuten');
let sekunden = document.querySelector('#sekunden');
let mSekunden = document.querySelector('#mSekunden');

let min = 0;
let sec = 0;
let msec = 0;



start_btn.onclick = function() {
    start_btn.style.display = 'none';
    stopp_btn.style.display = 'block';
    startStoppuhr();
}

stopp_btn.onclick = function() {
    start_btn.style.display = 'block';
    stopp_btn.style.display = 'none';
    stoppStoppuhr();
}

reset_btn.onclick = function() {
    start_btn.style.display = 'block';
    stopp_btn.style.display = 'none';
    clearInterval(intervall);
    initStoppuhr();
    console.log(1);
}

function startStoppuhr() {
    intervall = setInterval(function() {
        msec++
        if(msec < 10) {
            mSekunden.innerHTML = '.0' + msec;
        } else mSekunden.innerHTML = '.' + msec;

        if(msec == 99) {
            msec = -1;
            sec++;
        }

        if(sec < 10) {
            sekunden.innerHTML = '0' + sec;
        } else sekunden.innerHTML = sec;

        if (sec == 60) {
            sec = 0;
            min++;
        }

        if(min < 10) {
            minuten.innerHTML = '0' + min;
        } else minuten.innerHTML = min;

    },10);
}

function stoppStoppuhr() {
    clearInterval(intervall);
}

function initStoppuhr() {
    msec = 0;
    sec = 0;
    min = 0;
    mSekunden.innerHTML = '.00';
    sekunden.innerHTML = '00';
    minuten.innerHTML = '00';
}

}


// --------------------------------------------------------------------
// ---------------------------TIMER------------------------------------
// --------------------------------------------------------------------

if (page == 'timer.html') {

let timer_start_btn = document.querySelector('.start');
let timer_reset_btn = document.querySelector('.reset');
let timer_stopp_btn = document.querySelector('.stopp');
let timer_edit_btn = document.querySelector('.edit');

let timer_stunden_display = document.querySelector('#timer_stunden_display');
let timer_minuten_display = document.querySelector('#timer_minuten_display');
let timer_sekunden_display = document.querySelector('#timer_sekunden_display');

let timer_stunden = document.querySelector('#timer_stunden');
let timer_minuten = document.querySelector('#timer_minuten');
let timer_sekunden = document.querySelector('#timer_sekunden');

let timer_settings = document.querySelector('.timer_settings');
let timer_settings_backdrop = document.querySelector('.model-backdrop');
let timer_settings_close_btn = document.querySelector('.close');
let timer_settings_save_btn = document.querySelector('.save');

let timer_min = timer_minuten.value;
let timer_h = timer_stunden.value;
let timer_sec = timer_sekunden.value;

let timer_stunden_alert = document.querySelector('.timer_stunden_alert');
let timer_minuten_alert = document.querySelector('.timer_minuten_alert');
let timer_sekunden_alert = document.querySelector('.timer_sekunden_alert');

let countdown;

timer_start_btn.onclick = function() {
    timer_start_btn.style.display = 'none';
    timer_stopp_btn.style.display = 'block';

    startTimer();
}

timer_stopp_btn.onclick = function() {
    timer_start_btn.style.display = 'block';
    timer_stopp_btn.style.display = 'none';
    stoppTimer();
}

timer_edit_btn.onclick = function() {
    timer_settings.style.display = 'block';
}

timer_settings_backdrop.onclick = function() {
    timer_settings.style.display = 'none';

    timer_minuten.value = timer_min;
    timer_stunden.value = timer_h;
    timer_sekunden.value = timer_sec;
}

timer_settings_close_btn.onclick = function() {
    timer_settings.style.display = 'none';

    timer_minuten.value = timer_min;
    timer_stunden.value = timer_h;
    timer_sekunden.value = timer_sec;
}

timer_settings_save_btn.onclick = function() {
    
    if(timerAlerts(timer_stunden, timer_minuten, timer_sekunden)) {

        timer_settings.style.display = 'none';

        if(timer_minuten.value.length == 0) timer_minuten.value = 0;
        if(timer_sekunden.value.length == 0) timer_sekunden.value = 0;
        if(timer_stunden.value.length == 0) timer_stunden.value = 0;

        timer_min = Math.abs(timer_minuten.value);
        timer_h = Math.abs(timer_stunden.value);
        timer_sec = Math.abs(timer_sekunden.value);

        updateDisplay();
    }
}

timer_reset_btn.onclick = function() {
    timer_start_btn.style.display = 'block';
    timer_stopp_btn.style.display = 'none';

    resetTimer();
}

function startTimer() {
    countdown = setInterval(function(){
        if(timer_min == 0 && timer_sec == 0 && timer_h == 0) {
            stoppTimer();
            return;
        }

        if(timer_sec == 0) {
            timer_sec = 60;
            if(timer_min == 0) {
                timer_min = 60;
                timer_h--;
            }
            timer_min--;
        }

        timer_sec--
        updateDisplay();
    },1000)
}

function stoppTimer() {
    clearInterval(countdown);
}


function resetTimer() {
    timer_min = timer_minuten.value;
    timer_h = timer_stunden.value;
    timer_sec = timer_sekunden.value;

    updateDisplay();
    stoppTimer();
}

function updateDisplay() {
    if(timer_sec < 10) {
        timer_sekunden_display.innerHTML = '0' + timer_sec;
    } else timer_sekunden_display.innerHTML = timer_sec;

    if(timer_min < 10) {
        timer_minuten_display.innerHTML = '0' + timer_min;
    } else timer_minuten_display.innerHTML = timer_min;

    if(timer_h < 10) {
        timer_stunden_display.innerHTML = '0' + timer_h;
    } else timer_stunden_display.innerHTML = timer_h;
}

function timerAlerts(h, mn, sc) {
    if(h.value < 0 || h.value >= 100) {
        timer_stunden_alert.style.display = 'block';
    } else {
        timer_stunden_alert.style.display = 'none';
    }

    if(mn.value < 0 || mn.value >= 60) {
        timer_minuten_alert.style.display = 'block';
    } else {
        timer_minuten_alert.style.display = 'none';
    }

    if(sc.value < 0 || sc.value >= 60) {
        timer_sekunden_alert.style.display = 'block';
    } else {
        timer_sekunden_alert.style.display = 'none';
    }

    if((h.value >= 0 && h.value < 100) && (mn.value >= 0 && mn.value < 100) && (sc.value >= 0 && sc.value < 100)) {
        return true;
    }
}
 
}



// --------------------------------------------------------------------
// ---------------------------WECKER-----------------------------------
// --------------------------------------------------------------------


if(page == 'wecker.html') {

let wecker_edit_btn = document.querySelector('#wecker-edit-btn');
let wecker_edit_display = document.querySelector('.wecker-edit');
let wecker_edit_backdrop = document.querySelector('.wecker-edit-backdrop');

// ALARM MODEL

let wecker_alarm = document.querySelector('.alarm-model');
let alarm_off_btn = document.querySelector('.alarm-off-btn');
let wecker_alarm_h = document.querySelector('#wecker-alarm-h');
let wecker_alarm_min = document.querySelector('#wecker-alarm-min');
let wecker_alarm_backdrop = document.querySelector('.alarm-model-backdop');


// Uhrzeit Display
let wecker_uhrzeit_h = document.querySelector('#wecker-uhrzeit-h');
let wecker_uhrzeit_min = document.querySelector('#wecker-uhrzeit-min');
let wecker_uhrzeit_sec = document.querySelector('#wecker-uhrzeit-sec');

let wecker_h_label = document.querySelector('#wecker-h-label');
let wecker_min_label = document.querySelector('#wecker-min-label');

let h_select = document.querySelector('#h-select');
let min_select = document.querySelector('#min-select');

let h_plus_btn = document.querySelector('#h-plus-btn');
let h_minus_btn = document.querySelector('#h-minus-btn');
let min_plus_btn = document.querySelector('#min-plus-btn');
let min_minus_btn = document.querySelector('#min-minus-btn');

let edit_save_btn = document.querySelector('.wecker-edit-save-btn')
let alarm = new Audio('./sounds/Alarm-ringtone.mp3');

let wecker_h = h_select.value;
let wecker_min = min_select.value;

edit_save_btn.onclick = function() {
    wecker_h_label.innerHTML = h_select.value;
    wecker_min_label.innerHTML = min_select.value;

    wecker_h = h_select.value;
    wecker_min = min_select.value;

    wecker_alarm_h.innerHTML = h_select.value;
    wecker_alarm_min.innerHTML = min_select.value;

    alarmOn();
    wecker_edit_display.style.display = 'none'
}


wecker_edit_btn.onclick = function() {
    wecker_edit_display.style.display = 'block';
}

wecker_edit_backdrop.onclick = function() {
    wecker_edit_display.style.display = 'none';
}

alarm_off_btn.onclick = function() {
    alarm.src = '';
    stopAlarm();
    wecker_alarm.style.display = 'none';
}

h_plus_btn.onclick = function() {
    let i = h_select.value;

    if(i == 23) {
        h_select.value = '00'
        i = 0;
    } else i++;
    
    if(i < 10) {
        h_select.value = '0' + i;
    } else  h_select.value = i;
}

h_minus_btn.onclick = function() {
    let i = h_select.value;

    if(i == 1) {
        h_select.value = '00';
        i = 0;
        return;
    } 
    
    if(i == 0) {
        h_select.value = '23';
        i = 23;
        return;
    } 

    i--;

    if(i < 10) {
        h_select.value = '0' + i;
    } else  h_select.value = i;
}

min_plus_btn.onclick = function() {
    let i = min_select.value;

    if(i == 23) {
        min_select.value = '00'
        i = 0;
    } else i++;
    
    if(i < 10) {
        min_select.value = '0' + i;
    } else  min_select.value = i;
}

min_minus_btn.onclick = function() {
    let i = min_select.value;

    if(i == 1) {
        min_select.value = '00';
        i = 0;
        return;
    } 
    
    if(i == 0) {
        min_select.value = '59';
        i = 59;
        return;
    } 

    i--;

    if(i < 10) {
        min_select.value = '0' + i;
    } else  min_select.value = i;
}

function checkWecker() {
    let wecker_date = new Date();
    let h = wecker_date.getHours();
    let min = wecker_date.getMinutes();


    if(parseInt(wecker_min_label.innerHTML) == min && parseInt(wecker_h_label.innerHTML) == h) {
        wecker_alarm.style.display = 'block';
        alarm.play();
    }
}

displayDateWecker = function() {
    let d = new Date();
    
    if(d.getSeconds() < 10) {
        wecker_uhrzeit_sec.innerHTML = '0' + d.getSeconds();
    } else wecker_uhrzeit_sec.innerHTML = d.getSeconds();

    if(d.getMinutes() < 10) {
        wecker_uhrzeit_min.innerHTML = '0' + d.getMinutes();
    } else wecker_uhrzeit_min.innerHTML = d.getMinutes();

    if(d.getHours() < 10) {
        wecker_uhrzeit_h.innerHTML = '0' + d.getHours();
    } else wecker_uhrzeit_h.innerHTML = d.getHours();
}

alarmOn = function() {
    checkWeckerIntervall = setInterval(checkWecker, 1000);
}

stopAlarm = function() {
    clearInterval(checkWeckerIntervall);
}

weckerUhzeitDisplay = setInterval(displayDateWecker, 1000);

}



