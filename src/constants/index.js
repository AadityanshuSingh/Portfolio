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
      "Utilized MERN stack, incorporating RESTful APIs to perform CRUD operations and JWT for user authentication",
      "Integrated real-time chat functionality using Socket.IO , harnessing its low-latency Web-Socket based library",
      "Utilized WebSocket protocols and the concept of Socket.IO rooms to reduce database calls, improving efficiency",
      "Used Redux Toolkit for efficient state management, Cloudinary for media management and Chakra UI for styling",
    ],
  },
  {
    title: "PathFinder",
    icon: pathfinder,
    iconBg: "#E6DEDD",
    date: "June 2024",
    points: [
      "Created a React application to demonstrate the working and visualization of various graph based algorithms",
      "Used DOM manipulation with Redux Toolkit for state management and utilized timeout functions for visualization",
      "Implemented algorithms like BFS, DFS, Dijkstra and A Star in javascript and used chakraUI for styling",
      "Utilized Recursive Division to generate random solvable mazes for testing all algorithms",
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
