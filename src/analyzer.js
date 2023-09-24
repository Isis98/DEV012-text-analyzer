
const analyzer = {  
  getWordCount: (text) => {
    //TODO: esta función debe retornar el recuento de palabras que se encuentran en el parámetro `text` de tipo `string`.
    const textWithOutSpaces = text.replace(/[^A-Za-z\s]+/gim, "").trimStart().trimEnd()
  
    if (textWithOutSpaces === "") return 0
    // si quedo alguna palabra va a seguir con la ejecución, por ejemplo "hola quedo una frase"
    const splitWords = textWithOutSpaces.split(/\s+/);
      
    const wordsCount = splitWords.length;
      
    return wordsCount;
  },
  getCharacterCount: (text) => {
    //TODO: esta función debe retornar el recuento de caracteres que se encuentran en el parámetro `text` de tipo `string`.
    const splitCharacters = text.split("");
    
    const charactersCount = splitCharacters.length;
    
    return charactersCount
  },
  getCharacterCountExcludingSpaces: (text) => {
    //TODO: esta función debe retornar el recuento de caracteres excluyendo espacios y signos de puntuación que se encuentran en el parámetro `text` de tipo `string`.
    const listOfCharactersToExclude = ['.', ',', ';', ':', '"', '¿', '?', '¡', '!', '-', '«', '»', '[', ']', '{', '}', '(', ')', ' '];
    let totalOfCharactersWithOutSpaceAndSigns= 0;
    
    const splitCharacters = text.trimStart().trimEnd().split("");
    
    splitCharacters.forEach(iterateSplittedCharacters);
    function iterateSplittedCharacters(value){
      if(!listOfCharactersToExclude.includes(value)){
        totalOfCharactersWithOutSpaceAndSigns += 1
      }
    }
    
    return totalOfCharactersWithOutSpaceAndSigns
  },
  getAverageWordLength: (text) => {    
    //TODO: esta función debe retornar la longitud media de palabras que se encuentran en el parámetro `text` de tipo `string`.
    const splitWords = text.replace(/[^A-Za-z\s]+/gim, "").trimStart().trimEnd().split(/\s+/);
    
    const wordsCount = splitWords.length;
    //espacio no signos si. usar hasta 2 decimales
    const listOfCharactersToExclude = ['.', ',', ';', ':', '"', '¿', '?', '¡', '!', '-', '«', '»', '[', ']', '{', '}', '(', ')', ' '];
    let totalOfCharactersWithoutSpaceAndSigns= 0;
    
    const splitCharacters = text.replace(/[^A-Za-z]/gim, "").split("");
    
    splitCharacters.forEach(iterateSplittedCharacters);
    function iterateSplittedCharacters(value){
      if(!listOfCharactersToExclude.includes(value)){
        totalOfCharactersWithoutSpaceAndSigns += 1
      }
    }     
    const divisionOfTotals = totalOfCharactersWithoutSpaceAndSigns/wordsCount ;
    
    const roundedDivision = Math.round(divisionOfTotals*100)/100;
    
    return roundedDivision
  },
  getNumberCount: (text) => {
    //TODO: esta función debe retornar cúantos números se encuentran en el parámetro `text` de tipo `string`.
    const numbers = text.match(/\b\d+(\.\d+)?\b/g);
    
    if (numbers === null){
      return 0;
    }
    
    const totalOfNumbers = numbers.length;
    
    return totalOfNumbers
  },
  getNumberSum: (text) => {
    //TODO: esta función debe retornar la suma de todos los números que se encuentran en el parámetro `text` de tipo `string`.
    let numberSum = 0;
    
    const numbers = text.match(/\b\d+(\.\d+)?\b/g);

    if (numbers === null){
      return 0;
    }
    
    for( let i = 0; i < numbers.length; i++){
    
      numberSum = numberSum + parseFloat(numbers[i])
    }  
    return numberSum
  },
};

export default analyzer;
