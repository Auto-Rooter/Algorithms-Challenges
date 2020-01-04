/*
Given an array of strings , return another array containing all of its longest strings.

Example:
    For inputArray = ["aba", "aa", "ad", "vcd", "aba"]; output = ["aba", "vcd", "aba"]

*/

function allLongestStr(inputArray: string[]): string[]{
    let longestLength = 0;
    const newArray = [];

    inputArray.forEach((word: string)=> {
        longestLength = word.length > longestLength ? word.length : longestLength;
    });

    inputArray.forEach((word: string)=>{
        if(word.length == longestLength){
            newArray.push(word);
        }
        
    });
    return newArray;
}

console.log(allLongestStr(["aba", "aa", "ad", "vcd", "aba"]));