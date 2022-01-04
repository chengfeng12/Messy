// interface type1 {
//     x: number;
//     y: number;
// }
// interface type2 extends type1 {
//     z: string;
// }

// let a: type2 = {
//     x: 1,
//     y: 2,
//     z: 'kaikeba'
// };


type type1 = {
    x: number;
    y: number;
}
function fn<T extends type1>(args: T) {}
fn({x:1, y: 2, str: 'string'});