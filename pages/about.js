import {
  Box,
  Heading,
  Text,
  Stack,
  Flex,
  Image,
  Divider,
  Container,
} from "@chakra-ui/react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function About() {
  return (
    <>
      <Navbar />
      <Box
        bgGradient="linear(to-r, #3F00FF, #22C55E)" // Ultramarine → Green
        py={20}
        px={6}
        color="white"
      >
        <Container maxW="900px">
          {/* Profile Photo */}
          <Image
            borderRadius="full"
            boxSize="160px"
            src="Pimage.jpeg"
            alt="Sabelo Tshazi"
            mx="auto"
            mb={10}
            border="4px solid white"
            boxShadow="xl"
          />

          {/* Title + Bio */}
          <Heading
            as="h2"
            size="2xl"
            mb={6}
            textAlign="center"
            fontWeight="extrabold"
            letterSpacing="tight"
          >
            About Me
          </Heading>
          <Text
            fontSize="lg"
            mb={10}
            textAlign="center"
            maxW="700px"
            mx="auto"
            lineHeight="1.8"
          >
            I am an AI Developer passionate about building scalable AI applications and
            solving complex problems using modern technologies. My work blends creativity,
            data, and engineering to deliver impactful solutions.
          </Text>

          <Divider mb={10} borderColor="whiteAlpha.600" />

          {/* Education */}
          <Heading as="h3" size="lg" mb={4}>
            Education
          </Heading>
          <Text fontSize="md" mb={8}>
            B.Sc. in Computer Science & Mathematics — specialized in algorithms, systems,
            and applied AI.
          </Text>

          {/* Career Goals */}
          <Heading as="h3" size="lg" mb={4}>
            Career Goals
          </Heading>
          <Text fontSize="md" mb={8}>
            Focused on backend engineering, networking, AI, and MERN stack development.
            I aim to contribute to innovative projects that merge data, intelligence,
            and scalable systems.
          </Text>

          {/* Skills Overview */}
          <Heading as="h3" size="lg" mb={4}>
            Skills Overview
          </Heading>
          <Stack spacing={2} mb={10} fontSize="md">
            <Text><strong>Frontend:</strong> React, JavaScript, HTML, CSS, Next.js</Text>
            <Text><strong>Backend:</strong> Node.js, Express, Python</Text>
            <Text><strong>Databases:</strong> MongoDB, Firebase, Supabase</Text>
            <Text><strong>Tools:</strong> Git, Docker, VS Code, REST APIs</Text>
          </Stack>

          {/* Timeline */}
          <Heading as="h3" size="lg" mb={4}>
            Timeline
          </Heading>
          <Stack spacing={6} mb={10}>
            <Flex direction="column">
              <Text fontWeight="bold">2025 — Artificial Intelligence Developer</Text>
              <Text>
                Building scalable AI and MERN stack applications, developing robust APIs,
                and solving complex problems.
              </Text>
            </Flex>
            <Flex direction="column">
              <Text fontWeight="bold">2025 — B.Sc. Computer Science & Mathematics</Text>
              <Text>Graduated with focus on algorithms and systems.</Text>
            </Flex>
            <Flex direction="column">
              <Text fontWeight="bold">2024 — IT Support</Text>
              <Text>
                Provided technical support to end-users by troubleshooting hardware,
                software, and network issues.
              </Text>
            </Flex>
            <Flex direction="column">
              <Text fontWeight="bold">2023 — Internship</Text>
              <Text>Worked on backend services and databases.</Text>
            </Flex>
          </Stack>
        </Container>
      </Box>
      <Footer />
    </>
  );
}
