import { useEffect, useState } from 'react';
import axios from 'axios';
import AdminSidebar from '../../components/Admin/Sidebar/AdminSidebar';
import '../../styles/admin/Servants.css';
import { Pencil, Trash2 } from 'lucide-react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
  Box,
  Typography,
} from '@mui/material';

interface Servant {
  _id: string;
  name: string;
  position: string;
  class: string;
  year: string;
  displayOrder: number;
  img_src: string;
}

const Servants = () => {
  const [servants, setServants] = useState<Servant[]>([]);
  const [formData, setFormData] = useState<any>({});
  const [editingServant, setEditingServant] = useState<Servant | null>(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [loading, setLoading] = useState(false);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [servantToDelete, setServantToDelete] = useState<string | null>(null);

  const token = localStorage.getItem('token');

  const fetchServants = async () => {
    try {
      const res = await axios.get(`${import.meta.env.VITE_API_URL}/api/servants/getAllServants`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setServants(res.data.servants);
    } catch (err) {
      console.error('Fetch error:', err);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, files } = e.target;
    if (files) {
      setFormData({ ...formData, image: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const openAddModal = () => {
    setIsEdit(false);
    setFormData({ name: '', position: '', class: '', year: '', displayOrder: '', image: null });
    setModalOpen(true);
  };

  const openEditModal = (servant: Servant) => {
    setIsEdit(true);
    setEditingServant(servant);
    setFormData({
      name: servant.name,
      position: servant.position,
      class: servant.class,
      year: servant.year,
      displayOrder: servant.displayOrder.toString(),
      image: null,
    });
    setModalOpen(true);
  };

  const handleSubmit = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();

    const data = new FormData();
    data.append('name', formData.name);
    data.append('position', formData.position);
    data.append('class', formData.class);
    data.append('year', formData.year);
    data.append('displayOrder', formData.displayOrder);
    if (formData.image) data.append('img', formData.image);

    try {
      setLoading(true);
      if (isEdit && editingServant) {
        await axios.patch(`${import.meta.env.VITE_API_URL}/api/servants/${editingServant._id}`, data, {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'multipart/form-data',
          },
        });
      } else {
        await axios.post(`${import.meta.env.VITE_API_URL}/api/servants/upload`, data, {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'multipart/form-data',
          },
        });
      }
      setModalOpen(false);
      await fetchServants();
    } catch (err) {
      console.error('Submit error:', err);
    } finally {
      setLoading(false);
    }
  };

  const confirmDelete = (id: string) => {
    setServantToDelete(id);
    setDeleteModalOpen(true);
  };

  const handleDelete = async () => {
    if (!servantToDelete) return;
    setLoading(true)
    try {
      await axios.delete(`${import.meta.env.VITE_API_URL}/api/servants/${servantToDelete}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      await fetchServants();
      setDeleteModalOpen(false);
      setServantToDelete(null);
    } catch (err) {
      console.error('Delete error:', err);
    }
    setLoading(false)
  };

  useEffect(() => {
    fetchServants();
  }, []);

  return (
    <div className="admin-container container">
      <AdminSidebar />
      <div className="admin-content">
        <div className="servants-header">
          <h2 className="head-font text-main">Servants Management</h2>
          <button className="shadow-light border-mid rounded-20" onClick={openAddModal}>
            + Add Servant
          </button>
        </div>

        <div className="servants-grid">
          {servants.map((servant) => (
            <div key={servant._id} className="servantsCard-Container">
              <img src={servant.img_src} alt={servant.name} />
              <div className="textContainer">
                <h4>{servant.name}</h4>
                <p>{servant.position}</p>
                <p>{servant.class} - {servant.year}</p>
                <p>Order: {servant.displayOrder}</p>
              </div>
              <button
                style={{ position: 'absolute', top: '10px', right: '40px', background: 'transparent', border: 'none' }}
                onClick={() => openEditModal(servant)}
              >
                <Pencil color="white" size={20} />
              </button>
              <button
                style={{ position: 'absolute', top: '10px', right: '10px', background: 'transparent', border: 'none' }}
                onClick={() => confirmDelete(servant._id)}
              >
                <Trash2 color="white" size={20} />
              </button>
            </div>
          ))}
        </div>

        {/* Add/Edit Modal */}
        <Dialog open={modalOpen} onClose={() => setModalOpen(false)} maxWidth="sm" fullWidth>
          <Box sx={{ bgcolor: '#fef7ef',borderRadius: '20px'}}>
            <DialogTitle sx={{ color: 'var(--main-color)', fontSize: '24px' }}>
              {isEdit ? 'Edit Servant' : 'Add Servant'}
            </DialogTitle>
            <DialogContent>
              {['name', 'position', 'class', 'year', 'displayOrder'].map((field) => (
                <TextField
                  key={field}
                  name={field}
                  label={field.charAt(0).toUpperCase() + field.slice(1)}
                  type={field === 'displayOrder' ? 'number' : 'text'}
                  fullWidth
                  margin="dense"
                  value={formData[field] || ''}
                  onChange={handleChange}
                  required
                  variant="outlined"
                  InputProps={{ style: { backgroundColor: '#fff' } }}
                />
              ))}
              <input type="file" accept="image/*" onChange={handleChange} style={{ marginTop: '1rem' }} />
            </DialogContent>
            <DialogActions>
              <Button
                onClick={handleSubmit}
                variant="contained"
                sx={{
                  backgroundColor: 'var(--main-color)',
                  color: '#fff',
                  borderRadius: '20px',
                  boxShadow: '4px 6px #000',
                  '&:hover': { backgroundColor: 'var(--dark-main)' },
                }}
                disabled={loading}
              >
                {loading ? (isEdit ? 'Updating...' : 'Uploading...') : (isEdit ? 'Update' : 'Add')}
              </Button>
              <Button
                onClick={() => setModalOpen(false)}
                variant="outlined"
                sx={{
                  color: '#000',
                  borderColor: '#000',
                  borderRadius: '20px',
                  boxShadow: '4px 6px #000',
                }}
              >
                Cancel
              </Button>
            </DialogActions>
          </Box>
        </Dialog>

        {/* Delete Modal */}
        <Dialog open={deleteModalOpen} onClose={() => setDeleteModalOpen(false)}>
          <Box sx={{ bgcolor: '#fef7ef',  borderRadius: '20px' }}>
            <DialogTitle sx={{ color: 'var(--main-color)' }}>Confirm Delete</DialogTitle>
            <DialogContent>
              <Typography sx={{ color: 'var(--text-light)' }}>
                Are you sure you want to delete this servant?
              </Typography>
            </DialogContent>
            <DialogActions>
              <Button
                onClick={handleDelete}
                variant="contained"
                sx={{
                  backgroundColor: 'var(--main-color)',
                  color: '#fff',
                  borderRadius: '20px',
                  boxShadow: '4px 6px #000',
                  '&:hover': { backgroundColor: 'var(--dark-main)' },
                }}
                disabled={loading}
              >
               {loading? "Deleting":"Yes, Delete"} 
              </Button>
              <Button
                onClick={() => setDeleteModalOpen(false)}
                variant="outlined"
                sx={{
                  color: '#000',
                  borderColor: '#000',
                  borderRadius: '20px',
                  boxShadow: '4px 6px #000',
                }}
              >
                Cancel
              </Button>
            </DialogActions>
          </Box>
        </Dialog>
      </div>
    </div>
  );
};

export default Servants;
