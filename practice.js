// 1. Interval Practice 1
console.log('Interval Practice 1');
function printTime() {
    console.log(new Date());
}
printTime();
/*******************************************************************/
// 2. Interval Practice 2
console.log('Interval Practice 2');
setInterval(function () {
    console.log(printTime());
}, 5000);
/*******************************************************************/
// 3. Timeout Practice 1
console.log('Timeout Practice 1');
setTimeout(function () {
    console.log('Hello!');
}, 3000);
/*******************************************************************/
// 4. forEach Practice 1
console.log('forEach Practice 1');
var names = ['Ada', 'Ata', 'Aka', 'Ara', 'Afa'];
names.forEach(function (name) {
    console.log("Welcome ".concat(name, "!"));
});
/*******************************************************************/
// 5. forEach Practice 2
console.log('forEach Practice 2');
var numbers = [5, 10, 15, 20, 25];
var sum = 0;
numbers.forEach(function (num) {
    sum += num;
});
console.log(sum);
