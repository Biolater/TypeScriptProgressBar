var progressBar = document.getElementById('progressBar') as HTMLProgressElement | null;
var numberInput = document.getElementById('numberInput') as HTMLInputElement | null;
var initialValue = 0;

var updateProgressBar = (value: number) => {
    progressBar!.value = value;
}

numberInput?.addEventListener('input', (e) => {
    const value = (e.target as HTMLInputElement)?.value || '';
    if (Number(value) > 100) {
        updateProgressBar(100)
    } else {
        updateProgressBar(Number(value))
    }
});
