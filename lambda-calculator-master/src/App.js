import React, {useState} from 'react';
import './App.css';

import Numbers from './components/ButtonComponents/NumberButtons/Numbers';
import Operators from './components/ButtonComponents/OperatorButtons/Operators';
import Specials from './components/ButtonComponents/SpecialButtons/Specials';


import Logo from './components/DisplayComponents/Logo';
import Display from './components/DisplayComponents/Display';

function App() {

	const [displayValue, setDisplayValue] = useState('');
	const addNumber = (number) => {
		setDisplayValue(displayValue => displayValue + number)
	};
	const addOperator = (operator) => {
		if (operator === '=') {
			setDisplayValue(displayValue => eval(displayValue))
		} else {
			setDisplayValue(displayValue => displayValue + ' ' + operator + ' ')
		}
	};
	
	return (
		<div className='container'>
			<Logo />
			<div className='App'>
				<Display number={displayValue}/>
				<Numbers addNumber={addNumber}/>
				<Operators addOperator={addOperator}/>
				<Specials />
			</div>

		</div>
	);
}

export default App;
