import React from 'react';

const Login = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        // Implement login logic here
    };

    return (
        <div style={{ backgroundColor: '#f0f0f0', padding: '20px', borderRadius: '5px', maxWidth: '400px', margin: '50px auto', boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)' }}>
            <h2 style={{ textAlign: 'center', color: '#333' }}>Log In</h2>
            <form onSubmit={handleSubmit}>
                <div style={{ marginBottom: '20px' }}>
                    <label htmlFor="email" style={{ display: 'block', fontWeight: 'bold', marginBottom: '5px' }}>Email Address</label>
                    <input type="email" id="email" name="email" style={{ width: '100%', padding: '10px', fontSize: '16px', border: '1px solid #ccc', borderRadius: '5px' }} />
                </div>
                <div style={{ marginBottom: '20px' }}>
                    <label htmlFor="password" style={{ display: 'block', fontWeight: 'bold', marginBottom: '5px' }}>Password</label>
                    <input type="password" id="password" name="password" style={{ width: '100%', padding: '10px', fontSize: '16px', border: '1px solid #ccc', borderRadius: '5px' }} />
                </div>
                <button type="submit" style={{ display: 'block', width: '100%', padding: '10px', fontSize: '16px', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>Log In</button>
            </form>
            <div style={{ marginTop: '20px', textAlign: 'center' }}>
                <a href="/forgot-password" style={{ color: '#007bff', textDecoration: 'none' }}>Forgot Password</a>
                <span style={{ margin: '0 5px', color: '#333' }}>|</span>
                <span style={{ color: '#333' }}>New User? </span>
                <a href="/signup" style={{ color: '#007bff', textDecoration: 'none' }}>Sign Up</a>
            </div>
        </div>
    );
};

export default Login;
