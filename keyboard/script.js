window.onload = function() {
let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('')
        console.log("This is the alphabet")
        console.log(alphabet)
    // start
let keyboard = document.getElementById('keyboard')
    // end

    alphabet.forEach(letter => {
        // start
let keyButton = document.createElement('input')
keyButton.type = 'button'
keyButton.value = letter
keyButton.addEventListener('click', event => {
    highlightLetter(event.target.id)
    })
keyboard.appendChild(keyButton);
        // end
    });
}

// start

// end


function highlightLetter(letter){
    // start
console.log(letter)
    // end
}
