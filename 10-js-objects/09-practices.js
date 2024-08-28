/*
Create a student object with below info
firstName : Alex
lastName : Smith
hobbies : Soccer - Watching movies
exam_scores : midterm: 60 and final: 90

Output your object to the console
*/

const student1 = {
    firstName: 'Alex', 
    lastName: 'Smith', 
    hobbies: [ 'Soccer', 'Watching movies' ],
    exam_scores: {
        midterm: 60,
        final: 90
    }
};

console.log(student1);

/*
Print hobbies -> [ 'Soccer', 'Watching movies' ]
Print exam_scores -> { midterm: 60, final: 90 }
Print first hobby -> Soccer
*/

console.log(student1.hobbies);
console.log(student1.exam_scores);
console.log(student1.hobbies[0]);

/*
Find and print the average of exam scores -> 75
*/

let average = (student1.exam_scores.midterm + student1.exam_scores.final) / 2;
console.log(average); 

const allScores = Object.values(student1.exam_scores);

console.log(allScores);

let sum = 0;

for(const score of allScores) {
    sum += score;
}

console.log(sum / allScores.length); // 75

/*
Create a book object
name is Amok
author's first name is Stefan
author's last name is Zweig
genre is Novella
*/

const books = [
    {
      name: "Amok",
      author: {
        fname: "Stefan",
        lname: "Zweig",
      },
      genre: "Novella",
    },
    {
      name: "My Name Is Red",
      author: {
        fname: "Orhan",
        lname: "Pamuk",
      },
      genre: "Historical Novel",
    },
    {
      name: "1984",
      author: {
        fname: "George",
        lname: "Orwell",
      },
      genre: "Dystopian Literature",
    },
  ];
  
  // Count the books where Author first name has an 'a' -> 2

  let count = 0;

  for (let book of books) {
      if (book.author.fname.includes('a')) {
          count++;
      }
  }
  
  console.log(count);

// Get all the names of the books in array -> [ 'Amok', 'My Name Is Red', '1984' ]

const bookNames = [];

for (const book of books) {
  bookNames.push(book.name);
}

console.log(bookNames);


// Another solution using forEach() method

const bookName2 = [];
books.forEach(book => {
    bookName2.push(book);
});

console.log(bookName2);




