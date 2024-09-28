// Recap
// Ways of accessing elements in DOM
// by id: getElementById()
// by class: getElementsByClassName()
// by tag name: getElementsByTagName()
// universal: querySelector(), querySelectorAll()

/*
    TRAVERSING THE DOM
*/

const parentEl = document.getElementById('parent');

const child1El = document.getElementById('child1');
const child2El = document.getElementById('child2');
const child3El = document.getElementById('child3');

/* --- 1. Node only */

// parentNode
console.log(child1El.parentNode); // parent div
console.log(parentEl.parentNode); // 

//childNodes
const childNodes = parentEl.childNodes;
console.log(childNodes);

// firstChild, lastChild
console.log('First Child', parentEl.firstChild); // text
console.log('Last Child', parentEl.lastChild); // text

// previousSibling, nextSibling
console.log('previous to child1', child1El.previousSibling); // text
console.log('Next sibling to child 1', child1El.nextSibling); // text

/* --- 2. Elements only */

// parentElement
console.log('Parent Element of child 1', child1El.parentElement); // parent div
console.log('Parent Element of parent div', parentEl.parentElement); // body

// children
console.log('Cildren of parent div', parentEl.children); // 

// firstElementChild, lastElementChild
console.log('First Element Child', parentEl.firstElementChild); // text
console.log('Last Element Child', parentEl.lastElementChild); // text

