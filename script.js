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

// Function to search case insensative string values found in the array, and create a new array.

function search(str) {
  let results = [];
  let lowerCaseFruit = [];

  for (let i = 0; i < fruit.length; i++) {
    lowerCaseFruit.push(fruit[i].toLowerCase());
  }
  const filteredFruit = lowerCaseFruit.filter((chars) => chars.includes(str));
  results.push(filteredFruit);
  return results;
}

//Function to handle option selection. User's input is evaluated and scanned through array of fruit.
function searchHandler(e) {
	const inputVal = e.target.value;
	search(inputVal);

}

//Function to show suggestions in a drop down menu

//ISSUES: SHOWS AS BULLET POINTS AND NOT A DROPDOWN. SHOWS EXTRA BULLET POINTS. I DONT KNOW WHAT inputVal IS USED FOR.
function showSuggestions(results, inputVal) {
const suggestionsHTML = results.map(val => `<li>${val}<li>`);
suggestions.innerHTML = suggestionsHTML;
}

//Function to populate the Search box with wanted fruit option.
function useSuggestion(e) {
	const clickedOption = e.target.textcontent;

  
}

//Event listener when a key is typed to begin the search.
input.addEventListener("keyup", searchHandler);

//Event listener to allow user to pick a fruit from dropdown options, and clears the list.
suggestions.addEventListener("click", useSuggestion);
