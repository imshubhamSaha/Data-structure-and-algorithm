/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
   let minPrice = Number.MAX_VALUE;
   let maxProfit = 0;
   for(let i=0; i<prices.length; i++){
       minPrice = Math.min(prices[i], minPrice);
       maxProfit = Math.max(maxProfit, prices[i]-minPrice)
   }
   return maxProfit;
};

//T.C -> O(N);
//S.C -> O(1);
