"use strict";
function toCamelCase(str){

    switch (str){
        case '':
            return '';
            break;
    }

    let underScoredWord = '';
    let newWord = '';
    //every word after the first word & underscore should be capitalized.
    if(str.indexOf('_') > -1) {
        //if it contains _ do this:
        underScoredWord = str.split('_');
        //splitting in from the underscore and turning it into an array of words.

        //for each word in the array,
        underScoredWord.forEach((word, index, array)=>{
            // console.log('this is value: ' + value);
            //we only want the words after the first word to be capitalized
            if(index > 0) {
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

console.log(toCamelCase('The-Stealth-Warrior'), 'The-Stealth-Warrior');
console.log(toCamelCase('the_stealth_warrior'), 'the_stealth_warrior');
console.log(toCamelCase(''), 'is a blank space');
console.log(toCamelCase('A-B-C'), 'A-B-C');


// Complete the solution so that it reverses the string passed into it.
// 'world'  =>  'dlrow'
// 'word'   =>  'drow'
function solution(str){
//    to turn to an array
let str1 = str.split('');
let str2 = str1.reverse();
return str2.join("");

}
console.log(solution("word"));