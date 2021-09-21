const emoji = ['😡', '❤️', '👌', '🙈', '😭', '🎶', '👀', '😇', '🤬', '🤯', '😶‍🌫️', '😵‍💫', '🤢', '👿', '💀', '👽', '👾', '🤖', '🎃', '🦾', '👀', '🧛🏿', '🧞', '🧚‍♂️', '🕺', '😡', '❤️', '👌', '🙈', '😭', '🎶', '👀', '😇', '🤬', '🤯', '😶‍🌫️', '😵‍💫', '🤢', '👿', '💀', '👽', '👾', '🤖', '🎃', '🦾', '👀', '🧛🏿', '🧞', '🧚‍♂️', '🕺']

const emojiClk = document.querySelector('.grid-item');


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
        newDiv.textContent = emoji[i]
        console.log(emoji.indexOf(emoji[i]))
        newDiv.setAttribute('class', `item-${emoji.indexOf(emoji[i])}`);
        newDiv.setAttribute('class', 'grid-item');
        // document.querySelector('.grid-item').classList.add(`item-${emoji.indexOf(emoji[i])}`);

        document.querySelector('.grid-container').appendChild(newDiv);
    }
    
    // emojiClk.addEventListener('click', function() {
        //     // emojiClk
        //     console.log('im here');
        
        // })
    }   
    newGame();
    emojiClk.addEventListener('click', function() {
        console.log('emojiClk');

    });
