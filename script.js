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
    const check =newDiv.appendChild(eachEmoji)
    newDiv.setAttribute('class', 'grid-item');
    console.log(check)
    // document.insertBefore(check)
    document.querySelector('.grid-container').appendChild(check);
}
}
newGame()