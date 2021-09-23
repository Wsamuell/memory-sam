const emoji = ['🙈', '😭',, '🧚‍♂️', '🙈', '😭',, '🧚‍♂️']

const pointsEl = document.querySelector('#pointsEl');
const modalPointsEl = document.querySelector('#modalPointsEl');
const highScoreEl = document.getElementById('HighScoreEl');
const startEL = document.querySelector('.start');
const timerEL = document.querySelector('.timer');
const btnCloseModal = document.querySelector('.close-modal');
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');



// const emoji = ['❤️', '🙈', '😭', '🎶', '🤯', '👿', '💀', '👽', '👾', '🤖', '🎃', '🦾', '🧛🏿', '🧞', '🧚‍♂️', '❤️', '🙈', '😭', '🎶', '🤯', '👿', '💀', '👽', '👾', '🤖', '🎃', '🦾', '🧛🏿', '🧞', '🧚‍♂️']

let win = 0;
let points = 0;
let highScore = 0;
let time = 10

const closeModal = () => {
    modal.classList.add('hidden')
    overlay.classList.add('hidden')
}
const openModal = () => { 
    modal.classList.remove('hidden')
    overlay.classList.remove('hidden')

    // overlay.classList.add
}

const checkHighScore = () => {
    openModal()
    console.log(points)
    points += time
    console.log(points)
    modalPointsEl.textContent = points
    pointsEl.textContent = points
    clearInterval(countdown)
    if(points > highScore) {
        highScore = points
        highScoreEl.textContent = highScore;
    }else{
        console.log('score didnt change')
    }
};
const timer = () => {
    time--
    timerEL.textContent = `Time Left: ${time}`

    if (time <= 0) {
        clearInterval(countdown)
        // modal.classList.remove('hidden')
        openModal()
        time = 1
        // console.log(modal.classList.remove('hidden'));
    }

}
const countdown = setInterval(timer, 1000)
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
    countdown;
    points = 0
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
                     win +=  2
                    current[0].classList.add('match')
                    current[1].classList.add('match')
                    rmCurrent()
                    points += 7;
                    pointsEl.textContent = points
                    // const matched = document.querySelector('.match')
                    // console.log(matched);
                    console.log( points);
                    win === emoji.length ? checkHighScore(): console.log('not yet')
                      ;

                    // console.log()
                    // console.log(highScore);
                }else{
                    console.log('cover me please!');
                    setTimeout(rmCurrent, 1000)
                    
                    // current[1].classList.remove('current')
                    // current[0].classList.remove('current')
                }
                


            }else if(current.length >= 3){
                newDiv.classList.remove('current')
            }
        })
        
    }
 

    
}   
btnCloseModal.addEventListener('click',closeModal )
newGame();
// startEL.addEventListener('click', newGame)


