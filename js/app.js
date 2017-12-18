'use esversion: 6';

let selectedElement;

// Get widget areas
const widgetLayout = document.querySelector('.widget-layout');
const iconUl = document.createElement('ul');
const iconLi = document.createElement('li');

const spanX = document.querySelector('.close-btn');

spanX.addEventListener('click', btn => {
  console.log(btn, this);
  const popUpAlert = document.querySelector('.popup-alert');
  popUpAlert.style.display = 'none';
});

const sideNav = document.querySelector('.side-nav');
const anchorLink = document.querySelector('.link');
sideNav.addEventListener('click', btn => {

});

const sendBtn = document.querySelector('#sendBtn');
const dmUserInput = document.querySelector('#error');
const dmUserTextArea = dmUserInput.nextElementSibling;

const saveBtn = document.querySelector('#save-btn');
saveBtn.addEventListener('click', e => {
  if(saveBtn.innerText === 'SAVE') {
    saveBtn.innerText = 'SAVED';
  // if saved change back after 2 seconds
}
setInterval(function chnage() {
     setTimeout(changeBack, 3000);
 }, 2000);


});


function changeBack(e) {
    saveBtn.innerText = 'SAVE';
  // if saved change back after 2 seconds
}
makeEventLisetener(sendBtn);

function borderColor(input, color) {
  input.style.borderColor = color;
}

function btnColor(btn, color, message) {
  btn.style.color = '#fff';
  btn.style.background = color;
  btn.innerText = message;
}

function makeEventLisetener(button) {
  button.addEventListener('click', e => {
    console.log(e.target + 'this is working');
    if(!dmUserInput.value) {
        btnColor(sendBtn, 'red', 'FORM IS EMPTY');
    }
    if (dmUserInput.value) {
      btnColor(sendBtn, 'green', 'MESSAGE SENT');
    }
    if(!dmUserTextArea.value) {
        btnColor(sendBtn, 'red', 'FORM IS EMPTY');
    }
    if (dmUserTextArea.value) {
      btnColor(sendBtn, 'green', 'MESSAGE SENT');
    }

  });
}

const dmForm = document.querySelector('#dm-user');
dmForm.addEventListener('input', e => {
  if(dmUserInput.value) {
      borderColor(dmUserInput, 'green');
      btnColor(sendBtn, '#7477bf', 'SEND');
    }
  if(dmUserTextArea.value) {
      borderColor(dmUserTextArea, 'green');
      btnColor(sendBtn, '#7477bf', 'SEND');
    }
  if(!dmUserInput.value) {
      borderColor(dmUserInput, 'red');
    }
  if(!dmUserTextArea.value) {
      borderColor(dmUserTextArea, 'red');
    }
});
