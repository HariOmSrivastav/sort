async function mergeSortVisual() {
    await mergeSortHelper(0, array.length - 1);
}

async function mergeSortHelper(start, end) {
    if (start < end) {
        const mid = Math.floor((start + end) / 2);
        await mergeSortHelper(start, mid);
        await mergeSortHelper(mid + 1, end);
        await merge(start, mid, end);
    }
}

async function merge(start, mid, end) {
    const bars = document.querySelectorAll('.bar');
    const leftArray = array.slice(start, mid + 1);
    const rightArray = array.slice(mid + 1, end + 1);
    let i = 0, j = 0, k = start;

    while (i < leftArray.length && j < rightArray.length) {
        // Visual representation of comparison
        bars[start + i].style.backgroundColor = 'aqua';
        bars[mid + 1 + j].style.backgroundColor = 'green';

        // Delay to visualize the comparison
        await new Promise(resolve => setTimeout(resolve, 0.5));

        if (leftArray[i] <= rightArray[j]) {
            array[k++] = leftArray[i++];
        } else {
            array[k++] = rightArray[j++];
        }

        // Update the heights of bars
        createBars();
    }

    // Copy remaining elements of leftArray
    while (i < leftArray.length) {
        array[k++] = leftArray[i++];
        createBars();
    }

    // Copy remaining elements of rightArray
    while (j < rightArray.length) {
        array[k++] = rightArray[j++];
        createBars();
    }

    // Reset background color after comparison
    for (let x = start; x <= end; x++) {
        bars[x].style.backgroundColor = '';
    }
}

document.getElementById('mergeSortBtn').addEventListener('click', async function () {
    await mergeSortVisual();
});
