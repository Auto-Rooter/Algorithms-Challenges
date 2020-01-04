/*
Given a string , replace each its character by the next one in the English
Alphabet (Z would be replaced by A)

Example: 
    Input String = "CRAZY", The output = "DSBAZ"

Hint :
    - split()
    - indexOf()
    - join()
*/

// Slow Way

function AlphabetShift_Slow(inputstring: string): string{
    const alpha = ['a','b','c','d','e','f','g','h','i'
                   ,'j','k','l','m','n','o','p','q','r'
                   ,'s','t','u','v','w','x','y','z'];
    let newarray = inputstring.split('');

    for(let i=0; i< inputstring.length; i++){
        let index = 0;

        if(newarray[i] != 'z'){
            index = alpha.indexOf(newarray[i])+1
        }

        newarray[i] = alpha[index];
    }

    return newarray.join('');
}

console.log(AlphabetShift_Slow('crazy'));

//=============== [Just Faster] =============

function AlphabetShift_Fast(Inputarray: string): string{
    const Alphabet_dic = {
        'a':'b', 'b':'c', 'c':'d', 'd':'e', 
        'e':'f', 'f':'g', 'g':'h', 'h':'i',
        'i':'j', 'j':'k', 'k':'l', 'l':'m',
        'm':'n', 'n':'o', 'o':'p', 'p':'q',
        'q':'r', 'r':'s', 's':'t', 't':'u',
        'u':'v', 'v':'w', 'w':'y', 'y':'z',
        'z':'a'
    };

    let newarray = Inputarray.split('');

    for (let i=0; i<newarray.length; i++){
        newarray[i] = Alphabet_dic[newarray[i]];
    }

    return newarray.join('');
}

console.log(AlphabetShift_Fast('crazy'));