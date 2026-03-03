import React, { useState } from "react";
import ReactMarkdown from "react-markdown";
import {
  Box,
  Typography,
  Container,
  Grid,
  Link,
  IconButton,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
} from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import logo from "../assets/logo.png";

export default function Footer() {

  const [openPolicy, setOpenPolicy] = useState("");

  const handleOpen = (policy) => setOpenPolicy(policy);
  const handleClose = () => setOpenPolicy("");

  const menuItems = [
    { label: "Home", id: "hero" },
    { label: "Services", id: "services" },
    { label: "About Us", id: "amc" },
    { label: "Contact", id: "contact" },
  ];

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      const yOffset = -80;
      const y =
        section.getBoundingClientRect().top +
        window.pageYOffset +
        yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  const policies = {
   privacy: {
  title: "Privacy Policy",
  content: `We respect your privacy and are committed to protecting your personal information. 

**Information We Collect:**  
Through our contact/enquiry form, we collect only the following details:  
- Name  
- Contact Number  
- Email Address  
- Service Requirements  

**How We Use Your Information:**  
The data collected is used strictly for:  
- Responding to your enquiries  
- Sharing quotations  
- Contacting clients regarding requested services  

Your information will **not** be used for marketing emails or promotional messages.  

**Data Transmission and Storage:**  
- Enquiry data is transmitted securely using EmailJS.  
- The data is stored only in our company email inboxes and is **not** stored elsewhere.  

**Retention and Deletion:**  
- Enquiry emails will be retained as long as possible to ensure proper service follow-up.  
- Users may request deletion of their enquiry data at any time by contacting us.  

**Contact for Privacy Requests:**  
For deletion or any privacy-related inquiries, please contact us at:  
**Email:** info@cybertroninfotech.com  

By submitting your information, you consent to the collection and use of your data as described above.
  `
} ,
   terms: {
  title: "Terms & Conditions",
  content: `
Welcome to Cybertron Infotech. By accessing or using our website, you agree to the following terms and conditions:

**Website Purpose:**  
- The website is intended solely for informational and enquiry purposes.  
- All services offered (including CCTV installation, Network Setup, Web Development, Biometric systems, etc.) are provided only after a separate quotation and a signed agreement or work order.

**Liability Disclaimer:**  
Cybertron Infotech shall **not** be held liable for:  
- Third-party hardware failures  
- Network downtime or connectivity issues  
- Hosting/server issues  
- Client infrastructure readiness or compatibility  

**Content Ownership:**  
- All content on this website, including text, images, branding, and graphics, is owned by Cybertron Infotech.  
- Users are **not permitted** to copy, reproduce, or reuse website content without explicit written permission.

By using this website, you acknowledge and agree to these terms and conditions. For enquiries regarding services or content usage, please contact us at info@cybertroninfotech.com.
  `
},
    refund: {
  title: "Refund Policy",
  content: `
**Advance Payments:**  
- Cybertron Infotech does **not** work with advance payments or purchase orders before starting any services, including:  
  - Installation services  
  - Development work  
  - Hardware procurement  

**Hardware Purchases:**  
- Once hardware is procured or installed, it is **non-refundable**.  

**Custom-Configured Services:**  
- Services like CCTV, Biometric systems, and Access Control are **non-refundable** once work has commenced.  
- If a client cancels after work has started or after hardware has been purchased, any advance payment is **non-refundable**.  

All refund requests are subject to company review and approval, but advance payments and purchased/customized hardware are strictly non-refundable.
  `
},
    
   cookie: {
  title: "Cookie Policy",
  content: `
**Use of Cookies:**  
Our website uses cookies to improve your browsing experience, analyze site traffic, and personalize content. Cookies are small text files stored on your device by your web browser.  

**Types of Cookies We Use:**  
- **Essential Cookies:** Required for website functionality and security.  
- **Analytics Cookies:** Help us understand how visitors use the site and improve performance.  
- **Functional Cookies:** Remember your preferences for a better experience.  

**Third-Party Cookies:**  
We may use third-party services such as Google Analytics, which may place their own cookies.  

**Your Choices:**  
You can choose to disable cookies in your browser settings. Please note that some features of the website may not function properly if cookies are disabled.  

By using our website, you consent to the use of cookies in accordance with this policy.
  `
}
  };

  return (
    <>
      <Box sx={{ backgroundColor: "#0A192F", color: "#fff", pt: 8, pb: 4 }}>
        <Container maxWidth="lg">
          <Grid container spacing={6}>

            {/* Company Info */}
            <Grid item xs={12} md={4}>
              <Box
                component="img"
                src={logo}
                alt="Cybertron Logo"
                onClick={() => scrollToSection("hero")}
                sx={{
                  height: 40,
                  cursor: "pointer",
                  objectFit: "contain",
                  p: 1,
                  bgcolor: "#fff",
                }}
              />

              <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
                <IconButton sx={{ color: "#F4B400", mr: 1 }}>
                  <PhoneIcon />
                </IconButton>
                <Typography>+91 97667 48136</Typography>
              </Box>

              <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
                <IconButton sx={{ color: "#F4B400", mr: 1 }}>
                  <EmailIcon />
                </IconButton>
                <Link
                  href="mailto:info@cybertroninfotech.com"
                  underline="hover"
                  sx={{ color: "#fff" }}
                >
                  info@cybertroninfotech.com
                </Link>
              </Box>

              <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
                <IconButton sx={{ color: "#F4B400", mr: 1 }}>
                  <LocationOnIcon />
                </IconButton>
                <Typography>
                  Address: Shubhashree Residential, Phase I, Akurdi 411035
                </Typography>
              </Box>
            </Grid>

            {/* Quick Links */}
            <Grid item xs={12} md={4}>
              <Typography variant="h6" fontWeight={600} mb={2}>
                Quick Links
              </Typography>

              {menuItems.map((item) => (
                <Typography
                  key={item.id}
                  sx={{
                    mb: 1.5,
                    cursor: "pointer",
                    "&:hover": { color: "#F4B400" },
                  }}
                  onClick={() => scrollToSection(item.id)}
                >
                  {item.label}
                </Typography>
              ))}
            </Grid>

            {/* Legal */}
            <Grid item xs={12} md={4}>
              <Typography variant="h6" fontWeight={600} mb={2}>
                Legal
              </Typography>

              {Object.keys(policies).map((key) => (
                <Typography
                  key={key}
                  sx={{ mb: 1.5, cursor: "pointer", "&:hover": { color: "#F4B400" } }}
                  onClick={() => handleOpen(key)}
                >
                  {policies[key].title}
                </Typography>
              ))}
            </Grid>

          </Grid>

          {/* Bottom */}
          <Box
            sx={{
              borderTop: "1px solid rgba(255,255,255,0.1)",
              mt: 6,
              pt: 3,
              textAlign: "center",
              opacity: 0.7,
            }}
          >
            <Typography variant="body2">
              © {new Date().getFullYear()} Cybertron. All Rights Reserved.
            </Typography>
          </Box>
        </Container>
      </Box>

      {/* Policy Modal */}
      <Dialog open={Boolean(openPolicy)} onClose={handleClose} fullWidth maxWidth="md">
        <DialogTitle>{policies[openPolicy]?.title}</DialogTitle>
        <DialogContent dividers>
  <ReactMarkdown>
    {policies[openPolicy]?.content}
  </ReactMarkdown>
</DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}