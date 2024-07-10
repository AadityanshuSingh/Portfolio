import {
  Box,
  Card,
  CardBody,
  CardHeader,
  Center,
  Image,
  List,
  ListItem,
  UnorderedList,
} from "@chakra-ui/react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css"; // Import the styles
import { projects } from "../constants";
import React from "react";

const ProjectCard = ({ data }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#1d1836",
        color: "#fff",
        marginTop: "20px",
      }}
      contentArrowStyle={{ borderRight: "7px solid  #232631" }}
      date={data.date}
      iconStyle={{ background: data.iconBg, color: "#fff" }}
      icon={
        <Center>
          <Image src={data.icon} borderRadius={"50%"} />
        </Center>
      }
    >
      <Box>
        <Card boxShadow={0} color="gray.300" bg="inherit">
          <CardHeader fontSize="3xl" boxShadow={0} mb={0} p={0}>
            {data.title}
          </CardHeader>
          <CardBody>
            <UnorderedList>
              {data.points.map((point, index) => (
                <ListItem key={`point-${index}`}>{point}</ListItem>
              ))}
            </UnorderedList>
          </CardBody>
        </Card>
      </Box>
    </VerticalTimelineElement>
  );
};

const Projects = () => {
  return (
    <Box h={"100%"}>
      <Card h={"100%"} bg="transparent">
        <CardHeader fontWeight="600" color="gray.300" fontSize="4xl">
          My Projects
        </CardHeader>
        <CardBody h={"100%"}>
          <VerticalTimeline animate={true}>
            {projects.map((project, index) => (
              <ProjectCard key={`project-${index}`} data={project} />
            ))}
          </VerticalTimeline>
        </CardBody>
      </Card>
    </Box>
  );
};

export default Projects;
