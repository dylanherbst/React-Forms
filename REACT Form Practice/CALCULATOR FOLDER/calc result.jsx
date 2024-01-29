import React from 'react';

function CalculationResult({ result }) {
    return (
        <div>
            {result !== null && <div>Result: {result}</div>}
        </div>
    );
}

export default CalculationResult;