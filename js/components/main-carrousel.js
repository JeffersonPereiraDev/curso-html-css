const btnRight = document.querySelector('.button-arrow.-right');
const btnLeft = document.querySelector('.button-arrow.-left');
const elements = document.querySelector('.elements');
let move = 50;

btnRight.addEventListener('click', function(){
    move = move + 50;
    elements.style = `transform: translateX(${move}px);`;
});

btnLeft.addEventListener('click', function(){
    move = move - 50;
    elements.style = `transform: translateX(${move}px);`;
});

