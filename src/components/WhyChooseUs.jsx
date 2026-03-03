import React from "react";
import { Box, Typography, Container } from "@mui/material";
import { motion } from "framer-motion"; // ✅ Install with: npm install framer-motion
import VerifiedIcon from "@mui/icons-material/Verified";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import InsightsIcon from "@mui/icons-material/Insights";
import SavingsIcon from "@mui/icons-material/Savings";
import HandshakeIcon from "@mui/icons-material/Handshake";

const points = [
  { title: "Certified & Skilled Engineers", icon: <VerifiedIcon /> },
  { title: "24/7 Technical Support", icon: <SupportAgentIcon /> },
  { title: "Enterprise-Level Solutions", icon: <BusinessCenterIcon /> },
  { title: "Proven Methodology", icon: <InsightsIcon /> },
  { title: "Cost-Effective Strategy", icon: <SavingsIcon /> },
  { title: "Long-Term IT Partnership", icon: <HandshakeIcon /> },
];

// Framer Motion variants for animation
const cardVariants = {
  hidden: { opacity: 0, y: -50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, type: "spring", stiffness: 100 },
  }),
};

const Card = ({ point, large = false, index }) => (
  <motion.div
    custom={index}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    variants={cardVariants}
  >
    <Box
      sx={{
        p: 3,
        borderRadius: 4,
        background: "linear-gradient(135deg, #0f2545 0%, #2a477a 100%)",
        border: "1px solid rgba(255,255,255,0.08)",
        backdropFilter: "blur(12px)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        height: "100%",
        transition: "all 0.35s ease",
        "&:hover": {
          transform: "translateY(-10px)",
          background: "#f4b300",
          boxShadow: "0 30px 70px rgba(0,0,0,0.4)",
          "& .icon-box": { color: "#0f2545" },
        },
      }}
    >
      <Box
        className="icon-box"
        sx={{
          width: 60,
          height: 60,
          borderRadius: 3,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#F4B400",
          mb: 3,
          fontSize: 22,
          transition: "color 0.3s ease",
        }}
      >
        {point.icon}
      </Box>
      <Typography variant={large ? "h6" : "h6"} fontWeight={600} color="white">
        {point.title}
      </Typography>
    </Box>
  </motion.div>
);

export default function WhyChooseUs() {
  return (
    <Box  id="why"sx={{ py: { xs: 2, md: 4 }, color: "#fff" }}>
      <Container maxWidth="lg">
        {/* Section Heading */}
        <Box textAlign="center" mb={5}>
          <Typography variant="h3" fontWeight={700} gutterBottom color="#0f2545">
            Why Choose{" "}
            <Box component="span" sx={{ color: "#F4B400" }}>
              Cybertron?
            </Box>
          </Typography>
          <Typography
            sx={{
              maxWidth: 650,
              mx: "auto",
              opacity: 0.85,
              fontSize: { xs: 15, md: 18 },
              color: "#0f2545",
            }}
          >
            We combine deep technical expertise with strategic execution to deliver scalable,
            secure, and future-ready IT infrastructure.
          </Typography>
        </Box>

        {/* Grid Layout */}
        <Box
          sx={{
            display: "grid",
            gap: 3,
            gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr", md: "repeat(3, 1fr)" },
            gridAutoRows: "1fr",
          }}
        >
          <Box sx={{ gridColumn: { md: "span 2" } }}>
            <Card point={points[0]} large index={0} />
          </Box>
          <Card point={points[1]} index={1} />
          <Card point={points[2]} index={2} />
          <Box sx={{ gridColumn: { md: "span 2" } }}>
            <Card point={points[3]} large index={3} />
          </Box>
          <Card point={points[4]} index={4} />
          <Card point={points[5]} index={5} />
        </Box>
      </Container>
    </Box>
  );
}
