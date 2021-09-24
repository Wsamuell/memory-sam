const emojiDisplay = ['🙈', '😭', '🧚‍♂️', '🙈', '😭', '💀', '💀', '🧚‍♂️', '🤖', '🤖']

const pointsEl = document.querySelector('#pointsEl');
const modalPointsEl = document.querySelector('#modalPointsEl');
const highScoreEl = document.getElementById('highScoreEl');
const startEL = document.querySelector('.start');
const reStart = document.querySelector('.restart');
const timerEL = document.querySelector('.timer');
const btnCloseModal = document.querySelector('.close-modal');
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const body = document.body.style


const emoji = ['❤️', '🙈', '😭', '🎶', '🤯', '👿', '💀', '👽', '👾', '🤖', '🎃', '🦾', '🧛🏿', '🧞', '🧚‍♂️', '❤️', '🙈', '😭', '🎶', '🤯', '👿', '💀', '👽', '👾', '🤖', '🎃', '🦾', '🧛🏿', '🧞', '🧚‍♂️']

let win = 0;
let points = 0;
let highScore = 0;
let time;
let countdown;

const closeModal = () => {
    modal.classList.add('hidden')
    overlay.classList.add('hidden')
    body.overflow = 'auto'

}
const openModal = () => { 
    modal.classList.remove('hidden')
    overlay.classList.remove('hidden')
    body.overflow = 'hidden'
    
}

const checkHighScore = () => {
    openModal()
    points += time
    modalPointsEl.textContent = points
    pointsEl.textContent = points
    clearInterval(countdown)
    if(points > highScore) {
        highScore = points
        highScoreEl.textContent = highScore;
    }
};

const shuffle = (array) => {
    let total = array.length
    let availableEmojis, currentEmoji
    
    while (total) {
        currentEmoji = Math.trunc(Math.random() *  total--)
        availableEmojis = array[total];
        array[total] = array[currentEmoji]
        array[currentEmoji] = availableEmojis
    };
    
    return array;
}
const newGame = () => {
        clearInterval(countdown);
        time = 201
        countdown = setInterval(() => {
            time--
        // console.log(time);
        timerEL.textContent = `Time Left: ${time} seconds `
    
        if (time <= 0) {
            checkHighScore();
            clearInterval(countdown);
            window.scroll(top);
            openModal();
        }
    }, 1000);
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
                     win +=  2
                    current[0].classList.add('match')
                    current[1].classList.add('match')
                    rmCurrent()
                    points += 7;
                    pointsEl.textContent = points
                    // const matched = document.querySelector('.match')
                    // console.log(matched);
                    // console.log( points);
                    if(win === emoji.length ) {
                        checkHighScore();
                        window.scroll(top);
                        openModal();
            
                    };
                }else{
                    setTimeout(rmCurrent, 1000)
                                    }
                
            }else if(current.length >= 3){
                newDiv.classList.remove('current')
            }
        })
        
    }
 

    
}
btnCloseModal.addEventListener('click',closeModal )
const restart = () => {
    const emojiGrid = document.querySelectorAll('.grid-item')
    shuffle(emoji)
    for (let i = 0; i < emojiGrid.length; i++) {
        emojiGrid[i].remove()
    }
    closeModal()
    win = 0;
    points = 0;
    pointsEl.textContent = points;
    newGame();
}
startEL.addEventListener('click', restart);
reStart.addEventListener('click', restart);

shuffle(emojiDisplay);
for (let i=0; i < emojiDisplay.length; i++) {
    const newDiv = document.createElement('div');
    newDiv.textContent = emojiDisplay[i]
    newDiv.setAttribute('class', 'grid-item');
    newDiv.classList.add('temp-item');
    document.querySelector('.grid-container').appendChild(newDiv);
}