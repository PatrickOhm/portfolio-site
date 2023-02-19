const projectCloseBtn = document.querySelectorAll('.model-close-btn');

const model = document.querySelector('.model');
const modelProject = document.querySelector('.project_model');
const projectBtn = document.querySelector('.projects');

const aboutBtn = document.querySelector('.about');
const skillsBtn = document.querySelector('.skills');
const contactBtn = document.querySelector('.contact');

const modelAbout = document.querySelector('.about_model');
const modelSkills = document.querySelector('.skills_model');
const modelContact = document.querySelector('.contact_model');


let timeOut;


projectBtn.onclick = function () {
    modelProject.style.display = 'block';
    timeOut = setTimeout(modelAnimationActive, 10, modelProject);
}

aboutBtn.onclick = function () {
    modelAbout.style.display = 'block';
    timeOut = setTimeout(modelAnimationActive, 10, modelAbout);
}

skillsBtn.onclick = function () {
    modelSkills.style.display = 'block';
    timeOut = setTimeout(modelAnimationActive, 10, modelSkills);
}

contactBtn.onclick = function () {
    modelContact.style.display = 'block';
    timeOut = setTimeout(modelAnimationActive, 10, modelContact);
}



let lastPage;


if (performance.navigation.type == performance.navigation.TYPE_RELOAD) {
    lastPage = '';
} else {
    lastPage = document.referrer;
    console.log(lastPage);
}



// Close buttons 

projectCloseBtn[0].onclick = function () {
    modelAnimationClose(modelProject);
    let timeOutClose = setTimeout(function () {
        modelProject.style.display = 'none';
    }, 600);
}

projectCloseBtn[1].onclick = function () {
    modelAnimationClose(modelAbout);
    let timeOutClose = setTimeout(function () {
        modelAbout.style.display = 'none';
    }, 600);
}

projectCloseBtn[2].onclick = function () {
    modelAnimationClose(modelSkills);
    let timeOutClose = setTimeout(function () {
        modelSkills.style.display = 'none';
    }, 600);
}

projectCloseBtn[3].onclick = function () {
    modelAnimationClose(modelContact);
    let timeOutClose = setTimeout(function () {
        modelContact.style.display = 'none';
    }, 600);
}

const blueCaveDiv = document.querySelector('.blueCaveDiv');
const timerDiv = document.querySelector('.timer_img_div');
const memoryDiv = document.querySelector('.memory_div');
const SnakeDiv = document.querySelector('.CrazySnakeDiv');
const budgetDiv = document.querySelector('.budgetDiv');

SnakeDiv.onclick = function () {
    if (window.innerWidth > 600) {
        location.href = './projects/snake/index.html';
    }
}

blueCaveDiv.onclick = function () {
    if (window.innerWidth > 600) {
        location.href = './projects/ Platformer/index.html';
    }
}

timerDiv.onclick = function () {
    if (window.innerWidth > 600) {
        location.href = './projects/TIMER%20APP/uhr.html';
    }
}

memoryDiv.onclick = function () {
    if (window.innerWidth > 600) {
        location.href = './projects/MemoryGame/MemoryCards/index.html';
    }
}

budgetDiv.onclick = function () {
    if (window.innerWidth > 600) {
        location.href = 'https://budgets-buddy.netlify.app';
    }
}


if (lastPage.includes('index') || lastPage.includes('%20platformer') || lastPage.includes('timer') || lastPage.includes('memorycards') || lastPage.includes('snake')) {
    modelProject.style.display = 'block';
    modelAnimationActive(modelProject);
}

// Model animation 

function modelAnimationActive(element) {
    let name = 'model-active';
    let arr = element.className.split(' ');

    if (arr.indexOf(name) == -1) {
        element.className += ' ' + name;
    }
}

function modelAnimationClose(element) {
    element.className = element.className.replace(/\bmodel-active\b/g, "");
}