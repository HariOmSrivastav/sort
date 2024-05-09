async function quickSortVisual() {
    await quickSortHelper(0, array.length - 1);
    createBars(); // Update bars after sorting
}

async function quickSortHelper(start, end) {
    if (start < end) {
        const pivotIndex = await partition(start, end);
        await quickSortHelper(start, pivotIndex - 1);
        await quickSortHelper(pivotIndex + 1, end);
    }
}

async function partition(start, end) {
    const pivot = array[end];
    let i = start - 1;

    const bars = document.querySelectorAll('.bar');

    for (let j = start; j < end; j++) {
        // Visual representation of comparison
        bars[j].style.backgroundColor = 'aqua';
        bars[end].style.backgroundColor = 'green';

        // Delay to visualize the comparison
        await new Promise(resolve => setTimeout(resolve,0.5));

        if (array[j] < pivot) {
            i++;
            swap(array, i, j);
            swapBars(i, j);
        }

        // Reset background color after comparison
        bars[j].style.backgroundColor = '';
        bars[end].style.backgroundColor = '';
    }

    swap(array, i + 1, end);
    swapBars(i + 1, end);

    return i + 1;
}

document.getElementById('quickSortBtn').addEventListener('click', async function () {
    await quickSortVisual();
});
