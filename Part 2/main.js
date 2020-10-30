
'use strict';

var divE = document.querySelector('.shape');
var rotateD = 0;

const firstClick = () => {
  divE.innerHTML = '';
  const shapes = ['square', 'circle', 'triangle'];
  var randS = Math.floor(Math.random() * shapes.length);
  var shapeE = document.createElement('div');
  shapeE.classList.add(`${shapes[randS]}`);
  if (shapes[randS] !== 'triangle') {
    shapeE.style.width = `${Math.floor(Math.random() * 200) + 1}px`;
    shapeE.style.height = `${Math.floor(Math.random() * 200) + 1}px`;
    shapeE.style.backgroundColor = RandomColor();
  } else {
    shapeE.style.borderLeft = `${
      Math.floor(Math.random() * 200) + 1
    }px solid transparent`;
    shapeE.style.borderRight = `${
      Math.floor(Math.random() * 200) + 1
    }px solid transparent`;
    shapeE.style.borderBottom = `${
      Math.floor(Math.random() * 200) + 1
    }px solid ${RandomColor()}`;
  }
  shapeE.style.margin = '100px 0';
  shapeE.setAttribute('onclick', 'secondClick(event)');
  divE.appendChild(shapeE);
};

const secondClick = (event) => {
  if (event.target.classList.contains('choose')) return;
  event.target.classList.add('choose');


  var deleteB = document.createElement('button');
  deleteB.innerHTML = 'מחיקה';
  deleteB.setAttribute('onclick', 'thirdClick()');
  divE.appendChild(deleteB);

  var rotateB = document.createElement('button');
  rotateB.innerHTML = 'סיבוב';
  rotateB.setAttribute('onclick', 'fourthClick()');
  divE.appendChild(rotateB);
};

const thirdClick = () => {
  divE.removeChild(divE.childNodes[0]);
  divE.innerHTML = '';
};

const fourthClick = () => {
  var shapeE = divE.childNodes[0];
  shapeE.style.transform = `rotate(${rotateD}deg)`;
  rotateD += 5;
};

const RandomColor = () => {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};