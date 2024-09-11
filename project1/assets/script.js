const maxCelsius = 100; // Max Celsius for thermometer (adjust as needed)

// Function to convert Fahrenheit to Celsius and update thermometer
function convertTemperature() {
    let fahrenheit = document.getElementById('inputText').value;
    let celsius = ((parseFloat(fahrenheit) - 32) * 5 / 9).toFixed(2);
    document.getElementById('answer').value = celsius;

    // Display result below
    document.getElementById('answer').textContent = `${fahrenheit} °F = ${celsius} °C`;

    // Update the thermometer mercury level based on Celsius value
    updateThermometer(celsius, fahrenheit);
}

// Function to update thermometer mercury based on Celsius value
function updateThermometer(tempCelsius, tempFahrenheit) {
    const mercury = document.getElementById('mercuryLevel');
    const thermometerHeight = document.querySelector('#thermometerClipart').clientHeight; // Maximum mercury height in pixels
    let mercuryHeight;

    if (tempFahrenheit >= 0) {
        // Scale the mercury height based on the Celsius temperature
        // mercuryHeight = (tempCelsius / maxCelsius) * thermometerHeight;
        mercuryHeight = tempFahrenheit - 5;
    } else {
        mercuryHeight = 0;
    }

    mercury.style.height = `${mercuryHeight}%`;
}

// Initialize thermometer mercury
updateThermometer(0);
