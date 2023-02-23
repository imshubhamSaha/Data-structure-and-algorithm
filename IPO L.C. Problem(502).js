/**
 * @param {number} k
 * @param {number} w
 * @param {number[]} profits
 * @param {number[]} capital
 * @return {number}
 */
var findMaximizedCapital = function(k, w, profits, capital) {
    const capital_queue = new MinPriorityQueue() ;
    const profits_queue = new MaxPriorityQueue();

    for(let i =0;i<capital.length;i++){
        capital_queue.enqueue([capital[i],profits[i]],capital[i]);
    };
    
    for(let i =0;i<k;i++){
        while(!capital_queue.isEmpty() && capital_queue.front().element[0]<=w){
            let element = capital_queue.dequeue().element;
            profits_queue.enqueue(element,element[1]);
        };
        
        if(profits_queue.isEmpty()) return w;
        w+=profits_queue.dequeue().element[1];
    };
    return w;
};

