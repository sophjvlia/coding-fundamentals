let rootElement = document.querySelector(':root')
let gameElement = document.querySelector('#game');
let dinoElement = document.querySelector('.dino');
let scoreElement = document.querySelector('.score');
let groundElement = document.querySelector('.ground');
let cactusElement = document.querySelector('.cactus');

let gameSpeed = 4000;
let jumpSpeed = 600;
let maxJump = 250;
let speedScale = 1;

let score = 0;
let gameStart = false;
let gameOver = false;

function setCustomProperty(element, prop, value) {
    element.style.setProperty(prop, value);
}

function handleJump(e) {
    if (e.code !== 'Space') return;
    let audio = document.querySelector('.audio-jump');
    audio.play()
    dinoElement.classList.add('jump'); 
    dinoElement.addEventListener('animationend', function() {
        dinoElement.classList.remove('jump');
    });
}

function startGame() {
    gameStart = true;
    gameElement.classList.add('game-start');
    document.addEventListener('keydown', handleJump);
    window.requestAnimationFrame(updateGame);
}

function endGame() {
    let audio = document.querySelector('.audio-die');
    audio.play()
    gameOver = true;
    gameElement.classList.add('game-over');  
    document.removeEventListener('keydown', handleJump);
}

/*As long as the game is running, this function is called*/
function updateGame() {
    setCustomProperty(rootElement, "--game-speed", gameSpeed);
    setCustomProperty(rootElement, "--jump-speed", jumpSpeed);
    setCustomProperty(rootElement, "--max-jump", maxJump);
    setCustomProperty(rootElement, "--speed-scale", speedScale);

    /*Update score*/
    updateScore() 

    /*Update cactus*/
    updateCactus()

    /*Check if game over*/
    if (checkGameOver()) {
        endGame();
        return;
    }
    window.requestAnimationFrame(updateGame);
}

let scoreInterval = 10;
let currentScoreInterval = 0;

function updateScore() {
    currentScoreInterval += 1;
    if (currentScoreInterval % scoreInterval !== 0) {
        return;
    } else {
        score += 1;
    }
    
    if (score === 0) return;

    if (score % 100 === 0) {
        let audio = document.querySelector('.audio-point');
        audio.play()
        gameSpeed -= speedScale;
    }

    let currentScoreElement = scoreElement.querySelector('.current-score');
    currentScoreElement.innerText = score.toString().padStart(5, '0');
}

function updateCactus() {
    let cactusXPosition = cactusElement.getBoundingClientRect().x;
    let isOffScreen = cactusXPosition > window.innerWidth;
    if (isOffScreen === false) return;

    let cacti = ["cactus-small-1", "cactus-small-2", "cactus-small-3"];
    let randomNum = Math.floor(Math.random() * cacti.length);
    let cactus = cacti[randomNum];

    cactusElement.classList.remove(
        "cactus-small-1",
        "cactus-small-2",
        "cactus-small-3"
    );
    cactusElement.classList.add(cactus);
}

function isCollision(dinoRect, cactusRect) {  
    // AABB - Axis-aligned bounding box  
    return (
            dinoRect.x < cactusRect.x + cactusRect.width &&
            dinoRect.x + dinoRect.width > cactusRect.x &&
            dinoRect.y < cactusRect.y + cactusRect.height &&
             dinoRect.y + dinoRect.height > cactusRect.y
     );
}

function checkGameOver() {
    if (gameOver) return true;
    let dinoRect = dinoElement.getBoundingClientRect();
    let cactusRect = cactusElement.getBoundingClientRect();
    if (isCollision(dinoRect, cactusRect)) {
        return true;
    } else {
        return false;
    }
}

function fitScreen() {
    let width = window.innerWidth;
    let height = window.innerHeight / 2;

    gameElement.style.width = width + 'px';
    gameElement.style.height = height + 'px';
    gameElement.style.zoom = 1.5;
} 

window.addEventListener('load', function() {
    fitScreen();
    window.addEventListener('resize', fitScreen);

    document.addEventListener('keydown', startGame, { once: true });
});