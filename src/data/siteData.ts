export const products = [
  {
    id: "automotive",
    number: "01",
    title: "Automotive Systems in a Table",
    short: "Bring real automotive electronic systems to the laboratory bench.",
    description: "A configurable automotive learning and diagnostics bench that can bring an engine control module, instrument cluster, infotainment system, wiring interfaces, and an OBD diagnostic port into a structured laboratory environment.",
    features: ["ECM integration", "Instrument cluster and infotainment", "OBD diagnostic interface", "Automotive protocol learning", "Diagnostic and troubleshooting exercises"],
    image: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&w=1200&q=85",
    tag: "AUTOMOTIVE ENGINEERING"
  },
  {
    id: "satellite",
    number: "02",
    title: "LEO Satellite Ground Station Lab",
    short: "Bring satellite communication concepts closer to the engineering classroom.",
    description: "A practical learning platform for LEO satellite ground-station concepts, antenna systems, radio communication, receiver integration, signal monitoring, and hands-on experiments.",
    features: ["Ground-station hardware integration", "Antenna and receiver experiments", "Satellite tracking concepts", "Signal reception and monitoring", "Experiment-oriented learning modules"],
    image: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&w=1200&q=85",
    tag: "AEROSPACE & COMMUNICATIONS"
  },
  {
    id: "hil",
    number: "03",
    title: "Custom Linux-Based HIL Systems",
    short: "Build, stimulate, monitor, and validate engineering systems in a controlled environment.",
    description: "Custom Hardware-in-the-Loop systems designed around project-specific requirements, Linux-based computing, hardware interfaces, embedded controllers, and automated test workflows.",
    features: ["Linux-based test-node integration", "Custom hardware interfaces", "Relay and digital I/O control", "Python automation dashboards", "Configurable test sequences"],
    image: "https://images.unsplash.com/photo-1581092921461-eab62e97a780?auto=format&fit=crop&w=1200&q=85",
    tag: "TEST & VALIDATION"
  }
];

export const services = [
  { title: "Embedded Systems & Product Development", description: "Embedded firmware, microcontrollers, communication interfaces, PCB design, and electronics integration.", icon: "cpu" },
  { title: "IoT & Industrial Automation", description: "Connected monitoring, sensor data collection, dashboards, energy meter and CNC monitoring concepts.", icon: "network" },
  { title: "Robotics & Drone Development", description: "Robotic arms, robotics prototypes, drone projects, motion control, and sensor integration.", icon: "bot" },
  { title: "Web Development", description: "Responsive business websites, full-stack applications, admin dashboards, APIs, and database-backed tools.", icon: "code" },
  { title: "Mobile Applications", description: "Android and iOS applications, IoT control apps, monitoring interfaces, and backend integration.", icon: "smartphone" },
  { title: "Custom Engineering Software", description: "Python tools, device-control interfaces, test dashboards, data logging, and engineering visualization.", icon: "terminal" }
];

export const courseGroups = [
  { title: "Embedded & Automotive", courses: ["Embedded Systems", "Automotive Protocols", "PCB Design", "Display Programming", "LabVIEW Programming"] },
  { title: "Programming & Software", courses: ["C Programming", "Python Programming", "Web Development", "Full-Stack Development", "Mobile Application Development"] },
  { title: "AI & Data", courses: ["Artificial Intelligence using Python or R", "Machine Learning", "Deep Learning"] },
  { title: "IoT & Hardware", courses: ["Internet of Things", "IoT Project Development", "Hardware Interfacing"] },
  { title: "Robotics & Design", courses: ["Drone Building", "Robotics Projects", "CATIA", "SolidWorks", "CREO", "AutoCAD", "Photoshop"] }
];

export const projects = [
  { title: "Embedded Systems Laboratory", category: "Laboratory Systems", description: "Laboratory setup experience documented in the company profile.", image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=1000&q=80" },
  { title: "Robotics Lab Setup", category: "Robotics", description: "Robotic arm and mobile robotics learning equipment.", image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=1000&q=80" },
  { title: "Drone Workshop", category: "Drone Workshops", description: "Hands-on drone assembly and technology workshop activities.", image: "https://images.unsplash.com/photo-1473968512647-3e447244af8f?auto=format&fit=crop&w=1000&q=80" },
  { title: "Programming Workshops", category: "Software & Training", description: "Practical programming and software development training.", image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1000&q=80" },
  { title: "Industrial Monitoring", category: "Industrial Solutions", description: "Industrial monitoring and electrical-system project imagery.", image: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=1000&q=80" }
];
