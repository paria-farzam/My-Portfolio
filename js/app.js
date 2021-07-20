// select elements
const myLocation = document.querySelector("#location");
const myPhone = document.querySelector("#phone");
const myMail = document.querySelector("#mail");
const mySkype = document.querySelector("#skype");
const close = document.querySelector("#closeBtn");
const mainContainer = document.querySelector('#icons');
let container = document.querySelector('#information');
let iconText = document.querySelector('#iconInfo');

// add event listeners
myLocation.addEventListener("click", shareMyLocation);
myPhone.addEventListener("click", shareMyPhone);
myMail.addEventListener("click", shareMyMail);
mySkype.addEventListener("click", shareMySkype);
close.addEventListener('click', closeTextBox);


//share icon information
function shareMyLocation(){
    // deleting other icons
    myPhone.classList.add('d-none');
    myMail.classList.add('d-none');
    mySkype.classList.add('d-none');

    // makring 'information div' visible
    container.classList.remove('d-none');
    iconText.innerHTML = 'Mashhad, Iran';
    mainContainer.style.padding = '.4rem 2rem';
}

function shareMyPhone(){
    // deleting other icons
    myLocation.classList.add('d-none');
    myMail.classList.add('d-none');
    mySkype.classList.add('d-none');

    // makring 'information div' visible
    container.classList.remove('d-none');
    iconText.innerHTML = '+98 915 979 6944';
    mainContainer.style.padding = '.4rem 2rem';
}

function shareMyMail(){
    // deleting other icons
    myPhone.classList.add('d-none');
    myLocation.classList.add('d-none');
    mySkype.classList.add('d-none');

    // makring 'information div' visible
    container.classList.remove('d-none');
    iconText.innerHTML = 'paria.farzam@outlook.com';
    mainContainer.style.padding = '.4rem 2rem';
}

function shareMySkype(){
    // deleting other icons
    myPhone.classList.add('d-none');
    myMail.classList.add('d-none');
    myLocation.classList.add('d-none');

    // makring 'information div' visible
    container.classList.remove('d-none');
    iconText.innerHTML = 'live:.cid.bfbbae7592f536ad';
    mainContainer.style.padding = '.4rem 2rem';
}

// closing the text box and showing all icons
function closeTextBox(){
    //closing the text box
    container.classList.add('d-none');

    //add all icons
    mySkype.classList.remove('d-none');
    myPhone.classList.remove('d-none');
    myMail.classList.remove('d-none');
    myLocation.classList.remove('d-none');
    mainContainer.style.padding = '1rem 2rem';
}