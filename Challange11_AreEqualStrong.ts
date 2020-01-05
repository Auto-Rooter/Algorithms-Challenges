/*

Call two arms equally strong if the heaviest weights they each are able to lift are equal.

Call two people equally strong if their strongest arms are equally strong (the strongest arm can 
  be both the right and the left), and so sre their weakest arms.

Given your and your friends arms lifting capabilities find out if you two are equally strong .

Example : 
        yourLeft = 10, yourRight = 15, friendLeft = 15, friendRight = 10 ----> TRUE
        yourLeft = 15, yourRight = 10, friendLeft = 15, friendRight = 10 ----> TRUE
        yourLeft = 15, yourRight = 10, friendLeft = 15, friendRight = 9 ----> TRUE

*/

function AreEquallyStrong(yourLeft: number, yourRight: number, friendLeft: number, friendRight: number): boolean{
    const yourWeakest = yourLeft <= yourRight ? yourLeft : yourRight;
    const yourStrongest = yourLeft >= yourRight ? yourLeft : yourRight;
    const friendWeakest = friendLeft <= friendRight ? friendLeft : friendRight;
    const friendStrongest = friendLeft >= friendRight ? friendLeft : friendRight;

    return yourWeakest === friendWeakest && yourStrongest === friendStrongest;
}

console.log(AreEquallyStrong(10, 15, 15, 10));
console.log(AreEquallyStrong(15, 10, 15, 10));
console.log(AreEquallyStrong(15, 10, 15, 9));