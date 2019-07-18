import React, { useState } from 'react';

//import any components needed
import NumbersButton from './NumberButton';

//Import your array data to from the provided data file

import { numbers } from '../../../data';

const Numbers = ({addNumber}) => {
	// STEP 2 - add the imported data to state
	const [numbersState, setNumbersState] = useState(numbers);
	console.log('numbers', { numbersState });
	return (
		<div>
			{/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}
			{numbersState.map((number, index) => (
				<NumbersButton 
					number={number} 
					key={index} 
					addNumber={addNumber}
				/>
			))}
		</div>
	);
};

export default Numbers;
