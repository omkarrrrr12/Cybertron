import React, { useEffect, useRef, useState } from "react";
import {
  Box,
  Typography,
  Container,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Slide,
} from "@mui/material";


import LanguageIcon from "@mui/icons-material/Language";
import StorageIcon from "@mui/icons-material/Storage";
import BuildIcon from "@mui/icons-material/Build";
import HubIcon from "@mui/icons-material/Hub";
import LanIcon from "@mui/icons-material/Lan";                 // Network Setup
import WebIcon from "@mui/icons-material/Web";                 // Web Development
import DevicesIcon from "@mui/icons-material/Devices";         // IT Peripherals
import VideocamIcon from "@mui/icons-material/Videocam";       // CCTV
import FingerprintIcon from "@mui/icons-material/Fingerprint"; // Biometric
import LockIcon from "@mui/icons-material/Lock";               // Access Control

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const services = [
  { 
  title: "Network Setup",
  icon: <LanIcon sx={{ fontSize: 35 }} />,
  desc: "Network Setup involves designing, installing, and configuring reliable wired and wireless infrastructure to ensure seamless communication, secure data transfer, and uninterrupted connectivity across your organization’s systems and devices.",
  details: `Our Network Setup services include infrastructure planning, hardware installation, secure configuration, performance optimization, and ongoing monitoring tailored to your business requirements.

Key Network Setup solutions we implement:
• Network Design: Structured LAN/WAN architecture planning based on organizational needs.
• Router & Switch Configuration: Proper installation and setup for efficient data routing and traffic management.
• Wireless Access Points: Secure and optimized Wi-Fi deployment for maximum coverage.
• Firewall & Security Setup: Protection against unauthorized access and cyber threats.
• Cabling & Rack Installation: Organized structured cabling for reliable network performance.
• Performance Monitoring: Continuous monitoring to ensure network stability, speed, and uptime.
• Scalability Planning: Future-ready infrastructure to support business growth and expansion.`
}
,
  {
    title: "Web Designing",
    icon: <LanguageIcon sx={{ fontSize: 35 }} />,
    desc: "Web design implies the design of internet sites that are presented on the web. It always suggests to the user experience characteristics of website development instead of software development. The online design runs on the looks, layout, and, in some cases, content of an internet site.",
    details: `Web design is about creating user-friendly, visually appealing, and functional websites. It combines appearance, layout, content, and usability to ensure a strong digital presence.

Key aspects of web design:
• Appearance: Includes colors, fonts, images, and overall visual style.
• Layout: Organizes information logically and consistently.
• Usability: Ensures navigation is simple, intuitive, and user-friendly.
• Consistency: Maintains a consistent design across all pages to build trust.
• Responsive Design: Content adapts dynamically to different screen sizes.
• Adaptive Design: Fixed layouts optimized for specific screen sizes.
• SEO Considerations: Web design must support search engine optimization.
• Multimedia Integration: Incorporates images, audio, video, and interactive elements.
• Maintenance: Designers may create new websites or update existing ones for performance and relevance.
• User-Centric Approach: Eliminates unnecessary information, reduces frustration, and nurtures user trust.

Web designers plan, design, and code websites and webpages that merge content, visuals, and functionality to create engaging online experiences. Efficient web design requires a combination of design skills, usability knowledge, and SEO understanding.`
},
{ 
  title: "Web Development",
  icon: <WebIcon sx={{ fontSize: 35 }} />,
  desc: "Web Development involves designing and building responsive, high-performance websites and web applications that enhance user experience, improve engagement, and support business operations across multiple devices and platforms.",
  details: `Our Web Development services include UI/UX design, frontend and backend development, database integration, performance optimization, and secure deployment tailored to your business goals.

Key Web Development solutions we implement:
• Responsive Design: Mobile-friendly layouts for seamless user experience across all screen sizes.
• Frontend Development: Interactive and visually engaging interfaces using modern frameworks.
• Backend Development: Robust server-side logic for smooth functionality and data handling.
• Database Integration: Efficient data storage and retrieval systems.
• API Integration: Connecting third-party services for enhanced functionality.
• Performance Optimization: Faster loading speeds and improved website performance.
• Security Implementation: Protection against vulnerabilities and cyber threats.
• Maintenance & Updates: Continuous support for stability and scalability.`
},

{ 
  title: "Sales of IT Peripherals",
  icon: <DevicesIcon sx={{ fontSize: 35 }} />,
  desc: "Sales of IT Peripherals involves supplying high-quality hardware components and accessories that support daily business operations, improve productivity, and ensure seamless integration with your existing IT infrastructure.",
  details: `Our IT Peripheral Sales services include sourcing, supplying, and installing a wide range of reliable hardware devices tailored to your organizational requirements.

Key IT Peripherals we provide:
• Desktop & Laptop Accessories: Keyboards, mice, docking stations, and adapters.
• Printers & Scanners: High-performance printing and document management solutions.
• Networking Devices: Routers, switches, modems, and access points.
• Storage Devices: External hard drives, SSDs, and backup solutions.
• Display Units: Monitors and projectors for enhanced productivity.
• Power Solutions: UPS systems and surge protectors for uninterrupted operations.
• Audio & Video Devices: Webcams, headsets, and conferencing tools.
• Installation Support: Assistance with setup and configuration of purchased devices.`
},

  {
    title: "Web Hosting",
    icon: <StorageIcon sx={{ fontSize: 35 }} />,
    desc: "Every website that we visit comprises of a site name and an internet host. the simplest thanks to see it is to think about the name because the address and the web hosting because the basic structure.  When you are surfing the online and that we type in a very URL (i.e. http://www.abc.com), our applications program basically queries that name (i.e. abc.com) and asks it where the web site is hosted.",
    details: `Web hosting is the process of using a server to store and serve a website's content, making it accessible on the Internet. It works together with a website name (domain) to allow visitors to reach your site.

Key aspects of web hosting:
• Domain Names: Unique identifiers that distinguish a website, used in networking and addressing purposes.
• Server Hosting: Servers store your website files and databases, providing access to visitors.
• Hosting Packages: Different hosts offer packages based on resources required; popular websites need more resources.
• Content Storage: Hosts provide space for files, images, databases, and other content necessary for the website.
• Name Resolution: Browsers query the domain name to locate the host server, which then serves the content.
• Accessibility: Hosting ensures that websites are globally accessible via the World Wide Web.
• Hosting Types: Various hosting options exist, including shared, VPS, dedicated, and cloud hosting.
• Maintenance: Hosting providers manage server uptime, security, and backups.
• Domain vs Hosting: Domain hosts provide the name, web hosts provide the server and storage for the content.
• Website Deployment: After acquiring hosting, domain settings are configured to point to the host provider to launch the site online.

Web hosting allows websites to be accessible worldwide, providing infrastructure, storage, and connectivity to reach a global audience effectively. It ensures reliability, performance, and scalability for websites of all sizes.`
 },
 { 
  title: "CCTV Installation & Maintenance",
  icon: <VideocamIcon sx={{ fontSize: 35 }} />,
  desc: "CCTV Installation & Maintenance involves setting up advanced surveillance systems to monitor, record, and secure your premises while ensuring continuous system performance through regular servicing and support.",
  details: `Our CCTV Installation & Maintenance services include system design, camera installation, network configuration, remote monitoring setup, and routine maintenance tailored to your security requirements.

Key CCTV solutions we implement:
• Site Survey & Planning: Identifying optimal camera placement for maximum coverage.
• Camera Installation: Setup of indoor and outdoor surveillance cameras.
• DVR/NVR Configuration: Secure recording and storage system setup.
• Remote Access Setup: Live monitoring through mobile and desktop devices.
• Cabling & Connectivity: Structured wiring for stable signal transmission.
• System Testing: Ensuring proper functionality and recording quality.
• Regular Maintenance: Periodic checks and preventive servicing.
• Troubleshooting Support: Quick resolution of technical issues and system faults.`
},
  {
    title: "Annual Maintenance Contract",
    icon: <BuildIcon sx={{ fontSize: 35 }} />,
    desc: "Annual Maintenance Contract provides wide-ranging IT Hardware support for Servers, Storage Devices & Networking Devices. Maximum uptime is particularly the most critical necessity for most of the customers and the same is attained through, Quick resolution of interruptions and proactive maintenance.",
    details: `Our Annual Maintenance Contract (AMC) ensures maximum uptime and smooth operation of IT infrastructure by providing comprehensive technical support for servers, storage devices, and networking equipment.

Key benefits and services under AMC:
• Quick Issue Resolution: Ensures technical problems are solved promptly to keep business operations running smoothly.
• Proactive Maintenance: Regular checks and servicing prevent unexpected breakdowns.
• Spare Parts Accessibility: Ready availability of required components to minimize downtime.
• Technical Expertise: Skilled personnel handle installation, repair, and troubleshooting efficiently.
• Synchronization & Support: Coordinated support across multiple devices and products.
• Quality Systems: Advanced quality processes guarantee reliability and stability of IT infrastructure.
• 24/7 Support: Around-the-clock assistance for fixing, tuning, debugging, and recovery.
• Upgrades & Assembly: Keeping systems updated and optimized for performance.
• Customer Satisfaction: AMC services foster long-term relationships and referral business through consistent support.

Our AMC services empower businesses to safeguard investments, remain productive, and promote growth by ensuring all technical issues are addressed promptly and effectively. Clients also benefit from the ability to log support cases anytime and access a comprehensive knowledge base for self-help and troubleshooting.`
},
 {
  title: "IT Infrastructure and Network Deployment",
  icon: <HubIcon sx={{ fontSize: 35 }} />,
  desc: "Our IT Infrastructure and Network Deployment services provide end-to-end support for servers, storage, and networking devices, ensuring scalable, reliable, and high-performing IT systems.",
  details: `Our IT Infrastructure and Network Deployment services help businesses build robust and efficient IT environments that support growth, security, and performance.

Key aspects of our services:
• Structured Cabling: Professional installation of cables for efficient network communication.
• Server Installation & Configuration: Setting up servers for optimal performance and security.
• Firewall & Security Configuration: Implementing firewalls, VPNs, and security measures to protect networks.
• Network Topology Design: Designing scalable, efficient network layouts to suit business needs.
• Switch & Router Setup: Configuring network devices for reliability and performance.
• Cloud & On-Premise Solutions: Deploying infrastructure that meets modern business requirements.
• Monitoring & Maintenance: Continuous monitoring to ensure uptime, performance, and quick issue resolution.
• Scalability Planning: Preparing infrastructure for future growth and additional workloads.
• End-to-End Deployment: From initial planning to final implementation, ensuring smooth operations.

Our services ensure that businesses have a stable, secure, and high-performing IT environment, reducing downtime, improving productivity, and enabling seamless communication across all devices and locations.`
},
{ 
  title: "Biometric System",
  icon: <FingerprintIcon sx={{ fontSize: 35 }} />,
  desc: "Biometric Systems provide secure and reliable identity verification using fingerprint, facial recognition, or other biometric technologies to manage employee attendance and control access to restricted areas.",
  details: `Our Biometric System services include device installation, configuration, software integration, and ongoing support tailored to your organizational security and attendance management needs.

Key Biometric solutions we implement:
• Attendance Management: Accurate employee time tracking and reporting.
• Access Control: Restricting entry to authorized personnel only.
• Device Installation: Setup of fingerprint and facial recognition systems.
• Software Integration: Integration with HR and payroll systems.
• Data Security: Encrypted storage of biometric information.
• Network Connectivity: Integration with LAN or cloud-based systems.
• System Configuration: Customizable settings based on business policies.
• Maintenance Support: Regular servicing and troubleshooting assistance.`
},
{ 
  title: "Access Control",
  icon: <LockIcon sx={{ fontSize: 35 }} />,
  desc: "Access Control Systems help manage and restrict entry to authorized personnel by implementing secure authentication methods, ensuring enhanced safety and controlled movement within your premises.",
  details: `Our Access Control services include system design, device installation, configuration, and integration tailored to your organizational security requirements.

Key Access Control solutions we implement:
• Door Access Management: Controlled entry using card, PIN, or biometric authentication.
• RFID & Smart Card Systems: Secure identification for authorized personnel.
• Biometric Integration: Fingerprint or facial recognition-based access.
• Centralized Control: Manage multiple access points from a single system.
• Audit Trails: Monitor and track entry and exit logs.
• Remote Access Management: Control and monitor access from anywhere.
• Alarm Integration: Alerts for unauthorized access attempts.
• Maintenance Support: Regular servicing and system troubleshooting.`
}
];

