function appendToDisplay(value) {
    document.getElementById('display').value += value;
    console.log(value);
}
function clearDisplay() {
    document.getElementById('display').value = "";
}
function calculate() {
    console.log("it works!");
    try {
        const result = eval(document.getElementById('display').value);
        document.getElementById('display').value = result;
    } catch {
        document.getElementById('display').value = "Error";
    }
}

function renderCalculator() {
    const buttonContainer = document.getElementById('button-container');
    const rows = [["1", "2", "3"],
    ["4", "5", "6"],
    ["7", "8", "9"],
    ["0", "C", "."],
    ["+", "-", "*", "/"],
    ["="],];

    // Create the main calculator container

    const calcContainer = document.createElement("div");
    calcContainer.classList.add("button-container");

    rows.forEach(row => {
        const rowDiv = document.createElement("div");
        rowDiv.classList.add("row");

        row.forEach(buttonText => {
            const button = document.createElement("button");
            button.textContent = buttonText;

            if (buttonText === "C") {
                button.setAttribute("onClick", "clearDisplay()");
            } else if (buttonText === "=") {
                button.setAttribute("onClick", "calculate()");
            } else {
                button.setAttribute("onClick", `appendToDisplay('${buttonText}')`);
            }
            rowDiv.appendChild(button)
        })
        calcContainer.appendChild(rowDiv);

    })
    buttonContainer.appendChild(calcContainer);
}



document.addEventListener('DOMContentLoaded', function (event) {
    renderCalculator();
});