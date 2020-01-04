/*
Given an array of integers , find the pair of adjacments that has
the largest product and return that product.

Example: 
    For inputarray = [3,6,-2,-5,7,3] , the output should be adjacentElementsProduct(inputArray)=21
    7 and 3 produce the largest product.
*/

function AdjElementProduct(inputArray:number[]):number{
    let BiggestProduct = inputArray[0]*inputArray[1];
   
    for(let i=1; i<inputArray.length-1; i++){
        let temp = inputArray[i]*inputArray[i+1];
        BiggestProduct = temp > BiggestProduct ? temp : BiggestProduct; 
    }

    return BiggestProduct;
}

console.log(AdjElementProduct([3,6,-2,-5,7,3]));