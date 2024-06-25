import './index.css';
import './reset.css';

function wordConverter(word) {
	function capitalise(word) {
		const firstLetter = word.charAt(0);
		const remainingWord = word.substring(1);
		const capitaliseWord = firstLetter.toUpperCase() + remainingWord;
		return capitaliseWord;
	}

	function reverseString(word) {
		const strRev = word.split('').reverse().join('');
		return strRev;
	}

	return { capitalise, reverseString };
}
function calculator(a, b) {
	function add(a, b) {
		return a + b;
	}

	function subtract(a, b) {
		return a - b;
	}

	function multiply(a, b) {
		return a * b;
	}

	return { add, subtract, multiply };
}

function arrayAnalyser(arrObj) {
	function getAverage(arrObj) {
		const total = arrObj.reduce((sum, currentItem) => sum + currentItem, 0);
		const itemNum = arrObj.length;
		const avg = total / itemNum;
		return avg;
	}

	function getMin(arrObj) {
		return Math.min(...arrObj);
	}

	function getMax(arrObj) {
		return Math.max(...arrObj);
	}

	function getArrayLength(arrObj) {
		return arrObj.length;
	}

	return { getAverage, getMin, getMax, getArrayLength };
}
export default calculator;
export { wordConverter, arrayAnalyser };
