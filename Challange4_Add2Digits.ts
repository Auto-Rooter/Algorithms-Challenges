/*
You are given a two-digit integer n. Return the sum of its digits

Example:
     For n = 29 , the output should be addTwoDigits(n) = 11
Hint:
    - split()
    - parseInt()
    - toString()
    - reduce()

Input/Output : 
    - A positive two-digit integer
    - integer Guaranteed Constraints:
        10 <= n <= 99

*/

function Add2Digits(n:any): number{
    const nums = n.toString().split('');
    return nums.reduce((a:string, b:string)=>{
        return parseInt(a) + parseInt(b);
    });
}

console.log(Add2Digits(32));