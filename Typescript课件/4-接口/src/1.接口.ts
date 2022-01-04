interface Point {
    x: number;
    y: number;
}
// 接口是一种类型，不能作为值去使用
let p1: Point = {
    x: 1,
    y: 1
};

interface Point2 {
    x: number;
    y: number;
    color?: string;
}

let p2: Point2 = {
    x: 1,
    y: 1
}

interface Point3 {
    readonly x: number;
    readonly y: number;
    color?: string;
}

let p3: Point3 = {
    x: 1,
    y: 1,
    color: 'red'
};
// p3.x;
// p3.x = 10;
// p3.color = 'green';

interface Point4 {
    x: number;
    y: number;
    [prop: string]: number;
}

let p4: Point4 = {
    x: 1,
    y: 1,
    z: 1
}
p4.t = 10;
p4[1] = 1;

interface Point5 {
    x: number;
    y: number;
    [prop: number]: number;
}

let p5: Point5 = {
    x: 1,
    y: 1
}
p5[1] = 1;
p5['z'] = 1;


interface Point6 {
    [prop1: string]: string;
    [prop2: number]: number;	// 错误
}

let p6: Point6 = {}
p6.x = '1';
p6[1] = '1';

interface Point7 {
    [prop1: string]: Object;
    [prop2: number]: Date;	// 正确
}