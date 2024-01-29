import React, { useState } from 'react';

function HandleSubmit({ userEmail, setUserEmail, userPassword, setUserPassword }) {
    const [submitResult, setSubmitResult] = useState('');
    const [attemptCount, setAttemptCount] = useState(0);
    const MAX_ATTEMPTS = 3;

    const handleLogic = (e) => {
        e.preventDefault(); // Prevent page reloading on form submit

        // Check if maximum attempts have been exceeded
        if (attemptCount >= MAX_ATTEMPTS) {
            setSubmitResult('Maximum attempts exceeded. Account locked.');
            return;
        }

        // Password validation logic
        if (userPassword.length < 5) {
            setSubmitResult('Password must be at least 5 characters long');
            incrementAttempt();
        } else if (userPassword === userEmail) {
            setSubmitResult('Password must not match email address');
            incrementAttempt();
        } else {
            setSubmitResult('Successful login.');
            setAttemptCount(0); // Reset attempt count on successful login
        }
    };

    const incrementAttempt = () => {
        setAttemptCount(prevCount => prevCount + 1);
    };

    return (
        <div className="LoginForm componentBox">
            <form onSubmit={handleLogic}>
                <label>Email:
                    <input 
                        type="email" 
                        value={userEmail} 
                        name="userEmail"
                        onChange={(e) => setUserEmail(e.target.value)} 
                    />
                </label>
                <label>Password:
                    <input 
                        type="password" 
                        value={userPassword} 
                        name="password"
                        onChange={(e) => setUserPassword(e.target.value)} 
                    />
                </label>
                <button type="submit" disabled={attemptCount >= MAX_ATTEMPTS}>Log In</button>
                <p>{submitResult}</p>
            </form>
            {attemptCount >= MAX_ATTEMPTS && <p>Too many failed attempts. Please try again later.</p>}
        </div>
    );
}

export default HandleSubmit;
