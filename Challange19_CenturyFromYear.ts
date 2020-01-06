/*

Given a year , return the century it is in. The first century spans from the year 1 up to and 
including the year 100, the second - from the year 101 up to and including the year 200,...etc

Example:
    - Year = 1905, ------> Output = 20;
    - Year = 1700, ------> Output = 17;

Hints:
    - Math.floor();

*/

function CenturyFromYear(year: number): number{
    if(year % 100 === 0){
        return year / 100
    }
    return Math.floor(year/100)+1 ;
}

console.log(CenturyFromYear(100));
console.log(CenturyFromYear(101));
console.log(CenturyFromYear(200));
console.log(CenturyFromYear(2005));
console.log(CenturyFromYear(2000));