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

    // Get the background color and apply it
    function getTemperatureMessage(tempFahrenheit) {
        if (tempFahrenheit > 100) {
            return "Around these temperatures, it's best to stay inside.";
        } else if (tempFahrenheit > 80) {
            return "It's getting quite warm, stay hydrated.";
        } else if (tempFahrenheit > 60) {
            return "Nice and pleasant weather.";
        } else if (tempFahrenheit > 40) {
            return "A bit chilly, you might want a jacket.";
        } else if (tempFahrenheit > 20) {
            return "It's cold, stay bundled up!";
        } else {
            return "Convert your temperature above!";
        }
    }
    const message = getTemperatureMessage(tempFahrenheit);
    document.getElementById('changeText').textContent = message;
}

// Initialize thermometer mercury
updateThermometer(0);



