//business logic
var letters=[];

var vowels = ["a","e","i","o","u","A","E","I","O","U"];
var consonants = ["b","c","d","f","g","h","j","k","l","m","n","p","q","r","s","t","v","x","z","y"];


//user logic
$(document).ready(function() {
  $("form#pig-latin").submit(function(event) {
    event.preventDefault();

    // var inputSentence = $("#sentence").val();
    // var words=inputSentence.split(" ");
    // console.log(words);

    var inputSentence = $("#sentence").val();
    var words = inputSentence.split(" ");

    words.forEach(function(word) {

      vowels.forEach(function(vowel) {
        if (vowel === word[0]) {
          word+="way ";
        }
      });

      // consonants.forEach(function(consonant) {
      //     if (consonant === word[0]) {
      //       word+= word[0] + "ay ";
      //       word = word.slice(1);
      //     }
      //   });

      //train

      for (var i = 0; i < word.length; i++) {
        if (word[i] === "q") {
          if (word[i+1] === "u") {
            var partConsonant2 = word.slice(0, i+2);
            console.log(partConsonant2);
            var partVowel2 = word.slice(i+2);
            console.log(partVowel2);
            word = partVowel2+partConsonant2+"ay ";
            break
          }

        } else if (vowels.indexOf(word[i]) != -1) {

        var partConsonant = word.slice(0, i);
        console.log(i);
        var partVowel = word.slice(i);
        word = partVowel+partConsonant+"ay";
        break
      }
      }


      $(".output").append(word);
    });



  });
});
