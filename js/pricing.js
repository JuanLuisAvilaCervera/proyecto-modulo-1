function changeCoin(coin){
    const basicPrice = 0; //EUR
    const professionalPrice = 25; //EUR
    const premiumPrice = 60; //EUR

    const basic = document.getElementById("basic").getElementsByClassName("pricing-dollars")[0];
    const professional = document.getElementById("professional").getElementsByClassName("pricing-dollars")[0];
    const premium = document.getElementById("premium").getElementsByClassName("pricing-dollars")[0];

    const coinChange = fetchCoinChange(coin);
    alert(coinChange);

    basic.innerHTML = basicPrice * coinChange;
    professional.innerHTML = professionalPrice * coinChange;
    premium.innerHTML = premiumPrice * coinChange;
}

function fetchCoinChange(coin){
    fetch("https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/eur.json")
    .then((response) => response.json())
    .then((json) => {
        const coinJson = json;
        return(coinJson['eur'][coin])
    })
}