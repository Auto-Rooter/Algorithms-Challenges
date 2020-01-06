/*

Two arrays are called similar ifone can be obtained from another by swapping at most
one pair of elements in one of the arrayes.

Example: 
        a = [1,2,3] and b = [1,2,3] ------> TRUE    
        a = [1,2,3] and b = [2,1,3] ------> TRUE
        a = [1,2,2] and b = [2,1,1] ------> FALSE

Hint :
    toString()

*/

function AreSimilar(a: number[], b: number[]): boolean{
    const c: number[] = [];
    let   d: number[] = [];

    if(a.toString() === b.toString()){
        return true;
    }

    for(let i=0; i< a.length; i++){
        if(a[i] !== b[i]){
            c.push(a[i]);
            d.push(b[i]);
        }
    }

    d = d.reverse();

    if(c.length === 2 && (c.toString() === d.toString())){
        return true;
    }

    return false;
}

console.log(AreSimilar([1,2,3], [1,2,3]));
console.log(AreSimilar([1,2,3], [2,1,3]));
console.log(AreSimilar([1,2,2], [2,1,1]));