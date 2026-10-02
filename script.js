// 1. What is X% of Y?
function calculatePercentage() {
    const percentageInput = document.getElementById("percentage");
    const numberInput = document.getElementById("number");
    const result = document.getElementById("result");

    const percentage = Number(percentageInput.value);
    const number = Number(numberInput.value);

    if (
        percentageInput.value.trim() === "" ||
        numberInput.value.trim() === ""
    ) {
        result.innerText = "Please enter both values.";
        return;
    }

    if (!Number.isFinite(percentage) || !Number.isFinite(number)) {
        result.innerText = "Please enter valid numbers.";
        return;
    }

    if (percentage < 0 || number < 0) {
        result.innerText = "Values cannot be negative.";
        return;
    }

    const answer = (percentage / 100) * number;

    result.innerText = `${percentage}% of ${number} = ${answer}`;
}


// 2. X is what % of Y?
function calculateWhatPercentage() {
    const partInput = document.getElementById("part");
    const wholeInput = document.getElementById("whole");
    const result = document.getElementById("percentageResult");

    const part = Number(partInput.value);
    const whole = Number(wholeInput.value);

    if (
        partInput.value.trim() === "" ||
        wholeInput.value.trim() === ""
    ) {
        result.innerText = "Please enter both values.";
        return;
    }

    if (!Number.isFinite(part) || !Number.isFinite(whole)) {
        result.innerText = "Please enter valid numbers.";
        return;
    }

    if (part < 0 || whole < 0) {
        result.innerText = "Values cannot be negative.";
        return;
    }

    if (whole === 0) {
        result.innerText = "Whole cannot be zero.";
        return;
    }

    const answer = (part / whole) * 100;

    result.innerText = `${part} is ${answer}% of ${whole}`;
}


// 3. Percentage Increase / Decrease
function calculateChange() {
    const oldInput = document.getElementById("oldValue");
    const newInput = document.getElementById("newValue");
    const result = document.getElementById("changeResult");

    const oldValue = Number(oldInput.value);
    const newValue = Number(newInput.value);

    if (
        oldInput.value.trim() === "" ||
        newInput.value.trim() === ""
    ) {
        result.innerText = "Please enter both values.";
        return;
    }

    if (!Number.isFinite(oldValue) || !Number.isFinite(newValue)) {
        result.innerText = "Please enter valid numbers.";
        return;
    }

    if (oldValue < 0 || newValue < 0) {
        result.innerText = "Values cannot be negative.";
        return;
    }

    if (oldValue === 0) {
        result.innerText = "Old value cannot be zero.";
        return;
    }

    const difference = newValue - oldValue;
    const percentageChange = Math.abs((difference / oldValue) * 100);

    if (difference > 0) {
        result.innerText =
            `Increase: ${percentageChange}%`;
    } else if (difference < 0) {
        result.innerText =
            `Decrease: ${percentageChange}%`;
    } else {
        result.innerText =
            "No change: 0%";
    }
}


// Clear everything
function clearCalculator() {
    document.getElementById("percentage").value = "";
    document.getElementById("number").value = "";

    document.getElementById("part").value = "";
    document.getElementById("whole").value = "";

    document.getElementById("oldValue").value = "";
    document.getElementById("newValue").value = "";

    document.getElementById("result").innerText = "";
    document.getElementById("percentageResult").innerText = "";
    document.getElementById("changeResult").innerText = "";
}