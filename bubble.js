
// Function to swap two elements in an array
function swap(arr, index1, index2) {
    const temp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = temp;
}

// Function to swap two bars visually
function swapBars(index1, index2) {
    const bars = document.querySelectorAll('.bar');
    const tempHeight = bars[index1].style.height;
    bars[index1].style.height = bars[index2].style.height;
    bars[index2].style.height = tempHeight;
}

async function bubbleSortVisual() {
    const bars = document.querySelectorAll('.bar');
    for (let i = 0; i < array.length - 1; i++) {
        for (let j = 0; j < array.length - i - 1; j++) {
            // Visual representation of comparison
            bars[j].style.backgroundColor = 'aqua';
            bars[j + 1].style.backgroundColor = 'green';

            // Delay to visualize the comparison
            await new Promise(resolve => setTimeout(resolve, 0.5));

            // Actual comparison and swapping if needed
            if (array[j] > array[j + 1]) {
                swap(array, j, j + 1);
                swapBars(j, j + 1);
            }

            // Reset background color after comparison
            bars[j].style.backgroundColor = '';
            bars[j + 1].style.backgroundColor = '';
        }
    }
}


document.getElementById('bubbleSortBtn').addEventListener('click', async function () {
    await bubbleSortVisual();
});