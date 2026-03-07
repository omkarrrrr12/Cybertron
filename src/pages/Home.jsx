import React from "react";
import { Box } from "@mui/material";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import ServicesSection from "../components/ServicesSection";
import WhyChooseUs from "../components/WhyChooseUs";
import AboutUs from "../components/AboutUs";
import CTASection from "../components/CTASection";
import Footer from "../components/Footer";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { IconButton } from "@mui/material";
import { Helmet } from "react-helmet-async";
import ClientLogos from "../components/ourclients";
// import { useEffect } from "react";
export default function Home() {
//   useEffect(() => {
//   if (sessionStorage.getItem("scrollToHero")) {
//     sessionStorage.removeItem("scrollToHero");

//     setTimeout(() => {
//       const hero = document.getElementById("hero");
//       if (hero) {
//         hero.scrollIntoView({ behavior: "smooth" });
//       }
//     }, 100);
//   }
// }, []);
  return (
    <>
    <Helmet>
        <title>Cybertron IT Solutions | Network Setup, CCTV, Biometric, Web Development</title>

        <meta
          name="description"
          content="Cybertron provides Network Setup, Web Design & Development, Web Hosting, IT Infrastructure Deployment, CCTV Installation, Biometric Systems, Access Control, AMC Support, and IT Peripheral Solutions."
        />

        <meta
          name="keywords"
          content="Network Setup, CCTV Installation, Biometric System, Access Control, Web Development, Web Hosting, IT Infrastructure, AMC Services, IT Peripherals"
        />

        <meta name="author" content="Cybertron IT Solutions" />

        {/* Open Graph */}
        <meta property="og:title" content="Cybertron IT Solutions" />
        <meta
          property="og:description"
          content="End-to-end IT Infrastructure, Network Setup, CCTV Surveillance, Biometric Systems and Web Solutions."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://yourdomain.com" />
      </Helmet>
      <Navbar />
      <Box sx={{ overflowX: "hidden" ,mt:0 }}>
        <HeroSection />
        <ServicesSection />
        <ClientLogos />
        <WhyChooseUs />
        <AboutUs />
        <CTASection />
        <IconButton
  href="https://wa.me/919766748136"
  target="_blank"
  sx={{
    position: "fixed",
    bottom: 20,
    right: 20,
    backgroundColor: "#25D366",
    color: "#fff",
    width: 60,
    height: 60,
    zIndex: 999,
    "&:hover": {
      backgroundColor: "#1ebe5d"
    }
  }}
>
  <WhatsAppIcon sx={{ fontSize: 35 }} />
</IconButton>
        <Footer />
        
      </Box>
    </>
  );
}

