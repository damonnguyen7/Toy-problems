//input = total value of coins
//output = least amount of coins object
function minCoins(totalValue) {
  var coins = [25, 10, 5, 1];
  var results = {'25': 0, '10': 0, '5': 0, '1': 0};
  var totalValue = totalValue;
  coins.forEach(function(coin) {
    while (totalValue - coin >= 0) {
      totalValue = totalValue - coin;
      ++results[coin];
    } 
  });
  return results;
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