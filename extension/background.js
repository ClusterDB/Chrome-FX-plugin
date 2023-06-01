chrome.action.onClicked.addListener(function (tab) {
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      function: increaseValue,
    });
  });
  
  function increaseValue() {
    const inputElement = document.querySelector('input[name="exchangeRate"]');
    if (inputElement && inputElement.value) {
      const currentValue = parseFloat(inputElement.value);
      const increasedValue = currentValue + (currentValue * 0.05); // Increase by 5%
      inputElement.value = increasedValue.toFixed(2);
    }
  }
  