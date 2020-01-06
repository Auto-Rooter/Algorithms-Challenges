/*

Given a string , check if it can become a palindrome through
a case change of some (possibly, none) letters.

Example:
    Input = "AaBaa" -----> Output = TRUE
    Input = "aabaa" -----> Output = TRUE
    Input = "abacd" -----> Output = FALSE

Hints:
    - join()
    - reverse()
    - toLowerCase()
    - split()

*/

function palindrome(str: string): boolean{
    let charss = str.split('');
    let temp_array ;
    charss.forEach((char1, index)=>{
        charss[index] = char1.toLowerCase();
    });
    temp_array = charss.join('');
    charss.reverse();
    console.log(temp_array);

    return temp_array === charss.join('');
}

console.log(palindrome("AABAA"));

//===================================================


function isCaseINsensitivePalindrome(inputString: string): boolean{
    const originalLowerCase = inputString.toLowerCase();
    const reversedWord = originalLowerCase.split('').reverse().join('');

return originalLowerCase === reversedWord;
}

console.log(isCaseINsensitivePalindrome('AaBaa'));
console.log(isCaseINsensitivePalindrome('AaBaM'));