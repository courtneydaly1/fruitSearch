const input = document.querySelector("#fruit");
const suggestions = document.querySelector(".suggestions ul");

//Array of fruit to be searched through
const fruit = [
  "Apple",
  "Apricot",
  "Avocado 🥑",
  "Banana",
  "Bilberry",
  "Blackberry",
  "Blackcurrant",
  "Blueberry",
  "Boysenberry",
  "Currant",
  "Cherry",
  "Coconut",
  "Cranberry",
  "Cucumber",
  "Custard apple",
  "Damson",
  "Date",
  "Dragonfruit",
  "Durian",
  "Elderberry",
  "Feijoa",
  "Fig",
  "Gooseberry",
  "Grape",
  "Raisin",
  "Grapefruit",
  "Guava",
  "Honeyberry",
  "Huckleberry",
  "Jabuticaba",
  "Jackfruit",
  "Jambul",
  "Juniper berry",
  "Kiwifruit",
  "Kumquat",
  "Lemon",
  "Lime",
  "Loquat",
  "Longan",
  "Lychee",
  "Mango",
  "Mangosteen",
  "Marionberry",
  "Melon",
  "Cantaloupe",
  "Honeydew",
  "Watermelon",
  "Miracle fruit",
  "Mulberry",
  "Nectarine",
  "Nance",
  "Olive",
  "Orange",
  "Clementine",
  "Mandarine",
  "Tangerine",
  "Papaya",
  "Passionfruit",
  "Peach",
  "Pear",
  "Persimmon",
  "Plantain",
  "Plum",
  "Pineapple",
  "Pomegranate",
  "Pomelo",
  "Quince",
  "Raspberry",
  "Salmonberry",
  "Rambutan",
  "Redcurrant",
  "Salak",
  "Satsuma",
  "Soursop",
  "Star fruit",
  "Strawberry",
  "Tamarillo",
  "Tamarind",
  "Yuzu",
];

// Function to search case insensative string values found in the array, and create a new array.Show suggestions and modify as more letters are typed.
//ISSUES doesnt work when i type uppercase letters. still need to bold letters in str and char from user.
function search(str) {
  let results = [];
  let lowerCaseFruit = [];

  for (let i = 0; i < fruit.length; i++) {
    lowerCaseFruit.push(fruit[i].toLowerCase());
  }
  const filteredFruit = lowerCaseFruit.filter((chars) => chars.includes(str));
  results.push(filteredFruit);
  showSuggestions(results);
}

//Function to handle option selection. User's input is evaluated and scanned through array of fruit.
function searchHandler(e) {
  const inputVal = e.target.value;
  search(inputVal);
};

//Function to show suggestions in a drop down menu

//ISSUES: Shows as one div... I cannot seem to figure out how to get it toLOOP AND MAKE A NEW DIV EACH TIME.
//DOES NOT UPDATE WHEN MORE KEYSTROKES ARE MADE. 
function showSuggestions(results, inputVal) {
 results.forEach((word) => {

  if(inputVal === ""){return
  }else{
  const listContainer = document.getElementById("fruitOptions");
  const newDiv = document.createElement("DIV");
	newDiv.textContent = word;
	newDiv.classList.add("has-suggestions")
  listContainer.appendChild(newDiv);
 };
})
}


//Function to populate the Search box with wanted fruit option and clear list of choices.
//ISSUES: currently since I cant put them into their own div it populates with alll the words.
function useSuggestion(e) {
  input.value = e.target.innerHTML;
}

//Event listener when a key is typed to begin the search.
input.addEventListener("keyup", searchHandler);

//Event listener to allow user to pick a fruit from dropdown options, and clears the list.
suggestions.addEventListener("click", useSuggestion);


