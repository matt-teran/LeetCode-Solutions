/**
 * @param {number} length
 */
var SnapshotArray = function(length) {
    this.id = 0;
    this.store = [];
    for (let i = 0; i < length; i++) this.store.push([]);
};

/** 
 * @param {number} index 
 * @param {number} val
 * @return {void}
 */
SnapshotArray.prototype.set = function(index, val) {
    this.store[index].push([val, this.id]);
};

/**
 * @return {number}
 */
SnapshotArray.prototype.snap = function() {
    return this.id++;
};

/** 
 * @param {number} index 
 * @param {number} snap_id
 * @return {number}
 */
SnapshotArray.prototype.get = function(index, snap_id) {
    let l = 0;
    let r = this.store[index].length - 1;
    let id = -1;
    while (l<=r) {
        let m = Math.floor((r - l) / 2) + l;
        if (this.store[index][m][1] <= snap_id) {
            id = m;
            l = m + 1;
        } else {
            r = m - 1;
        } 
    }
    
    return id === -1 ? 0 : this.store[index][id][0];
};

/** 
 * Your SnapshotArray object will be instantiated and called as such:
 * var obj = new SnapshotArray(length)
 * obj.set(index,val)
 * var param_2 = obj.snap()
 * var param_3 = obj.get(index,snap_id)
 */