const fromCurrency = document.getElementById('from-currency')
const toCurrency = document.getElementById('to-currency')
function convertCurrency() {
    const amount = document.getElementById('amount')
    const exchangeCurrency = document.getElementById('currency-exchange')
    let amountValue = amount.value
    console.log(amountValue);
    if (amountValue === '' || amountValue === '0') {
        amount.value = '1';
        amountValue = 1
    }


    exchangeCurrency.value = `getting exchange rate`;
    const api = `https://v6.exchangerate-api.com/v6/${API_KEY}/latest/${fromCurrency.value}`
    fetch(api)
        .then(response => response.json())
        .then((data) => {
            console.log(data)
            let exchangeRate = data.conversion_rates[toCurrency.value]
            console.log(exchangeRate);
            let totalExchangeRate = (amountValue * exchangeRate).toFixed(2);
            exchangeCurrency.value = `${amountValue} ${fromCurrency.value} = ${totalExchangeRate} ${toCurrency.value}`;

        })
}
for (let code in countries) {
    let option = document.createElement('option')
    let text = document.createTextNode(code)
    option.value = code;
    option.appendChild(text)
    fromCurrency.appendChild(option)
    if (code === 'INR') {
        option.selected = true
    }
}


for (let code in countries) {
    let option = document.createElement('option')
    let text = document.createTextNode(code)
    option.value = code;
    option.appendChild(text)
    toCurrency.appendChild(option)
    if (code === 'USD') {
        option.selected = true
    }
}
fromCurrency.addEventListener('change', () => {
    const selectedValue = countries[fromCurrency.value]
    console.log(typeof (selectedValue));
    const fromImage = document.getElementById('from-flag');
    fromImage.src = `https://flagsapi.com/${selectedValue}/flat/32.png`;
});

toCurrency.addEventListener('change', () => {
    const selectedValue = countries[toCurrency.value]
    console.log(typeof (selectedValue));
    const toImage = document.getElementById('to-flag');
    toImage.src = `https://flagsapi.com/${selectedValue}/flat/32.png`;
});