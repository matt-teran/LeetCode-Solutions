
var Twitter = function() {
    this.feed = [];
    this.followers = {
        
    }
};

/** 
 * @param {number} userId 
 * @param {number} tweetId
 * @return {void}
 */
Twitter.prototype.postTweet = function(userId, tweetId) {
    this.feed.unshift([userId, tweetId]);
};

/** 
 * @param {number} userId
 * @return {number[]}
 */
Twitter.prototype.getNewsFeed = function(userId) {
    let personalFeed = [];
    let i = 0;
    while (personalFeed.length < 10 && i < this.feed.length) {
        if (this.followers[userId] && this.followers[userId].has(this.feed[i][0])) {
            personalFeed.push(this.feed[i][1]);
        } else if (this.feed[i][0] === userId) personalFeed.push(this.feed[i][1]);
        i++;
    }
    return personalFeed;
};

/** 
 * @param {number} followerId 
 * @param {number} followeeId
 * @return {void}
 */
Twitter.prototype.follow = function(followerId, followeeId) {
    this.followers[followerId] ? this.followers[followerId].add(followeeId) : this.followers[followerId] = new Set([followeeId])
};

/** 
 * @param {number} followerId 
 * @param {number} followeeId
 * @return {void}
 */
Twitter.prototype.unfollow = function(followerId, followeeId) {
    if (this.followers[followerId] === undefined ||
        this.followers[followerId].size === 0 ||
        !this.followers[followerId].has(followeeId)) {
        return;
    };
    
    this.followers[followerId].delete(followeeId);
};

/** 
 * Your Twitter object will be instantiated and called as such:
 * var obj = new Twitter()
 * obj.postTweet(userId,tweetId)
 * var param_2 = obj.getNewsFeed(userId)
 * obj.follow(followerId,followeeId)
 * obj.unfollow(followerId,followeeId)
 */