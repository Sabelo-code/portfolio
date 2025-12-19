import { useRouter } from "next/router";
import { Box, Heading, Text, Divider } from "@chakra-ui/react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function ProjectDetail() {
  const router = useRouter();
  const { id } = router.query;

  // Example project details (replace with real data or fetch from API)
  const projectDetails = {
    ems: {
      title: "EMS System",
      problem: "Companies struggle with managing HR and payroll efficiently.",
      solution: "Built a MERN-based EMS with authentication, reporting, and role-based access.",
      challenges: "Scaling database queries and ensuring secure authentication.",
      learned: "Improved skills in backend optimization and JWT security.",
      tech: "React, Node.js, MongoDB, Express",
    },
    "smart-varsity": {
      title: "Smart Varsity",
      problem: "Universities need a centralized system for student and course management.",
      solution: "Developed a portal with dashboards, analytics, and course registration.",
      challenges: "Handling large datasets and real-time updates.",
      learned: "Enhanced knowledge of Docker deployment and API design.",
      tech: "MERN Stack, Docker, REST APIs",
    },
    dashboard: {
      title: "Data Dashboard",
      problem: "Organizations need to visualize data for decision-making.",
      solution: "Created a React dashboard with Python APIs and Chart.js visualizations.",
      challenges: "Integrating multiple APIs and ensuring responsive charts.",
      learned: "Strengthened frontend integration with backend services.",
      tech: "React, Python, Chart.js",
    },
  };

  const project = projectDetails[id];

  if (!project) return null;

  return (
    <>
      <Navbar />
      <Box py={20} px={6} maxW="800px" mx="auto">
        <Heading as="h2" size="xl" mb={6} color="blue.600">
          {project.title}
        </Heading>
        <Divider mb={6} />

        <Heading as="h3" size="md" mb={2} color="blue.600">Problem Statement</Heading>
        <Text mb={6} color="gray.600">{project.problem}</Text>

        <Heading as="h3" size="md" mb={2} color="blue.600">Solution & Architecture</Heading>
        <Text mb={6} color="gray.600">{project.solution}</Text>

        <Heading as="h3" size="md" mb={2} color="blue.600">Challenges & Learnings</Heading>
        <Text mb={6} color="gray.600">{project.challenges}</Text>
        <Text mb={6} color="gray.600"><strong>What I learned:</strong> {project.learned}</Text>

        <Heading as="h3" size="md" mb={2} color="blue.600">Technologies Used</Heading>
        <Text mb={6} color="gray.600">{project.tech}</Text>

        {/* Screenshots / diagrams can be added here with <Image /> */}
      </Box>
      <Footer />
    </>
  );
}
