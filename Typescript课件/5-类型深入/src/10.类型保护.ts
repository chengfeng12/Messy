function toUpperCase(str: string|string[]) {

    // str.length; //可以使用

    // if ((<string>str).toUpperCase) {    // 
    //     return (<string>str).toUpperCase();
    // } else {
    //     (<string[]>str).push();
    // }

    // if (typeof str === 'string') {
    //     str.toUpperCase();
    // } else {
    //     str.push();
    // }

    // if (str instanceof Array) {
    //     str.push();
    // } else {
    //     str.toUpperCase();
    // }
    
}



function canEach(data: Element[]|NodeList|Element): data is Element[]|NodeList {
    return (<NodeList>data).forEach !== undefined;
}

let eles = document.querySelectorAll('.box');

fn2(eles);

function fn2(elements: Element[]|NodeList|Element) {
    if ( canEach(elements) ) {
        elements.forEach(()=>{});
    } else {
        elements.classList.add('box');
    }
}