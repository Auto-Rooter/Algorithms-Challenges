/* 
Given a rectangular matrix of characters , add a border of asterisks(*) to it.
Example:
   picture = ["abc",
              "ded"
                 ]

Output:
    addBorder(picture) = ["*****",
                          "*abc*",
                          "*ded*",
                          "*****"] 
                *****
    aaa         *aaa*
    bbb  ==>    *bbb*
    ccc         *ccc*
                *****

Hints:
    - concat()
    - unshift()
    - push()
*/

function addBorder(picture: string[]): any{
    const Wall = "*".repeat(picture[0].length+2);
    picture.unshift(Wall);
    picture.push(Wall);

    for(let i=0; i < picture.length; i++){
        picture[i] = '*'.concat(picture[i],"*");
    }

    return picture;
}

console.log(addBorder(["aaaa","bbbb"]));






