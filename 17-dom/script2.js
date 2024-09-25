
/*
getElementById()
- Gets element by id
*/

const heading = document.getElementById('heading')
console.log(heading); // <h1 id="heading">...</h1>

/*
 getElementByClassname
 - Returns all elements with same calss name in HTMLCollection
 - HTMLCollection is just like an array
 - HTMLCollection doesn't support
*/

const boxes = document.getElementsByClassName('box');
console.log(boxes); // HTMLCollection ~ Array 

boxes[0]
boxes.item(0)

// boxes.forEach(element => {
//     console.log(element)
// });

for (let i=0; i < boxes.lengthl; i++) {
    const element = boxes[i];
    console.log(element)
}

/*
    getElementsByTagName()
    - Gets all elements with same tag
    - Returns HTMLCollection
*/

const sections = document.getElementsByTagName('section');
console.log(sections);

for (let i=0; i < sections.lengthl; i++) {
    const element = sections[i];
    console.log(element)
}

/*
    querySelector
    - Universal way of getting elements 
    - Similar to CSS put # before d and . before class name 
*/

const heading2 = document.querySelector('#heading');
const heading3 = document.querySelector('h1');
const heading4 = document.querySelector('.heading');

console.log('querySelector ----------');
console.log(heading2);
console.log(heading3);
console.log(heading4);
console.log('querySelector ----------');

const boxes2 = document.querySelector('.box'); // 3
console.log(boxes2); // Only returns first element

/*
 querySelectorAll()
 - Universal methods to get all matching elements
 - Returns NodeList, similar to Array
*/

const boxes3 = document.querySelectorAll('.box');
console.log(boxes3); // NodeList[3]

console.log('querySelectorAll ----------');
// forEach()
boxes3.forEach(el => console.log(el));

// entries()
const boxEntries = boxes3.entries();
console.log(boxEntries);


for (const entry of boxEntries) {
    console.log(entry);
}

console.log('querySelector ----------');