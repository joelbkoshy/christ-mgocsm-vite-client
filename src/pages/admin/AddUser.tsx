import { useState } from 'react';
import AdminSidebar from '../../components/Admin/Sidebar/AdminSidebar';
import '../../styles/Login.css';
import '../../styles/admin/AddUser.css';
import axios from 'axios';

const AddUser = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('admin');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false); // ✅ loading state

  const handleAddUser = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setMessage('');
    setLoading(true); // ✅ Begin loading

    try {
      const token = localStorage.getItem('token');

      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/api/user/addUser`,
        { username, password, role },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setMessage(response.data.message);
      setUsername('');
      setPassword('');
      setRole('admin');
    } catch (err: any) {
      setError(err.response?.data?.error || 'Failed to add user. Try again.');
    } finally {
      setLoading(false); // ✅ End loading
    }
  };

  return (
    <div>
      <AdminSidebar />

      <div className='admin-content'>
        <div className="login-container">
          <form className="login-card" onSubmit={handleAddUser}>
            <h2>Add New User</h2>

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

            <div className="field">
              <select
                id="role"
                value={role}
                onChange={(e) => setRole(e.target.value)}
                required
              >
                <option value="admin">Admin</option>
                <option value="editor">Editor</option>
                <option value="viewer">Viewer</option>
              </select>
              <label htmlFor="role">Role</label>
            </div>

            {error && <p className="login-error">{error}</p>}
            {message && <p className="login-success">{message}</p>}

            <button type="submit" disabled={loading}>
              {loading ? 'Adding...' : 'Add User'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddUser;
