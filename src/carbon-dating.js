const MODERN_ACTIVITY= 15; //начальная активность
const HALF_LIFE_PERIOD= 5730; //период полураспада


module.exports = function dateSample(sampleActivity /*активность образца*/) {
	if (typeof(sampleActivity) != 'string' || !parseInt(sampleActivity) || parseInt(sampleActivity) > MODERN_ACTIVITY || parseInt(sampleActivity) <= 0) {
		return false;
	}; 
	return Math.ceil(Math.log(MODERN_ACTIVITY/parseInt(sampleActivity)) / (0.693 / HALF_LIFE_PERIOD))
};
