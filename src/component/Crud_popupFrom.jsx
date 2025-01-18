import React, { useState, useEffect } from 'react';
import { Box, TextField, Dialog, DialogActions, DialogContent, DialogTitle, Button, } from '@mui/material';
import 'react-toastify/dist/ReactToastify.css';
import { crudValidation } from '../validation/crudValidation';
import { ImCancelCircle } from "react-icons/im";
import { VscSaveAs } from "react-icons/vsc";

function Crud_popupFrom({ open, onClose, onSave, initialData }) {
    const [formData, setFormData] = useState(initialData || {});
    const [errors, setErrors] = useState({});

    useEffect(() => {
        setFormData(initialData || {});
        setErrors({});
    }, [initialData]);

    const validateField = async (field, value) => {
        try {
            await crudValidation.validateAt(field, { [field]: value });
            setErrors((prevErrors) => ({ ...prevErrors, [field]: null }));
        } catch (validationError) {
            setErrors((prevErrors) => ({ ...prevErrors, [field]: validationError.message }));
        }
    };

    const handleChange = (field, value) => {
        setFormData((prevData) => ({ ...prevData, [field]: value }));
        validateField(field, value);
       
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setFormData((prevData) => ({ ...prevData, image: file }));
        }
    };

    const handleSave = async () => {
        try {
            await crudValidation.validate(formData,);
            onSave(formData);
        } catch (validationError) {
            if (validationError.inner && Array.isArray(validationError.inner)) {
                const validationErrors = validationError.inner.reduce((acc, error) => {
                    acc[error.path] = error.message;
                    return acc;
                }, {});
                setErrors(validationErrors);
            } else {
                console.error('Unexpected validation error:', validationError);
            }
        }
    };

    return (
        <>
            <Dialog open={open} onClose={onClose}>
                <Box sx={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
                    <DialogTitle>{formData?.id ? 'Edit Data' : 'Add Data'}</DialogTitle>
                </Box>
                <DialogContent>
                    {[
                        { name: 'institution', label: 'Institution', type: 'text' },
                        { name: 'status', label: 'Status', type: 'text' },
                        { name: 'joiningDate', label: 'Joining Date', type: 'date' },
                        { name: 'endDate', label: 'End Date', type: 'date' },
                        { name: 'degree', label: 'Degree', type: 'text' },
                        { name: 'currentSemester', label: 'Semester', type: 'text' },
                        { name: 'grade', label: 'Grade', type: 'text' },
                        { name: 'mainSubject', label: 'Main Subject', type: 'text' },
                    ].map(({ name, label, type }) => (
                        <TextField
                            key={name}
                            label={label}
                            fullWidth
                            margin="normal"
                            type={type}
                            value={formData[name] || ''}
                            onChange={(e) => handleChange(name, e.target.value)}
                            onBlur={(e) => validateField(name, e.target.value)}
                            error={!!errors[name]}
                            helperText={errors[name] || ''}
                            InputLabelProps={type === 'date' ? { shrink: true } : {}}
                        />
                    ))}

                    <Box sx={{ marginTop: 2 }}>
                        <label htmlFor="image-upload">Upload Logo</label>
                        <input
                            id="image-upload"
                            type="file"
                            accept="image/*"
                            onChange={handleFileChange}
                            style={{ display: 'block', marginTop: '8px' }}
                        />
                    </Box>
                </DialogContent>
                <DialogActions>
                    <Box sx={{ display: 'flex', justifyContent: 'center', width: '100%', padding: '20px', gap: 1 }}>
                        <Button
                            onClick={onClose}
                            variant="outlined"
                            color="error"
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '8px',
                                '&:hover': {
                                    backgroundColor: 'rgba(255, 0, 0, 0.1)',
                                    borderColor: 'red',
                                },
                            }}
                        >
                            <ImCancelCircle size={25} />Cancel
                        </Button>
                        <Button
                            onClick={handleSave}
                            variant="outlined"
                            color="success"
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '8px',
                                '&:hover': {
                                    backgroundColor: 'rgba(0, 255, 0, 0.1)',
                                    borderColor: 'green',
                                },
                            }}
                        >
                            <VscSaveAs size={25} />Save
                        </Button>
                    </Box>
                </DialogActions>
            </Dialog>
        </>
    );
}

export default Crud_popupFrom;