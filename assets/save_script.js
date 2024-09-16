// Clear all saved conversions from localStorage
function clearSavedConversions() {
    // Remove the 'conversions' key from localStorage
    localStorage.removeItem('conversions');

    // Update the dropdown to remove all options
    updateSavedConversionsDropdown();

    // Provide feedback to the user
    alert("All saved conversions have been cleared.");
}

// Save conversion to localStorage
function saveConversion() {
    const fromUnit = document.getElementById('fromDropdown').value;
    const toUnit = document.getElementById('toDropdown').value;
    const inputValue = parseFloat(document.getElementById('inputText').value);
    const resultValue = document.getElementById('answer').value;

    // Check if the input is valid before saving
    if (isNaN(inputValue) || resultValue === "") {
        alert("Please perform a valid conversion before saving.");
        return;
    }

    // Create an object for the conversion
    const conversion = {
        from: fromUnit,
        to: toUnit,
        input: inputValue,
        result: resultValue
    };

    // Get the existing conversions from localStorage or initialize an empty array
    let conversions = JSON.parse(localStorage.getItem('conversions')) || [];

    // Limit to 5 conversions by removing the oldest if there are more than 4
    if (conversions.length >= 5) {
        conversions.shift();
    }

    // Add the new conversion to the list
    conversions.push(conversion);

    // Save the updated list to localStorage
    localStorage.setItem('conversions', JSON.stringify(conversions));

    // Update the dropdown menu with the new conversion
    updateSavedConversionsDropdown();
}

// Load saved conversions and populate the dropdown menu
function updateSavedConversionsDropdown() {
    const conversions = JSON.parse(localStorage.getItem('conversions')) || [];
    const dropdown = document.getElementById('savedConversions');
    dropdown.innerHTML = `<option value="">Select a saved conversion</option>`; // Reset dropdown

    // Populate dropdown with saved conversions
    conversions.forEach((conversion, index) => {
        const option = document.createElement('option');
        option.value = index;
        option.textContent = `${conversion.input} ${conversion.from} to ${conversion.to} = ${conversion.result}`;
        dropdown.appendChild(option);
    });
}

// Load a saved conversion when selected from the dropdown
function loadConversion() {
    const selectedIndex = document.getElementById('savedConversions').value;

    if (selectedIndex === "") return; // No selection

    const conversions = JSON.parse(localStorage.getItem('conversions'));

    // Load the selected conversion into the input fields
    const selectedConversion = conversions[selectedIndex];
    document.getElementById('fromDropdown').value = selectedConversion.from;
    document.getElementById('toDropdown').value = selectedConversion.to;
    document.getElementById('inputText').value = selectedConversion.input;
    document.getElementById('answer').value = selectedConversion.result;
    document.getElementById('result').textContent = `${selectedConversion.input} ${selectedConversion.from.charAt(0).toUpperCase() + selectedConversion.from.slice(1)} = ${selectedConversion.result} ${selectedConversion.to.charAt(0).toUpperCase() + selectedConversion.to.slice(1)}`;

    // Update thermometer with the saved conversion result
    updateThermometer(selectedConversion.result, selectedConversion.to);
}

// Call this function on page load to populate the saved conversions dropdown
updateSavedConversionsDropdown();