import { useState } from 'react';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import '../styles/Login.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false); // 🆕 loading state

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true); // ✅ Start loading

    try {
      const response = await axios.post(`${import.meta.env.VITE_API_URL}/api/user/login`, {
        username,
        password,
      });

      const { token, user } = response.data;

      localStorage.setItem('token', token);
      localStorage.setItem('user', JSON.stringify(user));

      navigate('/admin/addUser');
    } catch (err: any) {
      setError(err.response?.data?.error || 'Login failed. Please try again.');
    } finally {
      setLoading(false); // ✅ Stop loading
    }
  };

  return (
    <div>
      <Navbar />
      <div className="login-container">
        <form className="login-card" onSubmit={handleLogin}>
          <h2>Admin Login</h2>

          <div className="field">
            <input
              type="text"
              placeholder="Enter username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              id="username"
            />
            <label htmlFor="username">Username</label>
          </div>

          <div className="field">
            <input
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              id="password"
            />
            <label htmlFor="password">Password</label>
          </div>

          {error && <p className="login-error">{error}</p>}

          <button type="submit" disabled={loading}>
            {loading ? 'Logging in...' : 'Login'}
          </button>
          <p className="login-info">By logging in, you agree to the Terms and Privacy Policy.</p>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default Login;
