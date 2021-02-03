module.exports = function countCats(matrix) {
	let counter = 0;
  	for (let i = 0; i < matrix.length; i++) {
  		for (let q = 0; q < matrix[i].length; q++) {
  			if (matrix[i][q] == '^^') {
  				counter += 1;
  			}
  		};
  	};
  	return counter;
};
