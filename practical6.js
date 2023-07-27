'use strict';
// Даны картинки. Привяжите к каждой картинке событие, чтобы по клику на
//картинку console.log выводился ее src.
// let elems = document.getElementsByTagName('img');
// for(let i = 0; i <elems.length; i++){
//     elems[i].onclick = func;
// }
// function func(){
//     console.log(this.getAttribute('alt'));
// }

//Даны ссылки. Привяжите всем ссылкам событие - по наведению на ссылку в
//атрибут title запишется ее текст
// let elems = document.querySelectorAll('a');
// for( let i = 0; i<elems.length;i++){
//     elems[i].addEventListener('mouseover', func);
// }
// function func(){
//     this.innerHTML = this.innerHTML + '(' + this.href + ')';
// }
//Привяжите всем ссылкам событие - по наведению на ссылку в конец ее

//текста дописывается ее href в круглых скобках
// let elems = document.querySelectorAll('a');
// for( let i = 0; i<elems.length;i++){
//     elems[i].addEventListener('mouseover', func);
// }
// function func(){
//     this.innerHTML = this.innerHTML + '(' + this.href + ')';
//     this.removeEventListener('mouseover', func);
// }

//изменить фон страници нажатием на страницу
// function  c() {
//     document.body.style.backgroundColor =  `rgb(${Math.round(Math.random()*255)}, ${Math.round(Math.random()*255)}, ${Math.round(Math.random()*255)})`;
// }
// document.onclick = c;

//data-атрибуты
// function func(){
//     let elem = document.getElementById('elem');
//     //console.log(elem.dataset.price);
//     //console.log(elem.dataset.productNumber);
//     console.log(elem.getAttribute('data-price'));
//     console.log(elem.getAttribute('data-product-number'));
// }


//Домашнее задание

//Привяжите всем инпутам следующее событие - по потери фокуса каждый
//инпут выводит свое value в абзац с id="test"
// Задание 1 ответ:
// let elemInput = document.getElementsByTagName('input');
// let pTest = document.getElementById('test');
//
// for (let i = 0; i < elemInput.length; i++) {
//     elemInput[i].addEventListener('mouseout', func);
// }
// function func () {
//     pTest.innerHTML = this.getAttribute('value');
// }


// Для всех инпутов сделайте так, чтобы они выводили свой value алертом
//при нажатии на любой из них, но только по первому нажатию. Повторное
//нажатие на инпут не должно вызывать реакции.
// Задание 2 ответ:
// let elemInput = document.getElementsByTagName('input');
//
// for (let i = 0; i < elemInput.length; i++) {
//     elemInput[i].addEventListener('click', func);
// }
// function func () {
//     let textValue= this.getAttribute('value')
//     alert(textValue);
//     this.removeEventListener('click', func);
// }


// Даны абзацы с числами. По нажатию на абзац в нем должен появится
//квадрат числа, которое он содержит.
// Задание 3 ответ:
// let someNumber = document.getElementsByTagName('p');
//
// for (let i = 0; i < someNumber.length; i++) {
//     //someNumber[i].addEventListener('click');
//     let n = someNumber[i].innerHTML
//     n = Number(n);
//     someNumber[i].addEventListener('click', ()=> someNumber[i].innerHTML = n * n);
// }


// Даны инпуты. Сделайте так, чтобы все инпуты по потери фокуса проверяли
//свое содержимое на правильное количество символов. Сколько символов
//должно быть в инпуте, указывается в атрибуте data-length. Если вбито
//правильное количество, то граница инпута становится зеленой, если
//неправильное - красной.
// Задание 4 ответ:
function func2(b) {
    let two = document.getElementById('two');
    let twoLengthOfValue = two.value.length;
    for (let i = 0; i < twoLengthOfValue; i++) {
        let lengthData = two.getAttribute('data-length');
        if (lengthData > twoLengthOfValue) {
            //console.log("число атрибута lengthData " + lengthData + " больше " + twoLengthOfValue);
            two.style.borderColor = "#ff0000";
            two.style.borderWidth = "5px";
        } else if (lengthData < twoLengthOfValue) {
            //console.log("число атрибута lengthData " + lengthData + " меньше " + twoLengthOfValue);
            two.style.borderColor = "#ff0000";
            two.style.borderWidth = "5px";
        } else {
            two.style.borderColor = "#00ff00";
            two.style.borderWidth = "5px";

        }
    }
}

function func3(c) {
    let three = document.getElementById('three');
    let threeLengthOfValue = three.value.length;
    for (let i = 0; i < threeLengthOfValue; i++) {
        let lengthData = three.getAttribute('data-length');
        if (lengthData > threeLengthOfValue) {
            three.style.borderColor = "#ff0000";
            three.style.borderWidth = "5px";
        } else if (lengthData < threeLengthOfValue) {
            three.style.borderColor = "#ff0000";
            three.style.borderWidth = "5px";
        } else {
            three.style.borderColor = "#00ff00";
            three.style.borderWidth = "5px";

        }
    }
}

function func4(a) {
    let four = document.getElementById('four');
    let fourLengthOfValue = four.value.length;
    for (let i = 0; i < fourLengthOfValue; i++) {
        let lengthData = four.getAttribute('data-length');
        if (lengthData > fourLengthOfValue) {
            four.style.borderColor = "#ff0000";
            four.style.borderWidth = "5px";
        } else if (lengthData < fourLengthOfValue) {
            four.style.borderColor = "#ff0000";
            four.style.borderWidth = "5px";
        } else {
            four.style.borderColor = "#00ff00";
            four.style.borderWidth = "5px";

        }
    }
}
