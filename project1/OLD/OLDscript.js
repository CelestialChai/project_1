// Temperature Conversion + Calucation

function convertTemperature() {
    let fromUnit = document.getElementById('fromDropdown').value;
    let toUnit = document.getElementById('toDropdown').value;
    let inputValue = parseFloat(document.getElementById('inputText').value);
    let result;

    if (isNaN(inputValue)) {
        document.getElementById('result').textContent = "Please enter a valid number.";
        document.getElementById('answer').value = "";
        return;
    }
  
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
    document.getElementById('result').textContent = `${inputValue} ${fromUnit.charAt(0).toUpperCase() + fromUnit.slice(1)} = ${result} ${toUnit.charAt(0).toUpperCase() + toUnit.slice(1)}`;
}
