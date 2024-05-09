function createBars() {
    const bar = document.getElementById('bar');
    bar.innerHTML = '';
    array.forEach(number => {
        const bars = document.createElement('div');
        bars.classList.add('bar');
        // Example: Assign different colors based on the value of the number
        if (number < 25) {
            bars.classList.add('red');
        } else if (number < 50) {
            bars.classList.add('orange');
        } else if (number < 75) {
            bars.classList.add('green');
        } else {
            bars.classList.add('blue');
        }
        bars.style.height = `${number*4}px`;
        bar.appendChild(bars);
    });
}


let array = [];
// let n = 100;
function generateNumbers() {
    array = [];
    for (let i = 0; i < 100; i++) {
        let randomNumber = Math.floor(Math.random() * 101);
        array.push(randomNumber);
    }
    return array;
}

array = generateNumbers();
createBars();

document.getElementById('newArrayBtn').addEventListener('click', function () {
    array = generateNumbers();
    createBars();
});




