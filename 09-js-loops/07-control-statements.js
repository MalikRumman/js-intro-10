// break vs continue

// print all the nukbers from 0 to 10 (inclusive) except the even numbers

for(let i = 0; i <= 10; i++) {
    if(i % 2 === 0) continue;
    console.log(i);
}

// print all the numbers from 1 to 20 (inclusive) except 6, 13

for (let i = 0; i <= 20; i++) {
    if (i === 6 || i === 13 || i > 15) continue; 
    console.log(i);
}