export default function ServicesSection() {
    const serviceRefs = useRef([]);
  const [open, setOpen] = useState(false);
  const [selectedService, setSelectedService] = useState(null);

useEffect(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.2 }
  );

  serviceRefs.current.forEach((el) => {
    if (el) observer.observe(el);
  });

  return () => observer.disconnect();
}, []);
 const handleOpen = (service) => {
    setSelectedService(service);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box
      id="services"
      sx={{
        py: 6,
        background: "linear-gradient(to bottom, #f8fafc, #ffffff)",
      }}
    >
      <Container maxWidth="lg">
        {/* Heading */}
        <Box textAlign="center" mb={6}>
          <Typography
  variant="h3"
  fontWeight="bold"
  color="primary"
  sx={{
    fontSize: {
      xs: "1.6rem",   // phones
      sm: "2rem",     // large phones
      md: "2.5rem",   // tablets
      lg: "3rem"      // desktop
    },
    lineHeight: 1.3
  }}
>
  Our <span style={{ color: "#F4B400" }}>Core Services</span>
</Typography>
  

          <Typography
            color="text.secondary"
            maxWidth="650px"
            mx="auto"
            mt={2}
          >
            Delivering structured, scalable and performance-driven IT solutions.
          </Typography>
        </Box>

        {/* Services */}
        {services.map((service, index) => {
          const isLeft = index % 2 === 0;

          return (
           <Box
  key={index}
  ref={(el) => (serviceRefs.current[index] = el)}
  className={`service-card ${isLeft ? "left" : "right"}`}
  sx={{
    display: "flex",
    justifyContent: isLeft ? "flex-start" : "flex-end",
    mb: 2,
  }}
>

  <Box
    sx={{
      maxWidth: "900px",
      width: "100%",
      p: 2,
      borderRadius: 4,
      backgroundColor: "#ffffff",
      border: "1px solid #e8edf3",
      boxShadow: "0 15px 40px rgba(0,0,0,0.04)",

     /* Hover effect */
      transition: "transform 0.35s ease, box-shadow 0.35s ease",
      "&:hover": {
        transform: "translateY(-10px)",
        boxShadow: "0 25px 60px rgba(0,0,0,0.08)",
      },
    }}
  >

                {/* Icon + Title Row */}
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 2,
                    mb: 3,
                  }}
                >
                  <Box
                    sx={{
                      width: 55,
                      height: 55,
                      borderRadius: 2,
                      backgroundColor: "#2E3A5C",
                      color: "#fff",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      transition: "all 0.3s ease",
                      "&:hover": {
                        backgroundColor: "#F4B400",
                        color: "#2E3A5C",
                      },
                    }}
                  >
                    {service.icon}
                  </Box>

                  <Typography variant="h5" fontWeight="bold">
                    {service.title}
                  </Typography>
                </Box>

                {/* Description */}
                <Typography
                  variant="body1"
                  color="text.secondary"
                  sx={{ lineHeight: 1.9 ,}}
                >
                  {service.desc}
                </Typography>
                  <Box mt={3} textAlign="right">
                  <Button
                    variant="outlined"
                    size="small"
                    onClick={() => handleOpen(service)}
                    sx={{
                      textTransform: "none",
                      fontWeight: 600,
                      borderRadius: 2,
                      px: 3,
                    }}
                  >
                    View Details
                  </Button>
                </Box>
                
              </Box>
              
            </Box>
          );
        })}
      </Container>

      {/* Modal */}
      <Dialog
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
        maxWidth="md"
        fullWidth
      >
        {selectedService && (
          <>
            <DialogTitle sx={{ fontWeight: "bold" }}>
              {selectedService.title}
            </DialogTitle>

            <DialogContent dividers>
  {selectedService.details.split('\n').map((line, idx) =>
    line.startsWith('•') ? (
      <li key={idx}>{line.substring(1).trim()}</li>
    ) : (
      <Typography
        key={idx}
        sx={{ lineHeight: 1.9, mb: 1 }}
      >
        {line}
      </Typography>
    )
  )}
</DialogContent>


            <DialogActions>
              <Button
                onClick={handleClose}
                variant="contained"
                sx={{ textTransform: "none" }}
              >
                Close
              </Button>
            </DialogActions>
          </>
        )}
      </Dialog>

      {/* Animation */}
    <style>
  {`
    .service-card {
      opacity: 0;
      transform: translateX(0);
      transition: all 0.9s cubic-bezier(0.22, 1, 0.36, 1);
    }

    .service-card.left {
      transform: translateX(-120px);
    }

    .service-card.right {
      transform: translateX(120px);
    }

    .service-card.show {
      opacity: 1;
      transform: translateX(0);
    }
  `}
</style>


    </Box>
  );
}
