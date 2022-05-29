// Write your solution here!
// beforeEach(function () {
//     cats.length = 0;
  
//     cats.push("Milo", "Otis", "Garfield");
//   });

const cats = ["Milo", "Otis", "Garfield"];



beforeEach(function () {
    cats.length = 0;
  
    cats.push("Milo", "Otis", "Garfield");
  });

function destructivelyAppendCat() {
  cats.push ("Ralph");
};


function destructivelyPrependCat() {
  cats.unshift("Bob");
}

function destructivelyRemoveFirstCat() {
  cats.shift();
}

function destructivelyRemoveLastCat() {
  cats.pop();
}

beforeEach(function () {
  cats.length = 0;

  cats.push("Milo", "Otis", "Garfield");
});


function appendCat() {
 return appendCat = [...cats.slice(-3), "Broom"];
}

function prependCat() {
  return prependCat = ["Arnold", ...cats.slice(0)];
}


function removeLastCat() {
  return removeLastCat = [...cats.slice(0,2)];
}

function removeFirstCat() {
  return removeFirstCat = [...cats.slice(1,3)];
}

// const cats = ["Milo", "Otis", "Garfield"];

// beforeEach(function () {
//     cats.length = 0;
  
//     cats.push("Milo", "Otis", "Garfield");
//   });

//   function destructivelyAppendCat() {
//       cats.push ("Ralph");
//   }

//   beforeEach(function () {
//     cats.length = 0;
  
//     cats.push("Milo", "Otis", "Garfield");
//   });

//   function destructivelyPrependCat() {
//       cats.unshift("Bob");
//   }

//   beforeEach(function () {
//     cats.length = 0;
  
//     cats.push("Milo", "Otis", "Garfield");
//   });

//   function destructivelyRemoveLastCat() {
//       cats.pop(Milo);
//   }

//   beforeEach(function () {
//     cats.length = 0;
  
//     cats.push("Milo", "Otis", "Garfield");
//   });
  
//   function destructivelyRemoveLastCat() {
//       cats.pop(name);
//   }

//   beforeEach(function () {
//     cats.length = 0;
  
//     cats.push("Milo", "Otis", "Garfield");
//   });
  
//   function destructivelyRemoveFirstCat() {
//       cats.shift("Milo");
//   }

//   beforeEach(function () {
//     cats.length = 0;
  
//     cats.push("Milo", "Otis", "Garfield");
//   });

//   function appendCat() {
//       cats.slice();
//   }

//   beforeEach(function () {
//     cats.length = 0;
  
//     cats.push("Milo", "Otis", "Garfield");
//   });
  