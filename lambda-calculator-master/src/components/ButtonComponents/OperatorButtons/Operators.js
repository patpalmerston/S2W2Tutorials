import React, { useState } from 'react';

//import any components needed
import OperatorButton from './OperatorButton';
//Import your array data to from the provided data file

import { operators } from '../../../data';

const Operators = () => {
  // STEP 2 - add the imported data to state
  const [operator, setOperator] = useState(operators);
  console.log({ operator });
  return (
    <div>
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}
      {operator.map((operator, i) => (
        <OperatorButton char={operator.char} value={operator.value} key={i} />
      ))}
    </div>
  );
};

export default Operators;
