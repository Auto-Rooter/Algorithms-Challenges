/*

Given the positions of a white bishop and a black pawn on the standard chess board,
determain whether the bishop can capture thepawn in one move.

The bishop has no restrictions in distance for each move , but is limitedto diagonal movement.

Example:
    Bishop = "a1" , pawn = "c3"  -----> Output = TRUE

*/


function BishopAndPawn(bishop: string, pawn: string): Boolean{
    const board = {
        "a" : 1,
        "b" : 2,
        "c" : 3,
        "d" : 4,
        "e" : 5,
        "f" : 6,
        "g" : 7,
        "h" : 8
    };

    const bishopX = board[bishop[0]];
    const bishopY = parseInt(bishop[1]);
    const pawnX = board[pawn[0]];
    const pawnY = parseInt(pawn[1]);

    if(bishopX + bishopY === pawnX + pawnY || bishopY + pawnY === bishopX + pawnX){
        return true;
    }

    return false;
}

console.log(BishopAndPawn("a1", "c3"));