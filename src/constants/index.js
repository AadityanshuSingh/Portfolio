import react from "../assets/react.webp";
import backend from "../assets/backend.png";
import cpp from "../assets/c++.png";
import pathfinder from "../assets/pathfinder.png";
import sociosync from "../assets/sociosync.png";
import logo from "../assets/logo.png";

const services = [
  {
    index: 1,
    title: "Frontend Developer",
    icon: react,
  },
  {
    index: 2,
    title: "Backend Developer",
    icon: backend,
  },
  {
    index: 3,
    title: "C++ Programmer",
    icon: cpp,
  },
];

const projects = [
  {
    title: "Socio Sync",
    icon: sociosync,
    iconBg: "#E6DEDD",
    date: "Jan 2024 - June 2024",
    points: [
      "Developed Socio Sync, a full stack MERN-based web application, providing users with a secure social media platform and implemented JWT authentication to ensure a safe user environment.",
      "Integrated real-time chatting with Socket.io and managed media uploads via Cloudinary, allowing users to share photos, videos, and audio. Enhanced user engagement with features like emoji support and friend requests.",
      "Utilized Redux Toolkit for efficient state managementand designed the user interface with Chakra UI.",
    ],
  },
  {
    title: "PathFinder",
    icon: pathfinder,
    iconBg: "#E6DEDD",
    date: "June 2024",
    points: [
      "Developed PathFinder, a React-based application that visualizes various pathfinding algorithms, including Dijkstra's Algorithm, A* Algorithm, BFS, and DFS, aiding users in understanding algorithm behavior.",
      "Implemented interactive grid features allowing users to generate and editwalls and weights and create random mazes using Recursive Division, ensuring all mazes are solvable.",
      "Designed a responsive UI and implemented interactive options to create random weighted mazes and adjust their weight density, thus enhancing the user experience and engagement.",
    ],
  },
  {
    title: "3D Portfolio",
    icon: logo,
    iconBg: "#E6DEDD",
    date: "July 2024",
    points: [
      "Developed a mordern 3D Portfolio using React Three Fiber and Three.js, providing users with an immersive experience.",
      "Integrated animations and transitions to enhance user experience and engagement.",
    ],
  },
];

export { services, projects };
