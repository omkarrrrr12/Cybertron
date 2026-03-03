import React, { useState } from "react";
import {
  Dialog,
  Box,
  Typography,
  TextField,
  Button,
  IconButton,
  Divider
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

export default function EnquiryPopup({ open, handleClose }) {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    handleClose();
  };

  return (
    <Dialog open={open} onClose={handleClose} fullWidth maxWidth="xs">

      {/* HEADER */}
      <Box
        sx={{
          px: 2,
          py: 1,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center"
        }}
      >
        <Typography variant="h6">
          Enquire Now
        </Typography>

        <IconButton onClick={handleClose}>
          <CloseIcon />
        </IconButton>
      </Box>

      <Divider />

     {/* FORM BODY */}
<Box
  component="form"
  onSubmit={handleSubmit}
  sx={{
    px: { xs: 2, sm: 4 },
    py: { xs: 3, sm: 4 },
    display: "flex",
    justifyContent: "center"
  }}
>

  {/* CENTER WRAPPER */}
  <Box
    sx={{
      width: "100%",
      maxWidth: { xs: "100%", sm: 420 }
    }}
  >

    {/* FULL NAME */}
    <Box mb={1}>
      <Typography variant="body2" mb={0.5}>
        Full Name
      </Typography>
      <TextField
        name="name"
        fullWidth
        size="small"
        value={formData.name}
        onChange={handleChange}
      />
    </Box>

    {/* EMAIL */}
    <Box mb={1}>
      <Typography variant="body2" mb={0.5}>
        Email Address
      </Typography>
      <TextField
        name="email"
        type="email"
        fullWidth
        size="small"
        value={formData.email}
        onChange={handleChange}
      />
    </Box>

    {/* PHONE */}
    <Box mb={1}>
      <Typography variant="body2" mb={0.5}>
        Phone Number
      </Typography>
      <TextField
        name="phone"
        fullWidth
        size="small"
        value={formData.phone}
        onChange={handleChange}
      />
    </Box>

    {/* COMPANY */}
    <Box mb={1}>
      <Typography variant="body2" mb={0.5}>
        Company Name
      </Typography>
      <TextField
        name="company"
        fullWidth
        size="small"
        value={formData.company}
        onChange={handleChange}
      />
    </Box>

    {/* REQUIREMENT */}
    <Box mb={1}>
      <Typography variant="body2" mb={0.5}>
        Your Requirement
      </Typography>
      <TextField
        name="message"
        multiline
        rows={4}
        fullWidth
        size="small"
        value={formData.message}
        onChange={handleChange}
      />
    </Box>

    {/* SUBMIT */}
    <Box textAlign="center">
      <Button
        type="submit"
        variant="contained"
        color="secondary"
        size="large"
        fullWidth={{ xs: true, sm: false }}
      >
        Submit Enquiry
      </Button>
    </Box>

  </Box>
</Box>


    </Dialog>
  );
}
