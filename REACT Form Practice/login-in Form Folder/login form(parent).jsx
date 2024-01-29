import { useState } from 'react'
import HandleSubmit from './handle Submit';


function LoginForm() {
    const [userEmail, setUserEmail] = useState('');
    const [userPassword, setUserPassword] = useState('');

    return (
        <HandleSubmit 
            userEmail={userEmail}
            setUserEmail={setUserEmail}
            userPassword={userPassword}
            setUserPassword={setUserPassword}
        />
    );
}

    // try removing the onChange prop and typing in a field
    export default LoginForm

        // <div className="LoginForm componentBox">
    // <div className="formRow">
    // <label>Email Address:
    // {/* Controlled form element needs both value and onChange.
    // onChange handler uses event param e to access target value.
    // Whenever user types, new value is stored in state. */}
    // <input type="email" value={userEmail} name="userEmail"
    // onChange={(e) => setUserEmail(e.target.value)} />
    // </label>
    // </div>
    // <div className="formRow">
    // <label>Password:
    // <input type="password" value={userPassword} name="password"
    // onChange={(e) => setUserPassword(e.target.value)} /> 
    // </label>
    // </div>
    // </div>