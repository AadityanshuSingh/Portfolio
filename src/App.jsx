import { Box, Card } from "@chakra-ui/react";
import React from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import vid from "./assets/space-bg-video.mp4";

const App = () => {
  return (
    <>
      <Box>
        <Hero />
        <About />
        <Box h={"100vh"} w={"100%"}>
          <video
            src={vid}
            autoPlay
            loop
            muted
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
              zIndex: -1,
            }}
          />
          <Box position="relative" zIndex={1}>
            <Projects />
            <Contact />
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default App;
