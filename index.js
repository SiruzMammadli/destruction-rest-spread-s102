// DESTRUCTION -- SPREAD -- REST

// const arr = ['salam', 1, 3];

// console.log([...arr]);

// const obj = {
//     name: 'filankes',
//     surname: 'filankesov',
//     gender: 'male',
//     age: 30,
// }

// console.log({...obj, age: 1});

// function topla(...params) {
//     let sum = 0;

//     params.forEach((param) => {
//         sum += param;
//     });

//     return sum;
// }

// function topla(num1, ...params) {
//     return {numbers: num1, rest: params}
// }

// console.log(topla(1, 3, 5, 6, 7, 9, 11));

// const obj = {
//   name: "filankes",
//   surname: "filankesov",
//   gender: "male",
//   age: 30,
// };

// function useState() {
//   return {
//     name: "filankes",
//     surname: "filankesov",
//     gender: "male",
//     age: 30,
//   };
// }

// const {surname, name, age} = useState();

// function useState() {
//   const num1 = 10;
//   const num2 = 20;
//   return [num1, num2];
// }

// const [birinci, number2] = useState();

// console.log(number2);

// const obj = {
//   name: "filankes",
//   surname: "filankesov",
//   gender: "male",
//   age: 30,
// };

// const {surname, name, gender} = obj;

// console.log(gender);

// async function main() {
//     const getPhotos = await fetch('https://jsonplaceholder.typicode.com/photos');
//     const result = await getPhotos.json();
//     const obj = {
//         data: result,
//         total_count: result.length,
//         "500_600_ids_count": result.filter((item) => {
//             return 500 <= item.id && item.id <= 600;
//         } ).length,
//     }
//     console.log(obj);
// }

// {
//     data: [],
//     total_count: null,
//     "500_600_ids_count": null,
// }

// main();

// function withoutFive(write) {
//     const num= [0,1,2,3,4,5,6,7,8,9,"*","+","-","/"];
//     const strNum = num.toString();
//     if (strNum.includes(write)){
//         throw new Error();
//     } else {
//         return 5;
//     }
// }
// console.log(withoutFive("1"));

// function test(...rest) {
//     return rest;
// }

// console.log(test(...[1, 2, 3, 4]));