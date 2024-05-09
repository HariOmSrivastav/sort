async function selectionSortVisual() {
    const bars = document.querySelectorAll('.bar');
    const len = array.length;

    for (let i = 0; i < len - 1; i++) {
        let minIndex = i;

        // Highlight the current minimum bar
        bars[i].style.backgroundColor = 'aqua';

        for (let j = i + 1; j < len; j++) {
            // Highlight the comparison bar
            bars[j].style.backgroundColor = 'green';

            // Delay to visualize the comparison
            await new Promise(resolve => setTimeout(resolve, 0.5));

            // If current element is smaller than the minimum, update minIndex
            if (array[j] < array[minIndex]) {
                // Reset previous minimum bar color
                bars[minIndex].style.backgroundColor = '';

                minIndex = j;

                // Highlight new minimum bar
                bars[minIndex].style.backgroundColor = 'aqua';
            } else {
                // Reset comparison bar color
                bars[j].style.backgroundColor = '';
            }
        }

        // Swap the minimum element with the current element
        if (minIndex !== i) {
            swap(array, i, minIndex);
            swapBars(i, minIndex);

            // Update bars after swapping
            createBars();
        }

        // Reset current minimum bar color
        bars[i].style.backgroundColor = '';
    }
}

document.getElementById('selectionSortBtn').addEventListener('click', async function () {
    await selectionSortVisual();
});
