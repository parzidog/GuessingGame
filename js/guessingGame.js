let number = Math.floor(Math.random() * 100);
let submitButton = document.getElementById('submit-txt-btn');
let hintButton = document.getElementById('hint-btn');
let resetButton = document.getElementById('reset-btn');
let guesses = [];

submitButton.addEventListener('click', getInput);
hintButton.addEventListener('click', getHint);
resetButton.addEventListener('click', reset);



function getInput(){
    let text = document.getElementById('text-box')
    
    numberGenerator(number, text.value);

    guesses.push(text.value);

    append(text.value);

    text.value = null;
    console.log(number);
    console.log(guesses);
}

function getHint(){
    let num = [];
    num[0] = Math.floor(Math.random() * 100);
    num[1] = Math.floor(Math.random() * 100);
    num[3] = number;

    let array = shuffle(num);

    alert(array);

}

function reset(){
    document.location.reload();
    number = Math.floor(Math.random() * 100);
    let text = document.getElementById('text-box')
    
    text.value = null;
}



function numberGenerator(num, guess){

    if(guesses[3] != null && guess != num){
        alert('GAME OVER! You lost! The number was ' + num)
        reset();
    }
    else if ( guess == num){
        alert('YOU WON!! CONGRATULATIONS!!')
    }   
    else if (guess <= num+5 && guess >= num-5){
        alert('You are within 5 of the number!')
    }
    else if (guess <= num+10 && guess >= num-10){
        alert('You are within 10 of the number!')
    }
    else if (guess < num){
        alert('You are more than 10 numbers away from the number! Guess higher.')
    }
    else if (guess > num){
        alert('You are more than 10 numbers away from the number! Guess lower.')
    }
}


function append(num) {
    var ul = document.getElementById("list");
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(num));
    ul.appendChild(li);
  }

  function shuffle(array) {
    var m = array.length, t, i;
  
    // While there remain elements to shuffle…
    while (m) {
  
      // Pick a remaining element…
      i = Math.floor(Math.random() * m--);
  
      // And swap it with the current element.
      t = array[m];
      array[m] = array[i];
      array[i] = t;
    }
  
    return array;
  }
