/*

N children have got m pieces of candy . They want to eat as much candy as they can,
but each child must eat exactly the same amount of candy as any other child.

Determine how many pieces of candy will be eaten by all the children together . 
Individual pieces of candy cannot be slit.

Example:
    n=3 and m=10 -----> Output= 9

Hint:
    Math.floor()

*/

function Candies(childrens: number, Candies: number): number {
    const candy = Math.floor(Candies/3);

    return candy*childrens;
}

console.log(Candies(3, 10));