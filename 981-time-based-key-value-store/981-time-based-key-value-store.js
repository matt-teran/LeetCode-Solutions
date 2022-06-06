
var TimeMap = function() {
    this.store = {};
};

/** 
 * @param {string} key 
 * @param {string} value 
 * @param {number} timestamp
 * @return {void}
 */
TimeMap.prototype.set = function(key, value, timestamp) {
    this.store[key] ? this.store[key].push({value, timestamp}) : this.store[key] = [{value, timestamp}];
};

/** 
 * @param {string} key 
 * @param {number} timestamp
 * @return {string}
 */
TimeMap.prototype.get = function(key, timestamp) {
    let arr = this.store[key];
    if (arr === undefined || arr.length === 0) return '';
    let l = 0;
    let r = arr.length - 1;
    let result = '';
    
    while (l <= r) {
        let m = Math.floor((l + r) / 2);
        
        if (arr[m].timestamp <= timestamp) {
            result = arr[m].value;
            l = m + 1;
        } else {
            r = m - 1;
        }
    }
    return result;
};
// 1, 4
/** 
 * Your TimeMap object will be instantiated and called as such:
 * var obj = new TimeMap()
 * obj.set(key,value,timestamp)
 * var param_2 = obj.get(key,timestamp)
 */