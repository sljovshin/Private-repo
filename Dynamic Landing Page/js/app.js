// Dom Elements
const   time = document.getElementById('time'),
        greeting = document.getElementById('greeting'),
        name = document.getElementById('name'),
        focus = document.getElementById('focus');

// Show time

function showTime() {
    let today = new Date(),
        hour = today.getHours(),
        min = today.getMinutes(),
        sec = today.getSeconds();
    //Output time
        
    time.innerHTML = `${addZero(hour)}<span>:</span>${addZero(min)}<span>:</span>${addZero(sec)}`
    
    setTimeout(showTime, 1000);

}

// Add Zeros
function addZero(n) {
    return (parseInt(n, 10) < 10 ? '0' : '') + n;
}

function setBG() {
    let today = new Date(),
        hour = today.getHours();

    if (hour < 6) {
        //night
        document.body.style.backgroundImage = "url('../img/night.jpg')";
        document.body.style.color = "white";
        greeting.textContent = 'Good Night';
    } else if (hour < 12) {
        //morning
        document.body.style.backgroundImage = "url('../img/morning.jpg')";
        document.body.style.color = "white";
        greeting.textContent = 'Good Morning';
        
    } else if (hour < 17) {
        //daytime
        document.body.style.backgroundImage = "url('../img/midday.jpg')";
        greeting.textContent = 'Good Day';
    } else {
        //evening
        document.body.style.backgroundImage = "url('../img/evening.jpg')";
        greeting.textContent = 'Good Evening';
    }
}

// Set Name
function setName(e) {

    console.log("setname");
    
    if(e.type === 'keypress') {
        //make sure enter is pressed
        if (e.which == 13 || e.keyCode == 13) { 
            localStorage.setItem('name', e.target.innerText);
            name.blur();
        }
    } else {
        localStorage.setItem('name', e.target.innerText);
    }
}
// Get Name
function getName() {
    if (localStorage.getItem('name') === null) {
        name.textContent = '[Enter Name]';
    } else {
        name.textContent = localStorage.getItem('name');
    }
}



// Set Focus
function setFocus(e) {
    if(e.type === 'keypress') {
        if (e.which == 13 || e.keyCode == 13) { 
            localStorage.setItem('focus', e.target.innerText);
        }
    } else {
        localStorage.setItem('focus', e.target.innerText);
    }
}

// Get Name
function getFocus() {
    if (localStorage.getItem('focus') === null || localStorage.getItem('focus') === '') {
        focus.textContent = '[Enter Focus]';
    } else {
        focus.textContent = localStorage.getItem('focus');
    }
}
console.log('focus: ' +localStorage.getItem('focus'));

name.addEventListener('keypress', setName);
name.addEventListener('blur', setName);
focus.addEventListener('keypress', setFocus);
focus.addEventListener('blur', setFocus);

// run
showTime();
setBG();
getName();
getFocus();