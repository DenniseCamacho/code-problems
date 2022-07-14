"use strict";

function toCamelCase(str) {

    switch (str) {
        case '':
            return '';
            break;
    }

    let underScoredWord = '';
    let newWord = '';
    //every word after the first word & underscore should be capitalized.
    if (str.indexOf('_') > -1) {
        //if it contains _ do this:
        underScoredWord = str.split('_');
        //splitting in from the underscore and turning it into an array of words.

        //for each word in the array,
        underScoredWord.forEach((word, index, array) => {
            // console.log('this is value: ' + value);
            //we only want the words after the first word to be capitalized
            if (index > 0) {
                //so we pick anything after index 0

                // console.log(word);
                // console.log('this is the first letter: ' + word[0]);
                //    we want to capitalize the first letter, and put it back.

                //this just adds it to the word.
                word += word[0].toUpperCase();

                //    since the capitalized letter is at the end,
                //    perhaps we may bring it to index 0 and erase index 1?
                word = word.split('').pop() //turns the new word back to an array

                newWord += word;

                return newWord.split('');

            }

            if (index < 0) {
                return word;
            }


        });
        console.log(underScoredWord, newWord);

    }


}

//
// console.log(toCamelCase('The-Stealth-Warrior'), 'The-Stealth-Warrior');
// console.log(toCamelCase('the_stealth_warrior'), 'the_stealth_warrior');
// console.log(toCamelCase(''), 'is a blank space');
// console.log(toCamelCase('A-B-C'), 'A-B-C');


// Complete the solution so that it reverses the string passed into it.
// 'world'  =>  'dlrow'
// 'word'   =>  'drow'
function solution(str) {
//    to turn to an array
    let str1 = str.split('');
    let str2 = str1.reverse();
    return str2.join("");

}

// console.log(solution("word"));

function digitize(numbers) {
    // numbers.forEach((item, index, array)=>{
    //     console.log(item);
    // });
    if (typeof numbers === "number") {
        let numberArray = [];
        numbers.toString()
            .split('')
            .forEach((value, index, array) => {
                // numberArray.push(value.split('\''));
                numberArray.push(parseFloat(value));
            });

        return numberArray.reverse();

    } else return numbers.reverse();
    //if this is true that the
    // if (numbers === typeof "numbers" && numbers !== typeof "object") {
    //     numbers = numbers.toString();
    //     return numbers.split('').reverse();
    // } else return typeof numbers;
}

console.log(digitize(35231));
console.log(digitize([3, 5, 2, 3, 1]));

function lovefunc(flower1, flower2) {
    // moment of truth
    if (flower1 === flower2 && flower2 === flower1) {
        return false;
    } else if (flower1 % 2 === 0 && flower2 % 2 === 0) {
        return false;
    } else if (parseFloat(flower1) % 2 !== 0 && flower2 % 2 === 0) {
        return false;
    } else return true;
}

// didn't work for flowers with 945 and 469 petals: expected true to equal false

console.log(lovefunc(1, 4), true);
console.log(lovefunc(2, 2), false);
console.log(lovefunc(0, 1), true);
console.log(lovefunc(0, 0), false);
console.log(lovefunc(945, 469), false);

function fb(n) {
    let newnum = [];
    for (let i = 1; i <= n; i++) {
        newnum.push(i);
    }

    newnum.forEach((value, index, array) => {
        if (value % 3 === 0 && value % 5 === 0) {
            newnum.splice(index, 1,'FizzBuzz');
        }
         else if (value % 5 === 0 && value % 3 !== 0) {
            newnum.splice(index, 1, "Buzz");
        } else if (value % 3 == 0 && value % 5 !== 0) {
             newnum.splice(index, 1, "Fizz")
        } else return newnum;
    });


    return newnum.join('\n');
}

console.log(fb(15));

// given an array of integers, return a new array with each value doubled.
// function maps(ints){
//     ints.map
// }