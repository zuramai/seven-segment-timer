let numbers = document.querySelectorAll('.number');

console.log(numbers)

let isTimerOn = false;
let milliseconds = 0;
let timearray = milliseconds.toString().split('');
timearray.pop(); // remove the last millisecond


let boxSettings = [
    [true,true,true,false,true,true,true],
    [false,false,true,false,false,true,false],
    [true,false,true,true,true,false,true],
    [true,false,true,true,false,true,true],
    [false,true,true,true,false,true,false],
    [1,1,0,1,0,1,1],
    [1,1,0,1,1,1,1],
    [1,0,1,0,0,1,0],
    [1,1,1,1,1,1,1],
    [1,1,1,1,0,1,1],
];


setInterval(() => {
    if(isTimerOn) milliseconds += 20;
    // console.log(milliseconds)
    changeNumber()
}, 20)
function changeNumber() {
    let el = numbers.length-1 ;
    
    let timearray = milliseconds.toString().split('');
    timearray.pop(); 
    // console.log(timearray)
    for(let i = timearray.length-1; i >= 0; i--) {
        numbers[el].setAttribute('data-number', timearray[i])
        changeToNumber(numbers[el], timearray[i]);
        el--;
    }
}


function changeToNumber(el, number) {
    let boxes = el.querySelectorAll('.box');
    
    boxSettings[number].forEach((val,index) => {
        if(val) boxes[index].classList.add('active')
        else boxes[index].classList.remove('active')
    });
}

document.getElementById('start').addEventListener('click', () => {
    isTimerOn = true;
})
document.getElementById('stop').addEventListener('click', () => {
    isTimerOn = false;
})
document.getElementById('reset').addEventListener('click', () => {
    milliseconds = 0000000;
    isTimerOn = false;
    for(let i = 0; i < numbers.length; i++) {
        changeToNumber(numbers[i], 0)
    }
    console.log(numbers)
})