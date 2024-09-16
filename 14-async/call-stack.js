function funcA() {
    console.log('A');
}

function funcB() {
    console.log('B');
    funcA();
}

function funcC() {
    console.log('C');
    funcB();
}

funcC();

// OUTPUTL
// C
// B
// A