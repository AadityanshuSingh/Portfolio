import {
  Box,
  Card,
  CardBody,
  CardHeader,
  Center,
  Grid,
  GridItem,
  Image,
  Text,
} from "@chakra-ui/react";
import { Tilt } from "react-tilt";
import { services } from "../constants/index";
import { inView, motion, useAnimation, useInView } from "framer-motion";
import { useRef } from "react";

const ServiceCard = ({ index, title, icon }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  const animation = {
    hidden: {
      x: -100,
      y: 0,
      opacity: 0,
    },
    show: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        delay: index * 0.2,
        duration: 1,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "show" : "hidden"}
      whileInView="show"
      viewport={{ once: true }}
      variants={animation}
    >
      <GridItem
        key={index}
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Tilt style={{ height: 250, width: 250, margin: 0 }}>
          <Box h={"80%"} w={"80%"} m={0}>
            <Box
              options={{
                max: 45,
                scale: 1,
                speed: 450,
              }}
              borderRadius={"10px"}
              border={"1px solid"}
              borderTopColor={"#658d9d"}
              borderBottomColor={"#564770"}
              borderLeftColor={"#484b6a"}
              borderRightColor={"#585e78"}
              background={"#161031"}
              alignContent={"center"}
              justifyContent={"center"}
              h={"100%"}
              w={"100%"}
              mx={"auto"}
            >
              <Image
                mx={"auto"}
                p={0}
                boxSize={"50px"}
                src={icon}
                objectFit={"contain"}
              />
              <Box
                color={"gray.300"}
                fontSize={"xl"}
                fontWeight={"500"}
                textAlign={"center"}
                alignContent={"center"}
              >
                {title}
              </Box>
            </Box>
          </Box>
        </Tilt>
      </GridItem>
    </motion.div>
  );
};

const About = () => {
  return (
    <>
      <Card borderRadius={"0px"} bgColor={"#050817"} width={"100%"}>
        <CardHeader
          textAlign={"left"}
          fontSize={"3xl"}
          fontWeight={"400"}
          color={"gray.300"}
        >
          Overview
        </CardHeader>
        <CardBody>
          <Text color={"gray.400"} mb={10}>
            Hi, I am Aadityanshu Singh. Currently an undergraduate student at
            IIT BHU. I am a full-stack Web Developer. I have experience in
            developing web applications using React, Node.js, Express.js, and
            MongoDB. I have worked on various projects and have experience in
            working with teams. I am also familiar with Python and C++. I am
            always eager to learn new technologies. Besides this, I also like to
            take part in some competitive programming contests and solve DSA
            based problems.
          </Text>
          <Center>
            <Grid
              templateColumns={{
                base: "repeat(1, 1fr)",
                md: "repeat(2, 1fr)",
                lg: "repeat(3, 1fr)",
              }}
              gap={2}
              p={0}
              maxW={"1200px"}
              mx="auto"
            >
              {services.map((service, index) => (
                <ServiceCard
                  key={index}
                  index={index}
                  title={service.title}
                  icon={service.icon}
                />
              ))}
            </Grid>
          </Center>
        </CardBody>
      </Card>
    </>
  );
};

export default About;
