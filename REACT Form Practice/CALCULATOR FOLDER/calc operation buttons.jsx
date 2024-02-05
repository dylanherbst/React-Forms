import React, { useState } from 'react';



function CalcOperatorButtons({ setSelectedOperation }) {


    return (
        <form>
            <div>
                <input 
                    type="radio" 
                    name="operation" 
                    value="addition"
                    // checked={SetSelectedOperation === 'addition'} 
                    onChange={() => setSelectedOperation('addition')}
                />
                <label>Add</label>
            </div>

            <div>
                <input 
                    type="radio" 
                    name="operation" 
                    value="subtract"
                    // checked={selectedOperation === 'subtract'} 
                    onChange={() => setSelectedOperation('subtract')}
                />
                <label>Subtract</label>
            </div>

            <div>
                <input 
                    type="radio" 
                    name="operation" 
                    value="divide"
                    // checked={selectedOperation === 'divide'} 
                    onChange={() => setSelectedOperation('divide')}
                />
                <label>Divide</label>
            </div>

            <div>
                <input 
                    type="radio" 
                    name="operation" 
                    value="multiply"
                    // checked={selectedOperation === 'multiply'} 
                    onChange={() => setSelectedOperation('multiply')}
                />
                <label>Multiply</label>
            </div>
        </form>
    );
}

export default CalcOperatorButtons;