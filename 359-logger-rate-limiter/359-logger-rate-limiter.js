
var Logger = function() {
    this.log = {};
};

/** 
 * @param {number} timestamp 
 * @param {string} message
 * @return {boolean}
 */
Logger.prototype.shouldPrintMessage = function(timestamp, message) {
    if (message in this.log) {
        if (this.log[message] + 10 <= timestamp) {
            this.log[message] = timestamp;
            return true;
        } else {
            return false;
        }
    } else {
        this.log[message] = timestamp;
        return true;
    }
};

/** 
 * Your Logger object will be instantiated and called as such:
 * var obj = new Logger()
 * var param_1 = obj.shouldPrintMessage(timestamp,message)
 */