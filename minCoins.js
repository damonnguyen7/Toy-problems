//input = total value of coins
//output = least amount of coins object
function minCoins(totalValue) {
  const coins = [25, 10, 5, 1];
  const coinIndex = coins.reduce((index, coin) => {
    var coinCounter = 0;
    while (totalValue - coin >= 0) {
      totalValue = totalValue - coin;
      coinCounter++;
    }
    index[coin] = coinCounter;
    return index;
  }, {});
  return coinIndex;
};

minCoins(18); //=> return {'25': 0, '10': 1, '5': 1, '1': 3}


function minCoins(totalValue, arrayOfCoins) {
  var coins = arrayOfCoins;
  var results = {};
  for (var i = 0; i < coins.length; i++) {
    results[coins[i]] = 0;
    
  }
  coins.forEach(function(coin) {
    while (totalValue - coin >= 0) {
      totalValue = totalValue - coin;
      ++results[coin];
    } 
  });
  return results;
}

minCoins(18, [25, 10, 5, 1]); //=> return {'25': 0, '10': 1, '5': 1, '1': 3}
