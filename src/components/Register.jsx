import React from 'react';

const Registration = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        // Implement registration logic here
    };

    return (
        <div style={{ backgroundColor: '#f0f0f0', padding: '20px', borderRadius: '5px', maxWidth: '400px', margin: '50px auto', boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)' }}>
            <h2 style={{ textAlign: 'center', color: '#333' }}>User Registration</h2>
            <form onSubmit={handleSubmit}>
                <div style={{ marginBottom: '20px' }}>
                    <label htmlFor="email" style={{ display: 'block', fontWeight: 'bold', marginBottom: '5px' }}>Email Address</label>
                    <input type="email" id="email" name="email" style={{ width: '100%', padding: '10px', fontSize: '16px', border: '1px solid #ccc', borderRadius: '5px' }} />
                </div>
                <div style={{ marginBottom: '20px' }}>
                    <label htmlFor="password" style={{ display: 'block', fontWeight: 'bold', marginBottom: '5px' }}>Password</label>
                    <input type="password" id="password" name="password" style={{ width: '100%', padding: '10px', fontSize: '16px', border: '1px solid #ccc', borderRadius: '5px' }} />
                </div>
                <button type="submit" style={{ display: 'block', width: '100%', padding: '10px', fontSize: '16px', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>Sign Up</button>
            </form>
            <div style={{ marginTop: '20px', textAlign: 'center' }}>
                <span style={{ color: '#333' }}>Already have an account?</span>
                <a href="/login" style={{ color: '#007bff', textDecoration: 'none', marginLeft: '5px' }}>Log In</a>
            </div>
        </div>
    );
};

export default Registration;
