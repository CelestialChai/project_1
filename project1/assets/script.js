const maxCelsius = 100; // Max Celsius for thermometer (adjust as needed)

// Function to convert Fahrenheit to Celsius and update thermometer
function convertTemperature() {
    let fahrenheit = document.getElementById('fahrenheit').value;
    let celsius = ((parseFloat(fahrenheit) - 32) * 5 / 9).toFixed(2);
    document.getElementById('celsius').value = celsius;

    // Display result below
    document.getElementById('result').textContent = `${fahrenheit} °F = ${celsius} °C`;

    // Update the thermometer mercury level based on Celsius value
    updateThermometer(celsius);
}

// Function to update thermometer mercury based on Celsius value
function updateThermometer(tempCelsius) {
    const mercury = document.getElementById('mercuryLevel');
    const thermometerHeight = 300; // Maximum mercury height in pixels
    let mercuryHeight;

    if (tempCelsius >= 0) {
        // Scale the mercury height based on the Celsius temperature
        mercuryHeight = (tempCelsius / maxCelsius) * thermometerHeight;
    } else {
        mercuryHeight = 0;
    }

    mercury.style.height = `${mercuryHeight}px`;
}

// Initialize thermometer mercury
updateThermometer(0);
