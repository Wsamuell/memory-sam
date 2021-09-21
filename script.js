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
    const eachEmoji = document.createTextNode(emoji[i]);
    const newDiv = document.createElement('div');
    newDiv.setAttribute('class', 'grid-item');
    const check =newDiv.appendChild(eachEmoji)
    console.log(check)
    // document.insertBefore(check)
    // console.log(eachEmoji);
    // return check
}
}
newGame()