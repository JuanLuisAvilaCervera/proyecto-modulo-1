function fetchCoinChange(value){

    const valueArray = value.split(" ");
    coin = valueArray[0];
    symbol = valueArray[1];
    direction = valueArray[2];

    fetch("https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/eur.json")
    .then((response) => response.json())
    .then((json) => {
        const coinChange = json;
        changeCoin(coinChange['eur'][coin], symbol, direction);
    })
}


function changeCoin(coinChange, symbol, direction){
    const basicPrice = 0; //EUR
    const professionalPrice = 25; //EUR
    const premiumPrice = 60; //EUR

    const basic = document.getElementsByClassName("pricing__basic__money")[0];
    const professional = document.getElementsByClassName("pricing__professional__money")[0];
    const premium = document.getElementsByClassName("pricing__premium__money")[0];

    

    if(direction === "right"){
        basic.innerHTML = Math.ceil(basicPrice * coinChange) + symbol;
        professional.innerHTML = Math.ceil(professionalPrice * coinChange) + symbol;
        premium.innerHTML = Math.ceil(premiumPrice * coinChange) + symbol;
        
    }else if(direction === "left"){
        basic.innerHTML = symbol + Math.ceil(basicPrice * coinChange) 
        professional.innerHTML = symbol + Math.ceil(professionalPrice * coinChange);
        premium.innerHTML = symbol + Math.ceil(premiumPrice * coinChange);
    }
    
}

