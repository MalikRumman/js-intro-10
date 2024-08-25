// 1, 2, 3

let count = 0
for(let i = 1; i <= 3; i++) {
    console.log('i', i);
    for(let j = 1; j <= 5; j++) {
        console.log('\tj');
        for(let k = 0; k <= 1; k++) {
            console.log('\n\tk');
            count++;
            break;
        }
    }
}

console.log(count);

/*
1
 1
  0
  1
 2
  0
  1
 3
  0
  1
 4
  0
  1
 5
  0
  1
2
 1
  0
  1
 2
  0
  1
 3
  0
  1
 4
  0
  1
 5
  0
  1
3
 1
  0
  1
 2
  0
  1
 3
  0
  1
 4
  0
  1
 5
  0
  1
*/