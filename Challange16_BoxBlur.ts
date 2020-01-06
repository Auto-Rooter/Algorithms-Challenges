/* 

Last night you had to study , but decided to party instead, 
Now there is a black and white photo of you that is about 
to go viral. You cannot let this ruin your reputation , so you 
want to apply box blur algorithm to the photo to hide its content.

- The Algorithm works as follows: each pixel x in the resulting image has 
    a value equal to the average value of the input image pixels values
     from the 3x3 square with the center at x. all pixels at the edges are 
     cropped.

     As pixel`s value is an integer , all fractions should be rounded down

- Example: 
    image = [1, 1, 1],
            [1, 7, 1],   ------->    output = [1]
            [1, 1, 1]

    In the example above , all boundary pixels wre cropped, and the value of the 
    pixel in the middle was obtained as (1+1+1+1+7+1+1+1+1)/9 = 15/9 ~ (rounded down) = 1

- Hints: 
    push()
    Math.floor()

- Guaranted Constraints:
    3 <= image.length <= 10
    3 <= image[0].length <= 10
    0 <= image[i][j] <= 255

*/

function BoxBlur(image: number[][]): number[][]{
    const res = [];

    for(let y = 0; y<image.length -2; y++){
        const line = [];
        
        for(let x=0; x<image[y].length -2; x++){
            let sum = 0;
            let count = 0;
            
            for(let a =y; a<y+3; a++){
                for(let b = x; b< x+3; b++){
                    sum += image[a][b];
                    count++;
                }
            }
            line.push(Math.floor(sum/count));
        }
        res.push(line);
    }
return res;
}

console.log(BoxBlur([[1,1,1],[1,7,1],[1,1,1]]));