// function fn(): void {
    
// }
// fn();

// function fn(): never {
//     throw new Error('Error');
// }
// let a: string;
// a = fn();

// let b: never;
// let c: any = 1;
// b = c;

// let a: any;
// a = 1;

// let b: string;
// b = a;

// a.indexOf();

// function fn(a) {
//     a.inde();
// }

// let a: any;
// a.indexOf();

// let a: unknown;
// a.indexOf();

// let add = function(x: number, y: number): number {
//     return x + y;
// }

function foreach(data: string[], callback:(k: number, v: string) => void) {
    for (let i:number = 0; i<data.length; i++) {
        callback(i, data[i]);
    }
}

let arr = ['a', 'b', 'c'];

foreach( arr, function(k, v) {

} )