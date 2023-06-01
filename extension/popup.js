let tabId;

// Send a message to the content script to increase the exchange rate value
function increaseExchangeRateValue() {
  chrome.scripting.executeScript({
    target: { tabId: tabId },
    function: increaseValue,
  });
}

// Function to increase the value by 5%
function increaseValue() {
    const inputElement = document.getElementsByName('exchangeRate')[0];
    if (inputElement && inputElement.value) {
      const currentValue = parseFloat(inputElement.value);
      const increasedValue = currentValue + (currentValue * 0.05); // Increase by 5%
      inputElement.value = increasedValue.toString();
    }
  }

// Get the active tab ID
chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
  tabId = tabs[0].id;

  // Add a click event listener to the button
  document.getElementById('increaseButton').addEventListener('click', increaseExchangeRateValue);
});
