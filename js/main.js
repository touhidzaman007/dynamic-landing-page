// DOM Elements
const time = document.getElementById("time"),
      greeting = document.getElementById("greeting"),
      myname = document.getElementById("name"),
      focus = document.getElementById("focus"),
      hobby = document.getElementById("hobby"),
      searchBtn = document.getElementById('searchBtn'),
      input = document.getElementById('q');

// Options 
const showAmPm = true;


// Show The Time
function showTime() {
    // let today = new Date(2023, 06, 04, 18, 02, 02),
    let today = new Date(),
		hour = today.getHours(),
		min = today.getMinutes(),
		sec = today.getSeconds();

	// Sets AM or PM
	const amPm = hour >= 12 ? 'PM' : 'AM';

	// 12 Hour Format
	hour = hour % 12 || 12;

	// Output The Time
	time.innerHTML = `${hour}<span>:</span>${addZero(min)}<span>:</span>${addZero(sec)} ${showAmPm ? amPm : ''}`;

	setTimeout(showTime, 1000);
}

// Add Zero's
function addZero(n){
    return (parseInt(n, 10) < 10 ? '0': '') + n;
}

// Set Background & Greeting
function setBackgroundGreet(){
    // let today = new Date(2023, 06, 04, 18, 02, 02),
    let today = new Date(),
        hour = today.getHours();

    if(hour < 12){
        // Morning
        document.body.style.backgroundImage = "url('../img/morning.jpg')";
        document.body.style.backgroundRepeat = "no-repeat";
        document.body.style.backgroundSize = "cover";
        document.body.style.color= '#fff';
        hobby.style.color = '#000';
        greeting.textContent = 'Good Morning,';
    }else if(hour < 18){
        // Afternoon
        document.body.style.backgroundImage = "url('../img/afternoon.jpg')";
        document.body.style.backgroundRepeat = "no-repeat";
        document.body.style.backgroundSize = "cover";
        document.body.style.color= '#fff';
        greeting.textContent = 'Good Afternoon,';
    }else{
        // Evening
        document.body.style.backgroundImage = "url('../img/evening.jpg')";
        document.body.style.backgroundRepeat = "no-repeat";
        document.body.style.backgroundSize = "cover";
        greeting.textContent = 'Good Evening,';
        document.body.style.color= '#fff';
    }
}

// Get Hobby
function getHobby(){
    if(localStorage.getItem('hobby') === null){
        hobby.textContent = '[Enter Hobby]';
    }else{
        hobby.textContent = '“I Love ' + localStorage.getItem('hobby') + '”';
        // Hide Hobby Ques
        const ques = document.getElementById("hobby-ques");
        ques.hidden = true;
        ques.style.display = 'none';
        
        // Set Border
        hobby.style.border = '2px dashed #fff';
        hobby.style.padding = '15px';
    }
}

// Set Hobby
function setHobby(e){
    if(e.type === 'keypress'){
        // make sure Enter pressed
        if(e.which == 13 || e.keycode == 13){
            localStorage.setItem('hobby', e.target.innerText);
            hobby.blur();
        }
    }else{
        localStorage.setItem('hobby', e.target.innerText);
    }
}

// Get Name
function getName(){
    if(localStorage.getItem('myname') === null){
        myname.textContent = '[Enter Name]'; 
    }else{
        myname.textContent = localStorage.getItem('myname') + '!';
    }
}

// Set Name
function setName(e){
    if(e.type === 'keypress' ){
        // Make sure Enter is pressed
        if(e.which == 13 || e.keycode == 13){
            localStorage.setItem('myname', e.target.innerText);
            myname.blur();
        }
    }else {
        localStorage.setItem('myname', e.target.innerText);
    }
}

// Get Focus
function getFocus(){
    if(localStorage.getItem('focus') === null){
        focus.textContent = '[Enter Focus]'; 
    }else{
        focus.textContent = localStorage.getItem('focus');
        // Hide Focus Ques
        const ques = document.getElementById('focus-ques');
        ques.hidden = true;
        ques.style.display = 'none';
    }
}

// Set Focus
function setFocus(e){
    if(e.type === 'keypress' ){
        // Make sure Enter is pressed
        if(e.which == 13 || e.keycode == 13){
            localStorage.setItem('focus', e.target.innerText);
            focus.blur();
        }
    }else {
        localStorage.setItem('focus', e.target.innerText);
    }
}

// Search Browse with input
function browsingInput(){
    if(input.value === ""){
        searchBtn.disabled = true;
    }else {
        searchBtn.disabled = false;
    }
}


// Listening Hobby
hobby.addEventListener('keypress', setHobby);
hobby.addEventListener('blur', setHobby);

// Listening Name
myname.addEventListener('keypress', setName);
myname.addEventListener('blur', setName);

// Listening Focus
focus.addEventListener('keypress', setFocus);
focus.addEventListener('blur', setFocus);

// Listening Search Button
searchBtn.disabled = true;
input.addEventListener('change', browsingInput);


/* Run Functions */
// Show Time
showTime();
// Set Background & Show Greetings
setBackgroundGreet();
// Get User Name
getName();
// Get User's Focus
getFocus();
// Get User's Hobby
getHobby();
