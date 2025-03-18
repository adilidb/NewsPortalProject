import React, { useState } from 'react';

const Subscription = () => {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handleSubscribe = (e) => {
        e.preventDefault();
        if (email) {
            setMessage('You have successfully subscribed!');
        } else {
            setMessage('Please enter a valid email.');
        }
    };

    return (
        <div>
            <h3>Subscribe to News Updates</h3>
            <form onSubmit={handleSubscribe}>
                <input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={handleEmailChange}
                    required
                />
                <button type="submit">Subscribe</button>
            </form>
            {message && <p>{message}</p>}
        </div>
    );
};

export default Subscription;
