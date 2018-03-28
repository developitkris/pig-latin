//business logic

var letters=[];


var vowels = ["a","e","i","o","u","A","E","I","O","U"];
var consonants = ["b","c","d","f","g","h","j","k","l","m","n","p","q","r","s","t","v","x","z","y"];

// function splitWords(words) {
//   words.forEach(function(word) {
//     word.split("");
//
//
//
//
//   });
// }


//user logic
$(document).ready(function() {
  $("form#pig-latin").submit(function(event) {
    event.preventDefault();
    //
    // var inputSentence = $("#sentence").val();
    // var words=inputSentence.split(" ");
    // console.log(words);

    var inputWord = $("#sentence").val();
    var characters = inputWord.split("");
    console.log(characters)

    vowels.forEach(function(vowel) {
      if (vowel === characters[0]) {
        characters.push("ay");
      }
    })
    var newWord = characters.join('');

    console.log(characters)

    $(".output").text(newWord);



  });

});
