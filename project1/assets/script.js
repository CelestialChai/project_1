const maxCelsius = 100; // Max Celsius for thermometer
const maxValue = 100; // Max value for thermometer for scaling purposes

// Combined Temperature Conversion dropdown menu from HH's Code to the Thermometer update (Amanda's code)
function convertTemperature() {

    //Indicates Unit of Input < Dropdown Selection
    let fromUnit = document.getElementById('fromDropdown').value;
    // Unit of Output < Dropdown Selection
    let toUnit = document.getElementById('toDropdown').value;
    // Turns Value into float, stores it for conversion calucation. The amount to be converted.
    let inputValue = parseFloat(document.getElementById('inputText').value);
    //Declares Result of Conversion
    let result;

    // isNan <-- Checks if input value is not a number / Requests a vlid number / Clears answer field and thermometer
    if (isNaN(inputValue)) {
        document.getElementById('result').textContent = "Please enter a valid number.";
        document.getElementById('answer').value = "";
        updateThermometer(0); // Reset thermometer if input is invalid
        return;
    }

    // Perform conversion based on selected units
    if (fromUnit === toUnit) {
        result = inputValue; // No conversion needed
    } else if (fromUnit === "fahrenheit") {
        if (toUnit === "celsius") {
            result = ((inputValue - 32) * 5 / 9).toFixed(2);
        } else if (toUnit === "kelvin") {
            result = ((inputValue - 32) * 5 / 9 + 273.15).toFixed(2);
        }
    } else if (fromUnit === "celsius") {
        if (toUnit === "fahrenheit") {
            result = (inputValue * 9 / 5 + 32).toFixed(2);
        } else if (toUnit === "kelvin") {
            result = (inputValue + 273.15).toFixed(2);
        }
    } else if (fromUnit === "kelvin") {
        if (toUnit === "celsius") {
            result = (inputValue - 273.15).toFixed(2);
        } else if (toUnit === "fahrenheit") {
            result = ((inputValue - 273.15) * 9 / 5 + 32).toFixed(2);
        }
    }

    // Display result
    document.getElementById('answer').value = result;
    // X = X statement / response to no input < Would still like to add quirky statements if we have time!
    document.getElementById('result').textContent = `${inputValue} ${fromUnit.charAt(0).toUpperCase() + fromUnit.slice(1)} = ${result} ${toUnit.charAt(0).toUpperCase() + toUnit.slice(1)}`;

    // Update the thermometer mercury based on the 'toUnit' result
    updateThermometer(result, toUnit);
}

// Edited Amanda's OG code to update thermometer mercury based on value and unit

function updateThermometer(value, unit) {
    const mercury = document.getElementById('mercuryLevel');
    const thermometerHeight = document.querySelector('#thermometerClipart').clientHeight; // Maximum mercury height in pixels
    let mercuryHeight;

    // Convert the result to Celsius if it's in a different unit for thermometer scaling < I don't know why but this seems to be the way to get this to work. I have tried to have it use the value in the answer field without converting it, but it breaks the thermometer.-HH

    let celsiusValue;
    if (unit === "celsius") {
        celsiusValue = value;
    } else if (unit === "fahrenheit") {
        celsiusValue = ((value - 32) * 5 / 9);
    } else if (unit === "kelvin") {
        celsiusValue = (value - 273.15);
    }

    if (celsiusValue >= 0) {
        // Scale the mercury height based on the Celsius temperature
        mercuryHeight = (celsiusValue / maxCelsius) * 250; // Scale to percentage
        mercuryHeight = Math.min(100, mercuryHeight); // Cap at 100% to avoid overflow
    } else {
        mercuryHeight = 0;
    }

    mercury.style.height = `${mercuryHeight}%`;

    // Get the background color and apply it
    function getTemperatureMessage(tempFahrenheit) {
        if (tempFahrenheit > 200) {
            return "You're on fire!";
        } else if (tempFahrenheit > 100) {
            return "Around these temperatures, it's best to stay inside.";
        } else if (tempFahrenheit > 80) {
            return "It's getting quite warm, stay hydrated.";
        } else if (tempFahrenheit > 60) {
            return "Nice and pleasant weather.";
        } else if (tempFahrenheit > 40) {
            return "A bit chilly, you might want a jacket.";
        } else if (tempFahrenheit > 20) {
            return "It's cold, stay bundled up!";
        } else if (tempFahrenheit > 0) {
            return "It's really cold!";
        } else if (tempFahrenheit < 0) {
            return "You're gonna turn into a snowman!";
        } else {
            return "Convert your temperature above!";
        }
    }
    const message = getTemperatureMessage(tempFahrenheit);
    document.getElementById('changeText').textContent = message;
}

// Initialize thermometer mercury
updateThermometer(0, "celsius");




//Original JS for Converter

// const maxCelsius = 100; // Max Celsius for thermometer (adjust as needed)

// // Function to convert Fahrenheit to Celsius and update thermometer
// function convertTemperature() {

//     let fahrenheit = document.getElementById('inputText').value;
//     let celsius = ((parseFloat(fahrenheit) - 32) * 5 / 9).toFixed(2);
//     document.getElementById('answer').value = celsius;

//     // Display result below
//     document.getElementById('answer').textContent = `${fahrenheit} °F = ${celsius} °C`;

//     // Update the thermometer mercury level based on Celsius value
//     updateThermometer(celsius, fahrenheit);
// }


// Amanda's original JS for thermometer

// Function to update thermometer mercury based on Celsius value
// function updateThermometer(tempCelsius, tempFahrenheit) {
//     const mercury = document.getElementById('mercuryLevel');
//     const thermometerHeight = document.querySelector('#thermometerClipart').clientHeight; // Maximum mercury height in pixels
//     let mercuryHeight;

//     if (tempFahrenheit >= 0) {
//         // Scale the mercury height based on the Celsius temperature
//         // mercuryHeight = (tempCelsius / maxCelsius) * thermometerHeight;
//         mercuryHeight = tempFahrenheit - 5;

//     } else {
//         mercuryHeight = 0;
//     }


//     mercury.style.height = `${mercuryHeight}%`;

// }

// // Initialize thermometer mercury
// updateThermometer(0);
