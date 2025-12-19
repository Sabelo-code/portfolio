// pages/projects.js
import {
  Box,
  Heading,
  Text,
  Button,
  HStack,
  Container,
  Grid,
  Flex,
} from "@chakra-ui/react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Projects() {
  const projects = [
    {
      title: "AI Customer Service",
      description: "AI-powered assistant that automates responses and improves engagement.",
      tech: "NLP, Transformers, FastAPI, React",
      github: "https://github.com/yourusername/ai-customer-service",
      demo: "https://ai-customer-service-demo.vercel.app",
    },
    {
      title: "Bias Audit",
      description: "Audit datasets and ML models to detect and mitigate bias.",
      tech: "Python, scikit-learn, Pandas",
      github: "https://github.com/yourusername/bias-audit",
      demo: "https://bias-audit-demo.vercel.app",
    },
    {
      title: "ATS Resume Builder",
      description: "Resume builder optimized for ATS with keyword targeting.",
      tech: "Next.js, Chakra UI, Resume Parser API",
      github: "https://github.com/yourusername/ats-resume-builder",
      demo: "https://ats-resume-builder-demo.vercel.app",
    },
    {
      title: "Custom Content Generator",
      description: "Generates tailored blog posts and professional content using AI.",
      tech: "OpenAI API, Node.js, React",
      github: "https://github.com/yourusername/custom-content-generator",
      demo: "https://custom-content-generator-demo.vercel.app",
    },
    {
      title: "Education AI Chatbot",
      description: "No-code chatbot teaching AI fundamentals through interactive Q&A.",
      tech: "Dialogflow, GCP, Text & Image Responses",
      github: "https://github.com/yourusername/ems",
      demo: "https://ems-demo.vercel.app",
    },
    {
      title: "Sentimental Analysis",
      description: "Web app analyzing emotional tone of text with confidence scores.",
      tech: "Streamlit, Hugging Face API, Firebase",
      github: "https://github.com/yourusername/smart-varsity",
      demo: "https://sentiment-aq3mkbathyvjf5yuo5egaa.streamlit.app/",
    },
    {
      title: "AI-Powered Grape Scanner",
      description: "Prototype that scans grape images to detect quality.",
      tech: "Figma Prototype",
      github: "https://github.com/yourusername/data-dashboard",
      demo: "https://www.figma.com/make/r0pReRdMsAd0p9gSQ3wQXy/FreshScan",
    },
  ];

  return (
    <>
      <Navbar />
      <Box bgGradient="linear(to-r, #3F00FF, #22C55E)" py={20} px={6} color="white">
        <Container maxW="1200px" textAlign="center">
          <Heading as="h2" size="xl" mb={12} fontWeight="extrabold">
            Featured Projects
          </Heading>
          <Grid
            templateColumns={{ base: "1fr", md: "repeat(2, 1fr)", lg: "repeat(3, 1fr)" }}
            gap={8}
          >
            {projects.map((proj, i) => (
              <Flex
                key={i}
                direction="column"
                justify="space-between"
                borderWidth="1px"
                borderRadius="lg"
                bg="white"
                color="gray.800"
                shadow="md"
                p={6}
                transition="0.3s"
                _hover={{ transform: "translateY(-5px)", boxShadow: "xl" }}
              >
                <Box>
                  <Heading as="h3" size="md" mb={2} color="#22C55E">
                    {proj.title}
                  </Heading>
                  <Text fontSize="sm" color="gray.600" mb={3} noOfLines={2}>
                    {proj.description}
                  </Text>
                  <Text fontSize="xs" color="gray.500" mb={4}>
                    Tech: {proj.tech}
                  </Text>
                </Box>
                <HStack spacing={4} justify="flex-start">
                  <Button
                    as="a"
                    href={proj.github}
                    target="_blank"
                    size="sm"
                    bg="#3F00FF"
                    color="white"
                    _hover={{ bg: "#2a00cc" }}
                  >
                    GitHub
                  </Button>
                  <Button
                    as="a"
                    href={proj.demo}
                    target="_blank"
                    size="sm"
                    bg="#22C55E"
                    color="white"
                    _hover={{ bg: "#16a34a" }}
                  >
                    Demo
                  </Button>
                  <Button
                    as="a"
                    href={proj.demo}
                    target="_blank"
                    size="sm"
                    bg="black"
                    color="white"
                    _hover={{ bg: "gray.800" }}
                  >
                    Details
                  </Button>
                </HStack>
              </Flex>
            ))}
          </Grid>
        </Container>
      </Box>
      <Footer />
    </>
  );
}

