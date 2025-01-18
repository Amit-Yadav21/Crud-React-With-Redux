import React, { useState } from "react";
import {
    Box,
    Typography,
    Card,
    CardContent,
    CardMedia,
    Button,
    Chip,
    Divider,
} from "@mui/material";
import Crud_popupFrom from "./Crud_popupFrom";
import { useSelector, useDispatch } from "react-redux";
import { addData, updateData, deleteData } from "../redux/crudSlice";
import { MdAddChart } from "react-icons/md";
import { CiEdit } from "react-icons/ci";
import { RiDeleteBin3Line } from "react-icons/ri";
import { toast, ToastContainer } from "react-toastify";

const Crud = () => {
    const [visibleData, setVisibleData] = useState(2); // Controls the number of items visible
    const curds = useSelector((state) => state.crud); // Redux academic state
    const dispatch = useDispatch();

    const [open, setOpen] = useState(false);
    const [currentData, setCurrentData] = useState(null);

    const handleOpen = (data) => {
        setCurrentData(data); // Set data for edit or add
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        setCurrentData(null);
    };

    const handleSave = (data) => {
        if (data.id) {
            dispatch(updateData(data)); // Update existing academic data
            toast.success("Data update successfully ✏️");
        } else {
            dispatch(addData({ ...data, id: Date.now() })); // Add new academic data with a unique ID
            toast.success("Data add successfully ➕");
        }
        handleClose();
    };

    const handleDelete = (id) => {
        dispatch(deleteData(id)); // Delete academic data
        toast.success("Data delete successfully 🗑️");
    };

    const loadMoreItems = () => {
        setVisibleData((prevVisibleData) => prevVisibleData + 2); // Show more items
    };

    return (
        <Box sx={{ p: 4, }}>
            <Crud_popupFrom
                open={open}
                onClose={handleClose}
                onSave={handleSave}
                initialData={currentData}
            />

            <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <Typography
                    variant="h4"
                    sx={{
                        borderColor: "#242760",
                        pb: 1,
                        fontWeight: "bold",
                        color: "#242760",
                    }}
                >
                    Crud Oparetion React With Redux
                </Typography>
                <Box>
                    <Button variant="outlined" color="primary" onClick={() => handleOpen({})}
                        sx={{
                            // width: "auto",
                            display: 'flex', // Align items horizontally
                            alignItems: 'center', // Center items vertically
                            gap: '8px', // Adjust the gap between the icon and text
                            "&:hover": {
                                backgroundColor: "transparent",
                                // borderColor: "secondary.main",
                            },
                        }}
                    >
                        <MdAddChart size={30} />
                    </Button>
                </Box>
            </Box>
            <Divider sx={{ my: 1, borderColor: "#242760" }} />
            <Box display="flex" justifyContent={"center"} flexWrap="wrap" margin={"30px"} gap={4}>
                {curds.slice(0, visibleData).map((item, index) => (
                    <Card
                        key={item.id || index}
                        sx={{
                            width: "585px",
                            display: "flex",
                            justifyContent: "center",
                            flexDirection: "column",
                            boxShadow: 3,
                        }}
                    >
                        <Box sx={{ textAlign: "right", marginBottom: "0px" }}>
                            <Chip
                                label={item.status}
                                sx={{
                                    backgroundColor: "#242760",
                                    color: "#FFFFFF",
                                    borderRadius: 0,
                                    fontSize: "13px",
                                    fontWeight: 500,
                                }}
                            // size="small"
                            />
                        </Box>
                        <CardContent>
                            <Box display="flex" alignItems="center" gap={2}>
                                <CardMedia
                                    component="img"
                                    image={
                                        item.logo && typeof item.logo === "string"
                                            ? item.logo // Use the logo if it's a valid string
                                            : item.image
                                                ? URL.createObjectURL(item.image) // Use createObjectURL if dynamic file exists
                                                : "https://via.placeholder.com/50" // Fallback to a default image
                                    }
                                    alt={`${item.institution} logo`}
                                    sx={{ width: 50, height: 50, color: "#393939", borderRadius: "50%", objectFit: "fill", }}
                                />
                                <Typography variant="h6" fontWeight="bold" fontSize={"18px"}>
                                    {item.institution}
                                </Typography>
                            </Box>
                            <Divider sx={{ my: 2 }} />
                            <Box display="flex" justifyContent="space-between">
                                <Box>
                                    <Typography variant="body2" color="#838383" fontWeight="400" fontSize={"12px"}>
                                        Joining Date:
                                    </Typography>
                                    <Typography
                                        variant="body1"
                                        color="#393939"
                                        fontWeight="600"
                                        fontSize={"12px"}
                                    >
                                        {item.joiningDate}
                                    </Typography>
                                </Box>
                                <Box>
                                    <Typography variant="body2" color="#838383" fontWeight="400" fontSize={"12px"}>
                                        End Date:
                                    </Typography>
                                    <Typography
                                        variant="body1"
                                        color="#393939"
                                        fontWeight="600"
                                        fontSize={"12px"}
                                    >
                                        {item.endDate}
                                    </Typography>
                                </Box>
                                <Box>
                                    <Typography variant="body2" color="#838383" fontWeight="400" fontSize={"12px"}>
                                        Degree:
                                    </Typography>
                                    <Typography
                                        variant="body1"
                                        color="#393939"
                                        fontWeight="600"
                                        fontSize={"12px"}
                                    >
                                        {item.degree}
                                    </Typography>
                                </Box>
                            </Box>
                            {item.currentSemester && (
                                <Box sx={{ display: "flex", alignItems: "center", gap: 1, paddingTop: 1 }}>
                                    <Typography
                                        variant="body2"
                                        color="text.secondary"
                                        fontWeight="400"
                                        fontSize={"14px"}
                                    >
                                        Current Semester:
                                    </Typography>
                                    <Typography variant="body1" fontWeight="600" fontSize={"14px"}>
                                        {item.currentSemester}
                                    </Typography>
                                </Box>
                            )}
                            {item.grade && (
                                <Box sx={{ display: "flex", alignItems: "center", gap: 1, mt: 1 }}>
                                    <Typography
                                        variant="body2"
                                        color="text.secondary"
                                        fontWeight="400"
                                        fontSize={"14px"}
                                    >
                                        Grade:
                                    </Typography>
                                    <Typography variant="body1" fontWeight="600" fontSize={"14px"}>
                                        {item.grade}
                                    </Typography>
                                </Box>
                            )}
                            <Box sx={{ display: "flex", alignItems: "center", gap: 1, paddingTop: 1 }}>
                                <Typography
                                    variant="body2"
                                    color="text.secondary"
                                    fontWeight="400"
                                    fontSize={"14px"}
                                >
                                    Main Subject:
                                </Typography>
                                <Typography variant="body1" fontWeight="600" fontSize={"14px"}>
                                    {item.mainSubject}
                                </Typography>
                            </Box>
                            <Box sx={{ marginTop: 1, display: 'flex', justifyContent: 'end', alignItems: 'center', gap: 1, paddingRight: '10px' }}>
                                <CiEdit size={20} style={{ color: "green", cursor: "pointer" }} onClick={() => handleOpen(item)} />
                                <RiDeleteBin3Line size={20} style={{ color: "red", cursor: "pointer" }} onClick={() => handleDelete(item.id)} />
                            </Box>
                        </CardContent>

                    </Card>
                ))}
            </Box>
            {visibleData < curds.length && (
                <Box textAlign="center" mt={4}>
                    <Button
                        variant="outlined"
                        onClick={loadMoreItems}
                        color="info"
                        sx={{
                            width: "auto",
                            "&:hover": {
                                backgroundColor: "transparent",
                                borderColor: "secondary.main",
                            },
                        }}
                    >
                        Load More...
                    </Button>
                </Box>
            )}
            <ToastContainer />
        </Box>
    );
};

export default Crud;