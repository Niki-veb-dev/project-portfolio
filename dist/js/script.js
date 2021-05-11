const hamburger = document.querySelector('.hamburger'),
        menu = document.querySelector('.menu'),
        closeElem = document.querySelector('.menu__close');


hamburger.addEventListener('click', () => {
    menu.classList.add('active');
});

closeElem.addEventListener('click', () => {
    menu.classList.remove('active');
});

const ratingCounter = document.querySelectorAll('.rating__counter'),
        lines = document.querySelectorAll('.rating__line span');

ratingCounter.forEach( (item, i) => {
    lines[i].style.width = item.innerHTML; 
});


var number = 5;
var string = "Hello";
var sym = Symbol();
var boolean = true;
null;
undefined;
var obj = {};

console.log();
let person = {
    name: "John",
    age: 25,
    isMarried: false
}
// console.log(person[]);
let arr = ['plum.png', 'orange.jpg', 'apple.bmp'];
// console.log(arr[2]);
// // alert("Hello bitch");
let answer = +prompt("Are u here? do you have 18 year");
console.log(typeof(answer));
