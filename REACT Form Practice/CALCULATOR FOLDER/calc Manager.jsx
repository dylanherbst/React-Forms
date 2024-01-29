import React, { useState } from 'react';
import UserInput from './calc user input';
import CalcOperatorButtons from './calc operation';
import CalculationResult from './calc result';

function CalcManager() {
    const [input1, setInput1] = useState(0);
    const [input2, setInput2] = useState(0);
    const [selectedOperation, setSelectedOperation] = useState('');
    const [result, setResult] = useState(null);

    const performCalculation = () => {
        switch (selectedOperation) {
            case 'addition':
                return input1 + input2;
            case 'subtract':
                return input1 - input2;
            case 'divide':
                return input2 !== 0 ? input1 / input2 : 'Division by zero';
            case 'multiply':
                return input1 * input2;
            default:
                return 'Select an operation';
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const calcResult = performCalculation();
        setResult(calcResult);   
     }


   return (
    <div>
      <form onSubmit={handleSubmit}>
        <UserInput setInput1={setInput1} setInput2={setInput2} />
        <CalcOperatorButtons setSelectedOperation={setSelectedOperation} />
        <button type="submit">Calculate</button>
        <CalculationResult result={result} />
        </form>


    </div>
   )
}

export default CalcManager

