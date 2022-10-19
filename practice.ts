// 1. Interval Practice 1
console.log('Interval Practice 1');

function printTime()
{
    console.log(new Date());
}
printTime();

/*******************************************************************/
// 2. Interval Practice 2
console.log('Interval Practice 2');

setInterval 
(
    () => 
        {
            console.log(printTime());
        }, 5000
);

/*******************************************************************/
// 3. Timeout Practice 1
console.log('Timeout Practice 1');

setTimeout
(
    () =>
        {
            console.log('Hello!');
        }, 3000
);

/*******************************************************************/
// 4. forEach Practice 1
console.log('forEach Practice 1');

let names: string [] = ['Ada', 'Ata', 'Aka', 'Ara', 'Afa'];

names.forEach
(
    (name: string) => 
    {      
        console.log(`Welcome ${name}!`);
    }
)

/*******************************************************************/
// 5. forEach Practice 2
console.log('forEach Practice 2');

let numbers: number [] = [5, 10, 15, 20, 25];
let sum: number = 0;

numbers.forEach
(
    (num: number) => 
        {
            sum += num;
        }
);
console.log(sum);




