function convertTemperature() {
    const from = document.getElementById("temperatureFrom").value;
    const to = document.getElementById("temperatureTo").value;
    const value = parseFloat(document.getElementById("temperatureValue").value);
    let result = "";

    let convertedValue;

    switch (from) {
        case "celsius":
            convertedValue = value;
            break;
        case "fahrenheit":
            convertedValue = (value - 32) * 5/9;
            break;
        case "kelvin":
            convertedValue = value - 273.15;
            break;
        default:
            convertedValue = NaN;
            break;
    }

    if (!isNaN(convertedValue)) {
        switch (to) {
            case "celsius":
                result = `${convertedValue} Celsius`;
                break;
            case "fahrenheit":
                result = `${(convertedValue * 9/5) + 32} Fahrenheit`;
                break;
            case "kelvin":
                result = `${convertedValue + 273.15} Kelvin`;
                break;
            case "all":
                result += `<b>Conversion for ${value} ${from}:</b><br>`;
                result += `Celsius: ${convertedValue} Celsius<br>`;
                result += `Fahrenheit: ${(convertedValue * 9/5) + 32} Fahrenheit<br>`;
                result += `Kelvin: ${convertedValue + 273.15} Kelvin<br>`;
                break;
            default:
                result = "Invalid conversion.";
                break;
        }
    } else {
        result = "Invalid input.";
    }

    document.getElementById("result").innerHTML = result;
}
