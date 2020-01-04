/*
Given a sequence of integers as an array , determine whether it is
possible to obtain a strictly increasing sequence by removing no more than
one element from the array .

Example: 
    [1,3,2,1], the output should be false (we should remove two nums to be strictly increasing array remove 2,1 => [1,3] )
    [1,3,2], theoutput should be True (we can remove only one num , remove 3 => [1,2])
*/

function almostIncreasingArray(numarray: number[]): boolean{
    let count = 0;
    for(let i=0; i<numarray.length; i++){
        if(numarray[i] <= numarray[i-1]){
            count++;
            if(numarray[i] <= numarray[i-2] && numarray[i+1] <= numarray[i-1]){
                return false;
            }
        }
    }

    return count <= 1;
} 

console.log(almostIncreasingArray([1,3,1,1]));
console.log(almostIncreasingArray([1,3,2]));