/*

Given a character , check if it represents an odd digit, an even digit 
or not a digit at all.

Example:
    Input = '5' ------> Output = "odd";
    Input = '8' ------> Output = "even";
    Input = 'q' ------> Output = "Not a digit";

Hints:
    - isNaN();
    - parseInt();

*/

function characterPArity(digit: string): string{
    const result = parseInt(digit);

    return isNaN(result) ? "not a digit" : result % 2 === 0 ? "even" : "odd"
}

console.log(characterPArity('5'));
console.log(characterPArity('8'));
console.log(characterPArity('q'));