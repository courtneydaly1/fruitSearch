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
  showSuggestions(filteredFruit, str);
}

//Function to handle option selection. User's input is evaluated and scanned through array of fruit.
function searchHandler(e) {
  const inputVal = e.target.value;
  search(inputVal);
};


//highlights parts of word from user's typed str

function highlightSearch(word, search){
  let matchingIdx = word.indexOf(search);
  let first = word.substring(0, matchingIdx);
  let second = search;
  let third = word.substring(matchingIdx + search.length);

  let secondSpan = document.createElement("span");
  secondSpan.classList.add("boldSearch");
  secondSpan.textContent = second;
  let firstSpan = document.createElement("span");
  firstSpan.textContent = first;
  let thirdSpan = document.createElement("span");
  thirdSpan.textContent = third;

  let mainLi = document.createElement("li");
mainLi.appendChild(firstSpan);
mainLi.appendChild(secondSpan);
mainLi.appendChild(thirdSpan);
  return mainLi;
}

//Function to show suggestions in a drop down menu
function showSuggestions(results, inputVal) {
  const listContainer = document.getElementById("fruitOptions");
  listContainer.replaceChildren(); //Clears old list 
  results.forEach((word) => {

  if(inputVal === ""){return
  }else{
  
  const newLi = document.createElement("li");
	newLi.innerHTML = highlightSearch(word, inputVal);
	newLi.classList.add("has-suggestions");

  listContainer.appendChild(highlightSearch(word, inputVal)); //highlights search chars

 };
})
}


//Function to populate the Search box with wanted fruit option and clear list of choices.
//ISSUES: due to the spans it will not put in chosen word. It will now put in the first word, not the clicked word
function useSuggestion(e) {
const clickedFruit = e.target
const liElements = document.querySelector("li");
// liElements.forEach(li => {
//   const spans = li.getElementsByTagName('li');
//   const values = Array.from(spans).map(span => span.textContent).join('');
  input.value = liElements.innerText
};





//Event listener when a key is typed to begin the search.
input.addEventListener("keyup", searchHandler);

//Event listener to allow user to pick a fruit from dropdown options, and clears the list.
suggestions.addEventListener("click", useSuggestion);


