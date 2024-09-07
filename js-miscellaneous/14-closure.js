/*
let initialScore = 0;

function score() {
    return initialScore += 1;
}

initialScore = 100;

score();
score();
score();

console.log(initialScore); // 103
*/

function score() {
    let initialScore = 0; // private

    function increase() {
        return initialScore += 1;
    }

    return increase;   
}

const increaseFunc = score();  



