const numbers = [1,2,3,4,5,6,7,8,9]
// function double(n)
// {
//     return n*2;
// }

// let newArr = numbers.map(double)

// console.log(newArr);

// let ans=numbers.find(num=> num==4)

// console.log(ans);
const newArr = numbers.filter(num=>num % 2==0)

console.log(newArr)
