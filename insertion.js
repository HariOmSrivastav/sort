function swapBars(index1, index2) {
    const bars = document.querySelectorAll('.bar');
    const tempHeight = bars[index1].style.height;
    bars[index1].style.height = bars[index2].style.height;
    bars[index2].style.height = tempHeight;
}
async function insertionSortVisual() {
    const bars = document.querySelectorAll('.bar');
    const len = array.length;
    for (let i = 1; i < len; i++) {
        let key = array[i];
        let j = i - 1;
        
        // Visual representation of the current element being considered
        bars[i].style.backgroundColor = 'aqua';

        // Delay to visualize the current element
        await new Promise(resolve => setTimeout(resolve, 1));

        while (j >= 0 && array[j] > key) {
            // Visual representation of comparison
            bars[j].style.backgroundColor = 'green';
            bars[j + 1].style.backgroundColor = 'green';

            // Delay to visualize the comparison
            await new Promise(resolve => setTimeout(resolve, 0.5));

            // Actual swapping
            array[j + 1] = array[j];
            swapBars(j + 1, j);

            // Reset background color after comparison
            bars[j].style.backgroundColor = '';
            bars[j + 1].style.backgroundColor = '';

            j--;
        }

        array[j + 1] = key;
        bars[i].style.backgroundColor = '';
    }
}

document.getElementById('insertionSortBtn').addEventListener('click', async function () {
    await insertionSortVisual();
});
