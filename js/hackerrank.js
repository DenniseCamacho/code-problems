"use strict";

function printnums(n) {
    let nn = [];
    let nums = [];
    for (let i = 0; i < n; i += 1) {
        nums = i + 1;
        nn.push(nums);
    }

    // let theindex = nn.indexOf(3);
    // console.log(theindex, ': the index is');
    // console.log(nn[theindex], ': the item is');
    nn.forEach((value, index, array)=>{
       // console.log(test, value, 'value % 3');
      if (value % 3 === 0) {
         // console.log(index);
         nn[index] = 'three';

      } else return value;
    });
    return nn;

}

// console.log(printnums(3));
console.log(printnums(15));