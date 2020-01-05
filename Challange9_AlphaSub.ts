/*
Check whether the given string is a subsequence of the plaintext alphabet

Example:
    S="effg" OR S="cdce" ---->  output will be : false
    S="ace"  OR S="bxz"  ---->  output will be : true

Hints:
    size property
    charCodeAt()
*/

function  alphabetSequence(s: string): boolean {
    const chars: string[] = s.split('');
    const charValues: number[] = [];

    chars.forEach((char: string)=>{
        charValues.push(char.charCodeAt(0));
    });

    if(new Set(charValues).size !== charValues.length){
        return false;
    }

    for(let i=0; i< charValues.length-1; i++){
        if(charValues[i] >= charValues[i+1]){
            return false;
        }
    }

    return true;
}

console.log(alphabetSequence('zxy'));
console.log(alphabetSequence('abcc'));
console.log(alphabetSequence('nml'));
console.log(alphabetSequence('abc'));
console.log(alphabetSequence('xyz'));