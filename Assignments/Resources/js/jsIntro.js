/*Problem 01:
Function that will return the sum of all elements greater than 20*/
function sum(arr) {
    return arr
      .filter((num) => num > 20)
      .reduce((acc, num) => acc + num, 0);
  }
  

/*Problem 02:
Function with one parameter (string array) that will return another array of string 
where the elements will comply below conditions
    1. length of each elements is greater than or equal to 5
    2. elements that contains letter 'a'*/
  const getNewArray = function(arr) {
    return arr.filter((str) => str.length >= 5 && str.toLowerCase().includes('a'));
  };

/*Applying the functions logic for input processing*/
/*Problem 01*/
const numberArray = [42,79,18,63,7,91];
console.log(sum(numberArray)); // Output: 275
let resultSumPrint = document.getElementById("resultSum");
console.log(resultSumPrint);
resultSumPrint.innerHTML = "01. Array Sum: <br> Input: "+numberArray+"<br> Output: "+sum(numberArray);


/*Problem 02*/
const stringArray = ['Sunshine','Bicycle','Adventure','Delicious','Whisper','Harmony'];
console.log(getNewArray(stringArray)); // Output: [ 'Adventure', 'Harmony' ]
let resultNewArray = document.getElementById("resultNewArray");
resultNewArray.innerHTML = "02. Filtered Array: <br> Input: "+stringArray+"<br> Output: "+getNewArray(stringArray);


// Get the div element by its ID
const divElement = document.getElementById("fileContents");

// Fetch the JavaScript file contents
fetch("../Resources/js/jsIntro.js")
  .then(response => response.text())
  .then(data => {
    // Set the innerHTML of the div element with the file contents
    divElement.innerHTML = "<h2>jsIntro.js</h2><pre>" + data + "</pre>";
  })
  .catch(error => {
    console.error("Error fetching file:", error);
  });