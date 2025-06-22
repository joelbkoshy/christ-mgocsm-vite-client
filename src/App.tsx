import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Enchristo from './pages/Enchristo';
import Gallery from './pages/Gallery';
import Login from './pages/Login';

import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute'

// import Login from './pages/Login';
// import AdminDashboard from './pages/admin/Dashboard';
import AddUser from './pages/admin/AddUser';
import Servants from './pages/admin/Servants';
import Testimonials from './pages/admin/Testimonials';
// import Metropolitans from './pages/admin/Metropolitans';
// import Priests from './pages/admin/Priests';
// import EmailSender from './pages/admin/EmailSender';
// import Students from './pages/admin/Students';
// import Announcements from './pages/admin/Announcements';
// import LatestNews from './pages/admin/LatestNews';
// import AccountSettings from './pages/admin/AccountSettings';
import './App.css';

function App() {
  return (
    <div className='App'>
      <BrowserRouter >
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about-us' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/gallery' element={<Gallery />} />
          <Route path='/enchristo' element={<Enchristo />} />
          <Route path='/login' element={<Login />} />
             {/* Protected Admin Routes */}
        <Route
          path="/admin/addUser"
          element={<ProtectedRoute><AddUser /></ProtectedRoute>}
        />    <Route
          path="/admin/servants"
          element={<ProtectedRoute><Servants /></ProtectedRoute>}
        /> <Route
          path="/admin/testimonials"
          element={<ProtectedRoute><Testimonials /></ProtectedRoute>}
        />
        </Routes>
      </ BrowserRouter >
    </div >

  );
}

export default App;
