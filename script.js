const emoji = ['❤️', '🙈', '😭', '🎶', '🤬', '🤯', '😶‍🌫️', '🤢', '👿', '💀', '👽', '👾', '🤖', '🎃', '🦾', '🧛🏿', '🧞', '🧚‍♂️', '🕺', '❤️', '🙈', '😭', '🎶', '👀', '🤬', '🤯', '😶‍🌫️', '🤢', '👿', '💀', '👽', '👾', '🤖', '🎃', '🦾', '👀', '🧛🏿', '🧞', '🧚‍♂️', '🕺']

const pointsEl = document.getElementById('pointsEl')

let points = 0;

const shuffle = (array) => {
    let total = array.length
    let availableEmojis, currentEmoji
    
    while (total) {
        currentEmoji = Math.trunc(Math.random() *  total--)
        availableEmojis = array[total];
        array[total] = array[currentEmoji]
        array[currentEmoji] = availableEmojis
    };
    
    return array
}


const newGame = () => {
    shuffle(emoji)
    for (let i=0; i < emoji.length; i++) {
        const newDiv = document.createElement('div');
        newDiv.textContent = emoji[i]
        // console.log(emoji.indexOf(emoji[i]))
        // console.log(newDiv.setAttribute('class', `item-${emoji.indexOf(emoji[i])}`));
        // document.querySelector('.grid-item').classList.add(`item-${emoji.indexOf(emoji[i])}`);
        newDiv.setAttribute('class', 'grid-item');
        document.querySelector('.grid-container').appendChild(newDiv);
        newDiv.addEventListener('click', function() {
            const current = document.getElementsByClassName('current')
            newDiv.classList.add('current')


            if(current.length === 2) {

                if(current[0].textContent === current[1].textContent) {
                    current[0].classList.add('match')
                    current[1].classList.add('match')
                    current[1].classList.remove('current')
                    current[0].classList.remove('current')
                    points += 7;
                    pointsEl.textContent = points
                    console.log(points)
                }else{
                    console.log('cover me please!');
                    current[1].classList.remove('current')
                    current[0].classList.remove('current')
                }
            }else if(current.length >= 3){
                newDiv.classList.remove('current')
            }
        })

        
    }
    const emojiClk = document.querySelectorAll('.grid-item');
    // console.log(emojiClk);
    
}   
newGame();

