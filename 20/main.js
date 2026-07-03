// 1.
function showMessageAfterDelay(message, delayMs) {
    setTimeout(() => {
        console.log(`⏰ ${message}`);
        alert(`Повідомлення: ${message}`);
    }, delayMs);
}
document.getElementById('showMessageBtn').addEventListener('click', () => {
    const message = document.getElementById('messageInput').value;
    const delay = parseInt(document.getElementById('delayInput').value);
    if (message.trim() === '') {
        alert('Будь ласка, введіть повідомлення!');
        return;
    }
    console.log(`Повідомлення буде показано через ${delay} мс...`);
    showMessageAfterDelay(message, delay);
});
// 2.
let counterInterval = null;
let counterValue = 0;
function startCounter() {
    const counterDisplay = document.getElementById('counterDisplay');
    const startBtn = document.getElementById('startCounterBtn');
    if (counterInterval) {
        clearInterval(counterInterval);
    }
    counterValue = 0;
    counterDisplay.textContent = counterValue;
    startBtn.disabled = true;
    startBtn.textContent = 'Лічильник працює...';
    counterInterval = setInterval(() => {
        counterValue++;
        counterDisplay.textContent = counterValue;
        console.log(`Лічильник: ${counterValue}`);
        if (counterValue >= 10) {
            clearInterval(counterInterval);
            console.log('✅ Лічильник досяг 10! Зупинено.');
            startBtn.disabled = false;
            startBtn.textContent = 'Запустити лічильник';
        }
    }, 1000);
}
document.getElementById('startCounterBtn').addEventListener('click', startCounter);
// 3.
function getRandomColor() {
    // Отримуємо CSS змінні з root
    const rootStyles = getComputedStyle(document.documentElement);
    const colorVariables = [
        '--color-random-1',
        '--color-random-2',
        '--color-random-3',
        '--color-random-4',
        '--color-random-5',
        '--color-random-6'
    ];
    const randomIndex = Math.floor(Math.random() * colorVariables.length);
    const randomColor = rootStyles.getPropertyValue(colorVariables[randomIndex]).trim();
    return randomColor;
}
function changeBackgroundColor() {
    const newColor = getRandomColor();
    document.body.style.backgroundColor = newColor;
    console.log(`🎨 Новий колір фону: ${newColor}`);
}
document.getElementById('changeColorBtn').addEventListener('click', changeBackgroundColor);
// додаткове завдання: таймер
class Timer {
    constructor() {
        this.totalTime = 25 * 60; // 25 хвилин у секундах
        this.remainingTime = this.totalTime;
        this.interval = null;
        this.isRunning = false;
        this.display = document.getElementById('timerDisplay');
        this.startBtn = document.getElementById('startTimerBtn');
        this.resetBtn = document.getElementById('resetTimerBtn');
        this.progressCircle = document.querySelector('.timer-circle-progress');
        this.radius = this.progressCircle.r.baseVal.value;
        this.circumference = 2 * Math.PI * this.radius;
        this.progressCircle.style.strokeDasharray = `${this.circumference} ${this.circumference}`;
        this.progressCircle.style.strokeDashoffset = 0;
        this.updateDisplay();
        this.bindEvents();
    }
    bindEvents() {
        this.startBtn.addEventListener('click', () => this.toggleTimer());
        this.resetBtn.addEventListener('click', () => this.resetTimer());
    }
    toggleTimer() {
        if (this.isRunning) {
            this.pauseTimer();
        } else {
            this.startTimer();
        }
    }
    startTimer() {
        if (this.remainingTime <= 0) return;
        this.isRunning = true;
        this.startBtn.textContent = 'Pause';
        this.startBtn.disabled = false;
        this.interval = setInterval(() => {
            this.remainingTime--;
            this.updateDisplay();
            this.updateProgress();
            if (this.remainingTime <= 0) {
                this.timerComplete();
            }
        }, 1000);
        console.log('⏱️ Таймер запущено');
    }
    pauseTimer() {
        this.isRunning = false;
        this.startBtn.textContent = 'Start';
        clearInterval(this.interval);
        console.log('⏸️ Таймер на паузі');
    }
    resetTimer() {
        this.pauseTimer();
        this.remainingTime = this.totalTime;
        this.startBtn.textContent = 'Start';
        this.updateDisplay();
        this.updateProgress();
        console.log('🔄 Таймер скинуто');
    }
    timerComplete() {
        this.pauseTimer();
        this.remainingTime = 0;
        this.updateDisplay();
        this.startBtn.textContent = 'Start';
        console.log('⏰ Час вийшов!');
        alert('Час вийшов!');
    }
    updateDisplay() {
        const minutes = Math.floor(this.remainingTime / 60);
        const seconds = this.remainingTime % 60;
        this.display.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    }
    updateProgress() {
        const offset = this.circumference - (this.remainingTime / this.totalTime) * this.circumference;
        this.progressCircle.style.strokeDashoffset = offset;
    }
}
const timer = new Timer();