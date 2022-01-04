// // // interface Person {
// // //     name: string;
// // //     age: number;
// // // };

// // // let colors = {
// // //     color1: 'red',
// // //     color2: 'blud'
// // // };

// // // type a = keyof Person;

// // // let data: a;
// // // data = 'name';
// // // data = 'age';
// // // data = 'gender';

// // // type b = keyof colors;

// // interface Person {
// //     name: string;
// //     age: number;
// // }
// // let p1:Person = {
// //     name: 'zMouse',
// //     age: 35
// // }
// // let p2 = {
// //     name: 'zMouse',
// //     age: 35,
// //     gender: '男'
// // }
// // function getPersonVal(k: keyof typeof p2) {
// //     return p2[k];
// // }

// // getPersonVal('name');




// function css(ele: Element, attr: keyof CSSStyleDeclaration) {
//     return getComputedStyle(ele)[attr];
// }

// let box = document.querySelector('.box');
// if (box) {
//     css(box, 'opacity');
// }