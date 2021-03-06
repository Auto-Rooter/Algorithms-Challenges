//Handling multiple inputs or no input at all

function add(...a : number[]): number{
    let total = 0;
    a.forEach((num)=>{
        total+=num;
    });
    return total;
}

console.log(add(12,2,2,3,4,5,5,6,7,7,5));
console.log(add(12,5));

/*
Rest Parameters 
        With rest parameters, we can gather any number of arguments into an array
        and do what we want with them. Rest parameters have been introduced to reduce
        the boilerplate code that was induced by the arguments. 
*/


/*
        Unlike var , let and const are block scoped. Another difference that let and const
        have when compared to var is the fact that while var gives a undefined error when
        accessed before declaring, let and const give a ReferenceError if they are accessed
        before declaration.

        While let and const are similar, they are not exactly the same. The main difference 
        between let and const is that const variables need to be declared using an initializer,
        or it will generate an error.

        we can`t update the const variables [Cannot assign to 'total' because it is a constant] so we make it let.
*/


