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


/*
### Check Out My [YouTube Channel](https://www.YouTube.com/CodingTutorials360)

---
1. Write a function that returns the sum of two numbers.
2. Write a function that returns the sum of all numbers regardless of # of params.

**Example**

For param1 = 1 and param2 = 2, the output should be
add(param1, param2) = 3.

**Hints**
-   Arithmetic Operators
-   Rest Operator
-   forEach()

**Input/Output**

- **[time limit] 4000ms (js)**
- **[input] integer param1**

Guaranteed constraints:

-100 ≤ param1 ≤ 1000.

**[input] integer param2**

Guaranteed constraints:
-100 ≤ param2 ≤ 1000.

**[output] integer**

The sum of the two inputs.

*/