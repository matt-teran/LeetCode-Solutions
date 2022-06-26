var rob = function(nums) {
	const memo = {};
	const dp = (i, prev) => {
		if (i < 0) return 0;
        if (!memo.hasOwnProperty(i)) {
            memo[i] = Math.max(dp(i-1), nums[i] + dp(i-2));
        }
        return memo[i];
		// if ( !(i in memo) ) memo[i] = {};
		// if ( !(prev in memo[i]) ) {
		// 	memo[i][prev] = dp(i - 1, false);
		// 	if (!prev) memo[i][prev] = Math.max(memo[i][prev], dp(i - 1, true) + nums[i]);
		// }
		// return memo[i][prev];
	}
		
	return dp(nums.length - 1);
}
