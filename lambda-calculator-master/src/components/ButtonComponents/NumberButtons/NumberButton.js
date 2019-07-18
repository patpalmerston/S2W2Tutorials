import React from 'react';

const NumberButton = ({ number, addNumber }) => {
	return (
		<>
			<button onClick={() => addNumber(number)}>
				{number}
			</button>
		</>
	);
};

export default NumberButton;
