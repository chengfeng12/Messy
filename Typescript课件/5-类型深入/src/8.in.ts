// // console.log( 'name' in {name:'zmouse', age: 35} );
// // console.log( 'gender' in {name:'zmouse', age: 35} );

// interface Person {
//     name: string;
//     age: number;
//     gender: string;
// }

// type personKeys = keyof Person;

// type newPerson = {
//     // [k in personKeys]: string;


//     [k in 'name'|'age'|1|symbol]: string;
// }