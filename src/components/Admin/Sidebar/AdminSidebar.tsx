import { NavLink, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import '../../../styles/admin/AdminSidebar.css';
import {
    Users,
    MessageSquareText,
    UserCog,
    LogOut,
    Menu,
    Newspaper,
    Mail,
    GraduationCap,
    UserCircle,
    Megaphone,
    BookUser,
    Phone
} from 'lucide-react';

const AdminSidebar = () => {
    const navigate = useNavigate();
    const [isOpen, setIsOpen] = useState(false);
    const toggleSidebar = () => setIsOpen(!isOpen);

    const handleLogout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        navigate('/login');
    };

    return (
        <aside className={`admin-sidebar ${isOpen ? 'open' : 'collapsed'}`}>
            <button className="sidebar-toggle" onClick={toggleSidebar}>
                <Menu size={20} />
            </button>

            <div className="sidebar-header">
                {isOpen && <h1 className="sidebar-title">Admin</h1>}
            </div>

            <nav className="sidebar-nav">

                <NavLink to="/admin/addUser" className={({ isActive }) =>
                    `sidebar-link ${isActive ? 'active' : ''}`}>
                    <Users className="icon" />
                    {isOpen && <span>Add Users</span>}
                </NavLink>

                <NavLink to="/admin/testimonials" className={({ isActive }) =>
                    `sidebar-link ${isActive ? 'active' : ''}`}>
                    <MessageSquareText className="icon" />
                    {isOpen && <span>Testimonials</span>}
                </NavLink>

                <NavLink to="/admin/servants" className={({ isActive }) =>
                    `sidebar-link ${isActive ? 'active' : ''}`}>
                    <UserCircle className="icon" />
                    {isOpen && <span>Servants</span>}
                </NavLink>

                <NavLink to="/admin/latest-news" className={({ isActive }) =>
                    `sidebar-link ${isActive ? 'active' : ''}`}>
                    <Newspaper className="icon" />
                    {isOpen && <span>Latest News</span>}
                </NavLink>

                <NavLink to="/admin/announcements" className={({ isActive }) =>
                    `sidebar-link ${isActive ? 'active' : ''}`}>
                    <Megaphone className="icon" />
                    {isOpen && <span>Announcements</span>}
                </NavLink>

                <NavLink to="/admin/metropolitans" className={({ isActive }) =>
                    `sidebar-link ${isActive ? 'active' : ''}`}>
                    <BookUser className="icon" />
                    {isOpen && <span>Metropolitans</span>}
                </NavLink>

                <NavLink to="/admin/priests" className={({ isActive }) =>
                    `sidebar-link ${isActive ? 'active' : ''}`}>
                    <Users className="icon" />
                    {isOpen && <span>Priests</span>}
                </NavLink>

                <NavLink to="/admin/send-email" className={({ isActive }) =>
                    `sidebar-link ${isActive ? 'active' : ''}`}>
                    <Mail className="icon" />
                    {isOpen && <span>Send Email</span>}
                </NavLink>

                <NavLink to="/admin/students" className={({ isActive }) =>
                    `sidebar-link ${isActive ? 'active' : ''}`}>
                    <GraduationCap className="icon" />
                    {isOpen && <span>Student Data</span>}
                </NavLink>

        <NavLink to="/admin/contacts" className={({ isActive }) => `sidebar-link ${isActive ? 'active' : ''}`}>
          <Phone className="icon" />
          {isOpen && <span>Contacts</span>}
        </NavLink>
        
                <NavLink to="/admin/account-settings" className={({ isActive }) =>
                    `sidebar-link ${isActive ? 'active' : ''}`}>
                    <UserCog className="icon" />
                    {isOpen && <span>Account Settings</span>}
                </NavLink>

                <button className="sidebar-link logout-btn" onClick={handleLogout}>
                    <LogOut className="icon" />
                    {isOpen && <span>Logout</span>}
                </button>
            </nav>
        </aside>
    );
};

export default AdminSidebar;
