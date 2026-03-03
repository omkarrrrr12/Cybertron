import React from "react";
import { Box, Typography, Button, Container } from "@mui/material";
import HeroImage from "../assets/cybertronBg.jpg";

export default function HeroSection() {
  return (
   <Box
  id="hero"
  sx={{
    width: "100%",
      minHeight: {
      xs: "80vh",
      sm: "90vh",
      md: "100vh"
    },
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundImage: `url(${HeroImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    color: "#fff",
    textAlign: "center",
    px: 2,
  }}
>

     <Container
  maxWidth="md"
  sx={{
    backgroundColor: "rgba(99, 124, 143, 0.43)", // semi-transparent
    backdropFilter: "blur(10px)", // adds the blur effect
    WebkitBackdropFilter: "blur(10px)", // for Safari support
    p: 4,
    borderRadius: 5,
    boxShadow: "0 8px 32px 0 rgba(0, 0, 0, 0.1)", // optional subtle shadow
    border: "1px solid rgba(255, 255, 255, 0.18)" // optional glass border
  }}
>
  {/* Your content here */}

        <Typography
          variant="h3"
          sx={{
            mb: 3,
            fontSize: { xs: "1.8rem", sm: "2.4rem", md: "3rem" },
            color: "#06184f",
          }}
        >
          Complete IT & Digital Solutions
        </Typography>

        {/* Empowering line */}
<Typography
  variant="h6"
  sx={{
    mb: 2,
    fontSize: { xs: "1rem", sm: "1.1rem", md: "1.25rem" },
    fontWeight: 500,
  }}
>
  Empowering businesses with cutting-edge IT solutions.
</Typography>

{/* Services listed */}
<Typography
  variant="body1"
  sx={{
    mb: 5,
    fontSize: { xs: "0.9rem", sm: "1rem", md: "1.1rem" },
    color: "black",
  }}
>
  Network Setup | Web Design & Development | Hosting | IT Infrastructure | CCTV Surveillance | Biometric Systems | Access Control | AMC Support | IT Peripheral Solutions
</Typography>

        <Button
          variant="contained"
          color="secondary"
          size="large"
          onClick={() =>
            document.getElementById("services")?.scrollIntoView({
              behavior: "smooth",
            })
          }
        >
          Explore Services
        </Button>
      </Container>
    </Box>
  );
}
