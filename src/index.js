import analyzer from './analyzer.js';

const text = document.querySelector('textarea');

text.addEventListener("input", words)

function words(){
const totalWords= analyzer.getWordCount(text.value);
document.querySelector("li[data-testid='word-count']").innerHTML = "Total palabras " + totalWords
}



//TODO: escuchar eventos del DOM e invocar  los métodos del objeto `analyzer`