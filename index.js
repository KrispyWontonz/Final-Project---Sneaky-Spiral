var path = document.getElementById('the-path');

var roundTo = function (input, sigdigs) {
  return Math.round(input * Math.pow(10, sigdigs) ) / Math.pow(10, sigdigs);
}

var makeSpiralPoints = function(origin, revolutions, pointCount, clockwise, padding){
  var direction = clockwise ? 1 : -1;
  var circ = padding / (2 * Math.PI);
  var step = (2 * Math.PI * revolutions) / pointCount;
  var points = [], angle, x, y;
  for (var i = 0; i <= pointCount ; i++){
    angle = direction * step * i;
  	x = roundTo((circ * angle) * Math.cos(angle) + origin.x, 2);
    y = roundTo((circ * angle) * Math.sin(angle) + origin.y, 2);
    points.push(x + " " + y);
  }
  
  return('M ' + points.shift() + ' S ' + points.join(' '));
}

path.setAttribute('d', makeSpiralPoints({x:75,y:75},20, 2048, false, 4));

// const boxContainer = document.getElementById("container")

// const words = ["Focus", "Study", "Train", "Adapt", "Power"]

// function randomRange(min, max) {
//     return Math.floor(Math.random() * (max - min) + min);
// }
// let indexNumber = 0;

// let prevWordIndex = 0;
// let wordIndex = 0;
// function addWord() {
//     let wordDiv = document.createElement("div");
// }
// wordDiv.classList.add("box");
// wordDiv.style.opacity = 0;
// wordDiv.innerHTML = `<h1>${indexNumber}</h1>`;
// wordDiv.style.top = `${randomRange(10, 90)}vh`;
// wordDiv.style.left = `${randomRange(10, 90)}vw`;

// prevIndex = wordIndex;
// colorIndex = Math.floor(Math.random() * words.length);
// if (prevIndex == wordIndex) {
//     wordIndex = Math.floor(Math.random() * words.length);
// }
// wordDic.style.backgroundColor = words[wordIndex];
// boxContainer.appendChild(wordDiv);

// wordDiv.style.transition = "opacity 3s ease"
// indexNumber++;
// setTimeout(()=> {
//     wordDiv.style.opacity - 1;
// }, 500);

// window.addEventListener("DOMContentLoaded", function() {
//     let timer = 0;
//     setInterval(addWord, 1500);
//     document.onmousemove = function() {
//         let boxes = document.getElementsByClassName("box");
//         if (boxes.length > 0) {
//             for (let i=0; i < words.length; i++) {
//                 removeFadeout(boxes[i], 1500);
//                 indexNumber = 0
//             }
//         }
//     };  
// });

// function removeFadeOut(e1, speed) {
//     let seconds = speed / 1000;
//     el.style.transition = `opacity ${seconds}s ease`;
//     el.style.opacity = 0;
//     setTimeout(function() {
//         el.parentNode.removeChild(el);
//     }, speed);
// }