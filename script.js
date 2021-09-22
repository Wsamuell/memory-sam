const emoji = ['❤️', '🙈', '😭', '🎶', '🤯', '👿', '💀', '👽', '👾', '🤖', '🎃', '🦾', '🧛🏿', '🧞', '🧚‍♂️', '❤️', '🙈', '😭', '🎶', '🤯', '👿', '💀', '👽', '👾', '🤖', '🎃', '🦾', '🧛🏿', '🧞', '🧚‍♂️']

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
        newDiv.setAttribute('class', 'grid-item');
        document.querySelector('.grid-container').appendChild(newDiv);
        newDiv.addEventListener('click', function() {
            const current = document.getElementsByClassName('current')
            newDiv.classList.add('current')


            if(current.length === 2) {
                const rmCurrent = () => {
                    current[1].classList.remove('current')
                    current[0].classList.remove('current')
                }
                if(current[0].textContent === current[1].textContent) {
                    current[0].classList.add('match')
                    current[1].classList.add('match')
                    const matched = document.querySelector('.match')
                    setTimeout(rmCurrent, 1000)
                    points += 7;
                    pointsEl.textContent = points
                    // matched.length === emoji.length ? console.log("you win"): console.log('you lose');
                    console.log(emoji.length)
                    console.log(matched.length)
                    // console.log(matched);
                }else{
                    console.log('cover me please!');
                    setTimeout(rmCurrent, 1000)
                    
                    // current[1].classList.remove('current')
                    // current[0].classList.remove('current')
                }
                // console.log(matched);
            }else if(current.length >= 3){
                newDiv.classList.remove('current')
            }
        })
        
        
    }
    
}   
newGame();

