import React, { useState } from "react";
import { Box, Typography, Button, Container } from "@mui/material";
import EnquiryPopup from "../components/EnquiryPopup";

export default function CTASection() {

  const [openForm, setOpenForm] = useState(false);

  return (
    <Box
    id ="contact" sx={{ py: 12, textAlign: "center" }}>
      <Container>

        <Typography variant="h4" mb={4}>
          Ready to Transform Your Business with Technology?
        </Typography>

        <Button
          variant="contained"
          color="secondary"
          size="large"
          onClick={() => setOpenForm(true)}
        >
          Contact Cybertron Today
        </Button>

      </Container>

      <EnquiryPopup
        open={openForm}
        handleClose={() => setOpenForm(false)}
      />
    </Box>
  );
}
