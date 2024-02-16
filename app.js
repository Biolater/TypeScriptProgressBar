var progressBar = document.getElementById('progressBar');
var numberInput = document.getElementById('numberInput');
var initialValue = 0;
var updateProgressBar = function (value) {
    progressBar.value = value;
};
numberInput === null || numberInput === void 0 ? void 0 : numberInput.addEventListener('input', function (e) {
    var _a;
    var value = ((_a = e.target) === null || _a === void 0 ? void 0 : _a.value) || '';
    if (Number(value) > 100) {
        updateProgressBar(100);
    }
    else {
        updateProgressBar(Number(value));
    }
});
