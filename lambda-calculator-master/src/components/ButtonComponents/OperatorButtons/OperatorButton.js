import React from 'react';

const OperatorButton = ({ char, value, addOperator }) => {
	return (
		<>
			
			<button onClick={() => addOperator(value)}>
				{char}
			</button>
		</>
	);
};

export default OperatorButton;
