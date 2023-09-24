import analyzer from './analyzer.js';

const text = document.querySelector('textarea');

text.addEventListener("input", words)

function words(){
  const totalWords= analyzer.getWordCount(text.value);
  document.querySelector("li[data-testid='word-count']").innerHTML = "Total palabras " + totalWords 
}

text.addEventListener("input",characters);

function characters(){
  const totalCharacters = analyzer.getCharacterCount(text.value);
  document.querySelector("li[data-testid='character-count']").innerHTML = "Total Caracteres " + totalCharacters
}

text.addEventListener("input", charactersWithoutSpaceSigns);

function charactersWithoutSpaceSigns(){
  const totalCharactersWithoutSpaceSigns = analyzer.getCharacterCountExcludingSpaces(text.value);
  document.querySelector("li[data-testid='character-no-spaces-count']").innerHTML = "Total Caracteres sin espacios y signos " + totalCharactersWithoutSpaceSigns 
}

text.addEventListener("input",averageWords);

function averageWords(){
  const average = analyzer.getAverageWordLength(text.value);
  document.querySelector("li[data-testid = 'word-length-average']").innerHTML = "Longitud media de las palabras " + average
}

text.addEventListener("input", numbers);

function numbers(){
  const totalNumbers = analyzer.getNumberCount(text.value);
  document.querySelector("li[data-testid = 'number-count']").innerHTML = "Total numeros " + totalNumbers
}

text.addEventListener("input", sum);

function sum(){
  const numbersSum = analyzer.getNumberSum(text.value);
  document.querySelector("li[data-testid='number-sum']").innerHTML = "Suma de numeros " + numbersSum
}

const button = document.getElementById("reset-button");

button.addEventListener("click", deleteText);

function deleteText(){
  text.value = "";
  words(0);
  characters(0);
  charactersWithoutSpaceSigns(0);
  averageWords(0);
  numbers(0);
  sum(0);
}
//TODO: escuchar eventos del DOM e invocar  los métodos del objeto `analyzer`