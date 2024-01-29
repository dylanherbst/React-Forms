import React, { useState } from 'react';

function UserInput ({ setInput1, setInput2 }) {


    return (


<div>
<div>
            <input 
                type="number" 
                onChange={(e) => setInput1(parseFloat(e.target.value))} 
            />
            <input 
                type="number" 
                onChange={(e) => setInput2(parseFloat(e.target.value))} 
            />
        </div>
</div>

    )
}

export default UserInput