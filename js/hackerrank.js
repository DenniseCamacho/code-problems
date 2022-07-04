"use strict";

function printnums(n) {
    let nn = [];
    let nums = [];
    for (let i = 0; i <= n; i += 1) {
        if (n === 0 && i === 0) continue;
        nums = i;
        nn.push(nums);
    }

    // let theindex = nn.indexOf(3);
    // console.log(theindex, ': the index is');
    // console.log(nn[theindex], ': the item is');
    nn.forEach((value, index, array) => {
        // console.log(test, value, 'value % 3');
        //  if (index === 0) {
        //      return nn.length - 1;
        //  }
        if (index > 0 && value % 3 === 0) {
            // console.log(index);
            nn[index] = 'three';

        } else return value;
    });


    let theIndex = Object.keys(nn)
    let theValue = nn;
    let finalProduct = '';

    for (let i = 0; i < theValue.length - 1; i++) {
        finalProduct += `${theIndex[i + 1]} ${theValue[i + 1]} \n`
    }

    return `${finalProduct}`;
    //.join('\n');
    // return `${theValue}`
    // return `${theIndex} | ${theValue}`
    // return theIndex + nn.join('\n');

}

console.log(printnums(3));
console.log(printnums(15));


//////////////////

/*
 * Complete the vowelsAndConsonants function.
 * Print your output using 'console.log()'.
 */
function vowelsAndConsonants(s) {
    let array1 = [];
    let array2 = [];
    //loop through the string... make it an array?
    s.split('').forEach((letter)=>{

        switch (letter) {
            case 'a' :
                array1.push(letter);
                break;
            case 'e':
                array1.push(letter);
                break;
            case 'i':
                array1.push(letter);
                break;
            case 'o':
                array1.push(letter);
                break;
            case 'u':
                array1.push(letter);
                break;
            default:
                array2.push(letter);
        }
        // if (letter == 'a') {
        // array1.push(letter);
        // }

    })
    console.log(array1.join('\n'));
    console.log(array2.join('\n'));
}
