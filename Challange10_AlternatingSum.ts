/*

Several people are standing in a row and need to be divided into two teams,
The first person goes into team 1, the second person goes to team 2, and the
Third person goes to team 1 , and Fourth person goes to team 2 ,and so on.

You are given an array of positive integers - the weights of the people . Return 
an array of two integers. where the first element is the total weight of team 1, 
and the second element is the total weight of team 2 after the division is complete.

Example: 
    For a = [50, 60, 60, 45, 70] -----> output = [180, 105]

*/

function AlternatingSum(inputarray: number[]): number[]{
    let evenSum = 0;
    let oddSum  = 0;

    inputarray.forEach((element, index)=>{
        if(index % 2 === 0){
            evenSum+= element;
        }else{
            oddSum+= element;
        }
    });

    return [evenSum, oddSum];
}

console.log(AlternatingSum([50, 60, 60, 45, 70]));