import { useEffect, useState } from 'react';
import axios from 'axios';
import AdminSidebar from '../../components/Admin/Sidebar/AdminSidebar';
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

interface Testimonial {
    _id: string;
    name: string;
    position: string;
    testimony: string;
    displayOrder: number;
    img_src: string;
}

const Testimonials = () => {
    const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
    const [formData, setFormData] = useState<any>({});
    const [editingTestimonial, setEditingTestimonial] = useState<Testimonial | null>(null);
    const [modalOpen, setModalOpen] = useState(false);
    const [isEdit, setIsEdit] = useState(false);
    const [loading, setLoading] = useState(false);
    const [deleteModalOpen, setDeleteModalOpen] = useState(false);
    const [testimonialToDelete, setTestimonialToDelete] = useState<string | null>(null);

    const token = localStorage.getItem('token');

    const fetchTestimonials = async () => {
        try {
            const res = await axios.get(`${import.meta.env.VITE_API_URL}/api/testimonials/getAllTestimonials`);
            setTestimonials(res.data.testimonials);
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
        setFormData({ name: '', position: '', testimony: '', displayOrder: '', image: null });
        setModalOpen(true);
    };

    const openEditModal = (testimonial: Testimonial) => {
        setIsEdit(true);
        setEditingTestimonial(testimonial);
        setFormData({
            name: testimonial.name,
            position: testimonial.position,
            testimony: testimonial.testimony,
            displayOrder: testimonial.displayOrder.toString(),
            image: null,
        });
        setModalOpen(true);
    };

    const handleSubmit = async (e?: React.FormEvent) => {
        if (e) e.preventDefault();

        const data = new FormData();
        data.append('name', formData.name);
        data.append('position', formData.position);
        data.append('testimony', formData.testimony);
        data.append('displayOrder', formData.displayOrder);
        if (formData.image) data.append('img', formData.image);

        try {
            setLoading(true);
            if (isEdit && editingTestimonial) {
                await axios.patch(`${import.meta.env.VITE_API_URL}/api/testimonials/${editingTestimonial._id}`, data, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                        'Content-Type': 'multipart/form-data',
                    },
                });
            } else {
                await axios.post(`${import.meta.env.VITE_API_URL}/api/testimonials/upload`, data, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                        'Content-Type': 'multipart/form-data',
                    },
                });
            }
            setModalOpen(false);
            await fetchTestimonials();
        } catch (err) {
            console.error('Submit error:', err);
        } finally {
            setLoading(false);
        }
    };

    const confirmDelete = (id: string) => {
        setTestimonialToDelete(id);
        setDeleteModalOpen(true);
    };

    const handleDelete = async () => {
        if (!testimonialToDelete) return;
        setLoading(true);
        try {
            await axios.delete(`${import.meta.env.VITE_API_URL}/api/testimonials/${testimonialToDelete}`, {
                headers: { Authorization: `Bearer ${token}` },
            });
            await fetchTestimonials();
            setDeleteModalOpen(false);
            setTestimonialToDelete(null);
        } catch (err) {
            console.error('Delete error:', err);
        }
        setLoading(false);
    };

    useEffect(() => {
        fetchTestimonials();
    }, []);

    return (
        <div className="admin-container container">
            <AdminSidebar />
            <div className="admin-content">
                <div className="servants-header">
                    <h2 className="head-font text-main">Testimonials Management</h2>
                    <button className="shadow-light border-mid rounded-20" onClick={openAddModal}>
                        + Add Testimonial
                    </button>
                </div>

                <div className="servants-grid">
                    {testimonials.map((testimonial) => (
                        <div key={testimonial._id} className="servantsCard-Container">
                            <img src={testimonial.img_src} alt={testimonial.name} />
                            <div className="textContainer">
                                <h4>{testimonial.name}</h4>
                                <p>{testimonial.position}</p>
                               <p className="ellipsis">{testimonial.testimony}</p>
                                <p>Order: {testimonial.displayOrder}</p>
                            </div>
                            <button
                                style={{ position: 'absolute', top: '10px', right: '40px', background: 'transparent', border: 'none' }}
                                onClick={() => openEditModal(testimonial)}
                            >
                                <Pencil color="white" size={20} />
                            </button>
                            <button
                                style={{ position: 'absolute', top: '10px', right: '10px', background: 'transparent', border: 'none' }}
                                onClick={() => confirmDelete(testimonial._id)}
                            >
                                <Trash2 color="white" size={20} />
                            </button>
                        </div>
                    ))}
                </div>

                {/* Add/Edit Modal */}
                <Dialog open={modalOpen} onClose={() => setModalOpen(false)} maxWidth="sm" fullWidth>
                    <Box sx={{ bgcolor: '#fef7ef', borderRadius: '20px', p: 2 }}>
                        <DialogTitle sx={{ color: 'var(--main-color)', fontSize: '24px' }}>
                            {isEdit ? 'Edit Testimonial' : 'Add Testimonial'}
                        </DialogTitle>
                        <DialogContent>
                            {['name', 'position', 'testimony', 'displayOrder'].map((field) => (
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
                                    multiline={field === 'testimony'}
                                    rows={field === 'testimony' ? 4 : undefined}
                                    slotProps={
                                        field === 'testimony'
                                            ? {
                                                // @ts-ignore (suppress TS error if using older MUI/TypeScript versions)
                                                htmlInput: { maxLength: 300 },
                                            }
                                            : undefined
                                    }
                                    helperText={
                                        field === 'testimony'
                                            ? `${(formData.testimony || '').length}/300 characters`
                                            : ''
                                    }
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
                    <Box sx={{ bgcolor: '#fef7ef', borderRadius: '20px', p: 2 }}>
                        <DialogTitle sx={{ color: 'var(--main-color)' }}>Confirm Delete</DialogTitle>
                        <DialogContent>
                            <Typography sx={{ color: 'var(--text-light)' }}>
                                Are you sure you want to delete this testimonial?
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
                                {loading ? 'Deleting...' : 'Yes, Delete'}
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

export default Testimonials;