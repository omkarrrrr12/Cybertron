import React, { useState } from "react";
import { Box, Typography, Container, Button, Modal } from "@mui/material";
import AMCImg from "../assets/about-image.jpeg";

export default function AboutUs() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Box
      id="amc"
      sx={{
        py: 5,
        background: "linear-gradient(135deg, #0f2545 0%, #2a477a 100%)",
        color: "#fff",
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexDirection: { xs: "column", md: "row" },
            gap: 6,
          }}
        >
          {/* LEFT CONTENT */}
          <Box sx={{ flex: 1 }}>
            <Typography variant="h4" mb={3}>
              About Us
            </Typography>

            <Typography variant="body1" paragraph>
              Cybertron, established in 2014, is professionally focused on
              extracting maximum value by providing advanced technology
              strategy and IT solutions. We are a skilled and specialised
              organisation with certified and successfully trained engineers
              capable of understanding end-user requirements across diverse
              industries.
            </Typography>

            <Typography variant="body1" paragraph>
              We strive to provide advanced technology-related services to
              companies across the globe to achieve innovation and success. We
              specialise in facilitating implementation, system upgrades,
              hosting solutions, and IT infrastructure support aligned with
              business requirements.
            </Typography>

            <Button
              variant="contained"
              color="secondary"
              size="large"
              onClick={handleOpen}
            >
              Read More
            </Button>
          </Box>

          {/* RIGHT IMAGE */}
          <Box
            component="img"
            src={AMCImg}
            alt="IT Infrastructure"
            sx={{
              width: { xs: "100%", md: "45%" },
              borderRadius: 3,
              boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
            }}
          />
        </Box>

        {/* MODAL */}
        <Modal open={open} onClose={handleClose}>
         <Box
    sx={{
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      width: { xs: "95%", md: "80%", lg: 1000 },
      maxHeight: "90vh",
      bgcolor: "#fff",
      color: "#000",
      borderRadius: 2,
      boxShadow: 24,
      outline: "none",
      display: "flex",
      flexDirection: "column",
    }}
  >
            {/* Sticky Header */}
    <Box
      sx={{
        position: "sticky",
        top: 0,
       background: "linear-gradient(135deg, #0f2545 0%, #2a477a 100%)",
       color: "#fff",
       
        zIndex: 1,
        p: 1,
        // borderBottom: "1px solid #ccc",
      }}
    >
      <Typography variant="h5">More About Cybertron</Typography>
    </Box>
      {/* Scrollable Content */}
    <Box
      sx={{
        p: 2,
        overflowY: "auto",
      }}
    >
            <Typography variant="body1" paragraph>
             Cybertron is a professionally focused on extracting maximum value and are focused on 
providing technology strategy established in 2014. Cybertron is a skilled specialised that has 
certified & assumed responsibility for providing successfully trained engineers capable of 
understanding end-users requirements. We strive a broad category which covers the provision of 
the maximum power of advanced technology – related to services to the companies across the 
globe to achieve innovation and success. We specify in facilitating an implementation or an 
upgrade, hosting systems and other IT solutions to align the business requirements. 
            </Typography>
            <Typography variant="body1" paragraph>
             Cybertron offers expert assistance to develop plans and helps to realise business benefits, with 
no compromise with the quality of the provided services. There are surplus professional resources 
and services that commit absolute IT-related strategical solutions. Cybertron aims to provide a 
standardised and optimised solution to the client’s requirement at its best value. Our main 
objective is to serve an integrated solution and create a collaborative environment to 
accelerate the real-time business transformation and progression at a global level. We offer 
continuous support to assist any kind of business issues.
 
            </Typography>
            <Typography variant="body1">
               Here at Cybertron, we are the firm and greater emphasis in gearing innovation in setting up 
applications with a simplified approach. We guide in all aspect of functionality to achieve 
predictable outcomes based on our proven and repeatable methodology in diverse industries. 
The advice offered by experts considers your budget, who your customers are, and what your 
business is all about. We are truly specialized in serving our various esteemed clients from diverse 
industries. We have been enabling businesses to apply technology to bring total transformation 
in all aspect of their functioning. With Cybertron, a complete hub of top-end technicians we 
overcome the business challenges accustomed to nominal issues and maintaining a hold in the 
global marketplace. 
            </Typography>
            </Box>

            <Box textAlign="right"  p={1}>
              <Button variant="contained" color="secondary" onClick={handleClose}>
                Close
              </Button>
            </Box>
          </Box>
        </Modal>
      </Container>
    </Box>
  );
}
