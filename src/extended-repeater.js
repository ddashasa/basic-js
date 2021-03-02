const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  	let result = '';
  	str = String(str);
	options.addition = String(options.addition);
  	options.repeatTimes = parseInt(options.repeatTimes);
  	options.additionRepeatTimes = parseInt(options.additionRepeatTimes);
 	if (options.separator == undefined) {
  		options.separator = '+';
  	};
  	if (options.addition == 'undefined') {
  		options.addition = '';
  	}
  	if (options.additionSeparator == undefined) {
 		options.additionSeparator = '|';
  	};
  	if (isNaN(options.repeatTimes)) {
  		options.repeatTimes = 1;
  	};
  	if (isNaN(options.additionRepeatTimes)) {
  		options.additionRepeatTimes = 1;
  	};
  	for (let i = 0; i < options.repeatTimes; i++) {
  		result += str;
  		for (let j = 0; j < options.additionRepeatTimes; j++) {
  			result += options.addition;
  			if (j != options.additionRepeatTimes - 1) {
  				result += options.additionSeparator;
  			};
  		};
  		if (i != options.repeatTimes - 1){
  			result += options.separator;
  		};
  	};

  	return result;
};
  
