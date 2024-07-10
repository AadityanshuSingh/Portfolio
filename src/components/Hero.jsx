import {
  Box,
  Button,
  Card,
  Grid,
  GridItem,
  HStack,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import img from "../assets/space.jpg";
import React from "react";
import Spaceship from "./canvas/Spaceship";
import { motion } from "framer-motion";

const Hero = () => {
  const MotionGridItem = motion(GridItem);
  return (
    <Box
      position="relative"
      height="100vh"
      width="100%"
      //   overflow="auto"
      //   css={{
      //     "&::-webkit-scrollbar": {
      //       width: "0px",
      //       color: "purple",
      //     },
      //   }}
    >
      <Image
        position="absolute"
        top={0}
        left={0}
        width="100%"
        height="100vh"
        src={img}
        transform={"scaleX(-1)"}
      />

      <Box
        position="relative"
        zIndex={1}
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="100%"
        width="100%"
        color="white"
        textAlign="center"
      >
        <Grid
          templateAreas={{ base: '"a" "b"', md: '"a b"' }}
          gap={2}
          width="100%"
          height="100%"
          alignItems={"center"}
        >
          <MotionGridItem
            area="a"
            initial={{ opacity: 0, x: 0 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 2 }}
          >
            <Card
              p={5}
              w={"80%"}
              mx={"auto"}
              bgColor={"rgba(255, 255, 255, 0.1)"}
              backdropFilter="blur(2px)"
              border={"1px solid rgba(255, 255, 255, 0.5)"}
              borderRadius="10px"
              boxShadow="0 4px 30px rgba(0, 0, 0, 0.5)"
              justifyContent="center"
              alignItems="center"
            >
              <HStack>
                <Text
                  fontFamily={"'Montserrat', sans-serif"}
                  fontSize={{ sm: "20px", md: "30px", lg: "40px" }}
                  fontWeight="500"
                  color={"gray.300"}
                >
                  Hi, I'm
                </Text>
                <Text
                  fontSize={{ base: "30px", md: "30px", lg: "40px" }}
                  fontWeight={"700"}
                  fontFamily={"'Montserrat', sans-serif"}
                  bgGradient={"linear(to-r, purple.600, blue.400)"}
                  bgClip="text"
                >
                  {" "}
                  Aadityanshu
                </Text>
              </HStack>
              <Text fontSize={"18px"} color={"gray.200"}>
                I am a Full Stack Developer. Check out my projects below.
              </Text>
            </Card>
          </MotionGridItem>
          <MotionGridItem
            area="b"
            display="flex"
            justifyContent="center"
            alignItems="center"
            height={{ base: "200px", sm: "100px", md: "500px" }}
            w={"100%"}
            // initial={{ opacity: 0, x: 50 }}
            // animate={{ opacity: 1, x: 0 }}
            // transition={{ duration: 1 }}
          >
            <Spaceship />
          </MotionGridItem>
        </Grid>
      </Box>
    </Box>
  );
};

export default Hero;
