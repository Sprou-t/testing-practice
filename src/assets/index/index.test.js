import calculator, { wordConverter, arrayAnalyser } from './index';

test('wordConverter', () => {
	const wordCvt = wordConverter();
	// capitalise
	expect(wordCvt.capitalise('alan')).toMatch('Alan');

	// reverseString
	expect(wordCvt.reverseString('Friend')).toMatch('dneirF');
	expect(wordCvt.reverseString('Oop')).toMatch('poO');
});

test('calculator', () => {
	const calc = calculator(); // Create an instance of the calculator

	// add
	expect(calc.add(2, 3)).toBe(5);

	// subtract
	expect(calc.subtract(6, 2)).toBe(4);

	// multiply
	expect(calc.multiply(7, 2)).toBe(14);
});

// test an array which returns the average, min, max of its values + length of array
test('analyseArray', () => {
	const arrObj = [1, 8, 3, 4, 2, 6];
	const arrayResult = arrayAnalyser();

	// average
	expect(arrayResult.getAverage(arrObj)).toBe(4);

	// min
	expect(arrayResult.getMin(arrObj)).toBe(1);

	// max
	expect(arrayResult.getMax(arrObj)).toBe(8);

	// length
	expect(arrayResult.getArrayLength(arrObj)).toBe(6);
});
