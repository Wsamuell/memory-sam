const emoji = ['😡', '❤️', '👌', '🙈', '😭', '🎶', '👀', '😇', '🤬', '🤯', '😶‍🌫️', '😵‍💫', '🤢', '👿', '💀', '👽', '👾', '🤖', '🎃', '🦾', '👀', '🧛🏿', '🧞', '🧚‍♂️', '🕺', '😡', '❤️', '👌', '🙈', '😭', '🎶', '👀', '😇', '🤬', '🤯', '😶‍🌫️', '😵‍💫', '🤢', '👿', '💀', '👽', '👾', '🤖', '🎃', '🦾', '👀', '🧛🏿', '🧞', '🧚‍♂️', '🕺']



const shuffle = (array) => {
    let newLength = array.length, availableEmoji, currentEmoji

    while (newLength) {
        currentEmoji = Math.trunc(Math.random() *  newLength--)
        availableEmoji = array[newLength];
        array[newLength] = array[currentEmoji]
        array[currentEmoji] = availableEmoji
    };

    return array
}


const newGame = () => {
shuffle(emoji)
for (let i=0; i < emoji.length; i++) {
    const newDiv = document.createElement('div');
    const eachEmoji = document.createTextNode(emoji[i]);
    newDiv.appendChild(eachEmoji)
    newDiv.setAttribute('class', 'grid-item');
    document.querySelector('.grid-container').appendChild(newDiv);
    
}
}
newGame()
document.addEventListener('click', function() {
    const click = document.querySelectorAll('grid-item').textContent
    console.log(click);

})