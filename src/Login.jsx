import React, { useState } from 'react';
import { auth, provider, signInWithPopup, signOut } from './firebase';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [user, setUser] = useState(null);
  const [error, setError] = useState('');

  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      setUser(result.user);  // Set the authenticated Google user
    } catch (error) {
      setError('Google Sign-in failed');
    }
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError('Please fill in both email and password');
      return;
    }
    // Mock authentication logic (replace with real backend calls)
    setUser({ displayName: email });
    setError('');
    alert('Logged in with Email & Password!');
  };

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        setUser(null);
        alert('Logged out successfully');
      })
      .catch(() => {
        setError('Logout failed');
      });
  };

  return (
    <div className="login-container">
      <h2>{user ? `Welcome, ${user.displayName}` : 'Login'}</h2>

      {!user ? (
        <>
          <form onSubmit={handleLogin}>
            <div className="input-group">
              <label>Email:</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
              />
            </div>
            <div className="input-group">
              <label>Password:</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                required
              />
            </div>
            {error && <p className="error">{error}</p>}
            <button type="submit" className="login-btn">Login</button>
          </form>

          <div className="divider">
            <span>or</span>
          </div>

          <button onClick={handleGoogleLogin} className="google-btn">
            <img src="/google-icon.svg" alt="Google icon" className="google-icon" />
            <span className="google-text">Login with Google</span>
          </button>
        </>
      ) : (
        <>
          <button onClick={handleLogout} className="logout-btn">
            Logout
          </button>
        </>
      )}
    </div>
  );
}

export default Login;
