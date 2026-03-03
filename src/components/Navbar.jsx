import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  Container,
  IconButton,
  Drawer,
  List,
  ListItemButton,
  ListItemText,
  Divider,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import logo from "../assets/logo.png";


export default function Navbar() {
  const [open, setOpen] = useState(false);

  const menuItems = [
    { label: "Home", id: "hero" },
    { label: "Services", id: "services" },
    // { label: "Why Us", id: "why" },
    { label: "About Us", id: "amc" },
    { label: "Contact", id: "contact" },
  ];

 const scrollToSection = (id) => {
  const section = document.getElementById(id);
  if (section) {
    // Adjust for fixed navbar height
    const yOffset = -65; // approximate navbar height
    const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset;

    window.scrollTo({ top: y, behavior: "smooth" });
  }
  setOpen(false); // close drawer if open
};


  return (
    <>
      <AppBar
  position="fixed"
  color="transparent"
  elevation={0}
  sx={{
    backgroundColor: "rgb(244, 244, 244)",
    backdropFilter: "blur(18px)",
    WebkitBackdropFilter: "blur(18px)",
  }}
>

        <Container maxWidth="lg">
          <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
            {/* Logo */}
          <Box
  component="img"
  src={logo}
  alt="Cybertron Logo"
onClick={() => {
  window.history.scrollRestoration = "manual";
  window.location.reload();
}}
  sx={{
    height: 40,   // adjust as needed
    cursor: "pointer",
    objectFit: "contain",
  }}
/>


            {/* Desktop Menu */}
            <Box sx={{ display: { xs: "none", md: "flex" }, gap: 3 }}>
              {menuItems.map((item) => (
                <Button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  sx={{
                    color: "#0a192f",
                    fontWeight: 500,
                    "&:hover": {
                      backgroundColor: "transparent",
                      color: "#F4B400",
                    },
                  }}
                >
                  {item.label}
                </Button>
              ))}
            </Box>

            {/* Mobile Menu Icon */}
            <IconButton
              sx={{ display: { md: "none" }, color: "##0a192f" }}
              onClick={() => setOpen(true)}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </Container>
      </AppBar>

      {/* Spacer */}
      <Toolbar />

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={open}
        onClose={() => setOpen(false)}
      >
        <Box
          sx={{
            width: 280,
            height: "100%",
            // backgroundColor: "#0a192f",
            color: "#0a192f",
            display: "flex",
            flexDirection: "column",
          }}
        >
          {/* Drawer Header */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              px: 2,
              py: 2,
            }}
          >
            <Typography variant="h6" fontWeight={600}>
              
            </Typography>

            <IconButton
              onClick={() => setOpen(false)}
              sx={{ color: "#0a192f" }}
            >
              <CloseIcon />
            </IconButton>
          </Box>

          <Divider sx={{ backgroundColor: "rgba(255,255,255,0.1)" }} />

          {/* Menu List */}
          <List sx={{ mt: 1 }}>
            {menuItems.map((item) => (
              <ListItemButton
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                sx={{
                  py: 1.8,
                  px: 3,
                  "&:hover": {
                    backgroundColor: "#F4B400",
                  },
                }}
              >
                <ListItemText
                  primary={item.label}
                  primaryTypographyProps={{
                    fontSize: "1rem",
                    fontWeight: 500,
                  }}
                />
              </ListItemButton>
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  );
}
