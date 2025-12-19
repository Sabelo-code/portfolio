// pages/index.js
import {
  Box,
  Heading,
  Text,
  Button,
  Stack,
  Image,
  HStack,
  IconButton,
  Tooltip,
  Flex,
  Container,
} from "@chakra-ui/react";
import { FaEnvelope, FaLinkedin, FaGithub, FaReact, FaNodeJs, FaPython } from "react-icons/fa";
import { SiMongodb, SiJavascript, SiTensorflow, SiGooglecolab } from "react-icons/si";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />

      {/* Hero */}
      <Box
        id="home"
        minH="100vh"
        color="white"
        bgGradient="linear(to-r, #3F00FF, #22C55E)"
        py={24}
      >
        <Container maxW="1000px" textAlign="center" px={6}>
          <Image
            src="/Pimage.jpeg"
            alt="Sabelo Tshazi"
            boxSize={{ base: "140px", md: "170px" }}
            borderRadius="full"
            mx="auto"
            mb={6}
            border="4px solid white"
            boxShadow="lg"
          />
          <Heading as="h1" size="2xl" mb={3} fontWeight="extrabold" letterSpacing="tight">
            Sabelo Tshazi — AI Developer
          </Heading>
          <Text fontSize="xl" color="whiteAlpha.900" mb={8} maxW="720px" mx="auto" lineHeight="1.8">
            I design intelligent systems and data-driven applications that feel effortless to use and powerful under the hood.
          </Text>
          <Stack direction={{ base: "column", sm: "row" }} spacing={4} justify="center">
            <Button
              as="a"
              href="#projects"
              bg="white"
              color="#070707ff"
              _hover={{ bg: "gray.100" }}
              size="lg"
            >
              View Projects
            </Button>
            <Button
              as="a"
              href="/Sabelo Tshazi CV .pdf"
              bg="blackAlpha.800"
              color="white"
              _hover={{ bg: "blackAlpha.900" }}
              size="lg"
            >
              Download CV
            </Button>
          </Stack>
        </Container>
      </Box>

      {/* About */}
      <Box id="about" bg="gray.50" py={20}>
        <Container maxW="1000px" px={6} textAlign="center">
          <Heading as="h2" size="xl" mb={6} color="#3F00FF">
            About me
          </Heading>
          <Text fontSize="lg" color="gray.700" mb={8} maxW="800px" mx="auto" lineHeight="1.9">
            I’m an AI and full-stack developer focused on building scalable, ethical, and user-centered solutions.
            From chatbots and recommendation systems to analytics dashboards and backend APIs, I bridge data and design
            to solve real problems with clarity and craft.
          </Text>
          <Button
            as="a"
            href="/about"
            bg="#22C55E"
            color="white"
            _hover={{ bg: "#16a34a" }}
            size="md"
          >
            View more
          </Button>
        </Container>
      </Box>

      {/* Skills (playful hover) */}
      <Box id="skills" bg="white" py={20}>
        <Container maxW="1000px" px={6} textAlign="center">
          <Heading as="h2" size="xl" mb={6} color="#22C55E">
            Skills
          </Heading>
          <Text color="gray.600" mb={8}>
            Hover the logos — they’re a little playful.
          </Text>

          <HStack spacing={10} justify="center" flexWrap="wrap">
            <Tooltip label="JavaScript" hasArrow>
              <Box transition="0.25s" _hover={{ transform: "scale(1.15)", boxShadow: "0 0 18px #F7DF1E" }}>
                <SiJavascript size="54" color="#F7DF1E" />
              </Box>
            </Tooltip>
            <Tooltip label="React" hasArrow>
              <Box transition="0.25s" _hover={{ transform: "scale(1.15)", boxShadow: "0 0 18px #61DBFB" }}>
                <FaReact size="54" color="#61DBFB" />
              </Box>
            </Tooltip>
            <Tooltip label="Node.js" hasArrow>
              <Box transition="0.25s" _hover={{ transform: "scale(1.15)", boxShadow: "0 0 18px #3C873A" }}>
                <FaNodeJs size="54" color="#3C873A" />
              </Box>
            </Tooltip>
            <Tooltip label="MongoDB" hasArrow>
              <Box transition="0.25s" _hover={{ transform: "scale(1.15)", boxShadow: "0 0 18px #4DB33D" }}>
                <SiMongodb size="54" color="#4DB33D" />
              </Box>
            </Tooltip>
            <Tooltip label="Python" hasArrow>
              <Box transition="0.25s" _hover={{ transform: "scale(1.15)", boxShadow: "0 0 18px #3776AB" }}>
                <FaPython size="54" color="#3776AB" />
              </Box>
            </Tooltip>
            <Tooltip label="TensorFlow" hasArrow>
              <Box transition="0.25s" _hover={{ transform: "scale(1.15)", boxShadow: "0 0 18px #FF6F00" }}>
                <SiTensorflow size="54" color="#FF6F00" />
              </Box>
            </Tooltip>
            <Tooltip label="Google Colab" hasArrow>
              <Box transition="0.25s" _hover={{ transform: "scale(1.15)", boxShadow: "0 0 18px #F9AB00" }}>
                <SiGooglecolab size="54" color="#F9AB00" />
              </Box>
            </Tooltip>
          </HStack>
        </Container>
      </Box>

      {/* Projects with images + deep links */}
     {/* Projects Section */}
{/* Projects Section */}
<Box id="projects" bg="gray.50" py={20}>
  <Container maxW="1200px" px={6} textAlign="center">
    <Heading as="h2" size="xl" mb={10} color="#3F00FF">
      Projects
    </Heading>

    <Flex justify="center" gap={8} wrap="nowrap">
      {/* Project 1 */}
      <Box
        borderWidth="1px"
        borderRadius="lg"
        overflow="hidden"
        w="350px"
        bg="white"
        shadow="md"
        textAlign="center"
        transition="0.3s"
        _hover={{ transform: "translateY(-5px)", boxShadow: "xl" }}
      >
        <Image
          src="/Scan.png"
          alt="Prototype Grape Scanner"
          w="100%"
          h="220px"
          objectFit="cover"
          transition="0.3s"
          _hover={{ transform: "scale(1.05)" }}
        />
        <Box p={4}>
          <Heading as="h3" size="md" color="#22C55E">
            Prototype Grape Scanner 
          </Heading>
          <Button
            as="a"
            href="/projects#ems-system"
            size="sm"
            bg="#3F00FF"
            color="white"
            _hover={{ bg: "#2a00cc" }}
            mt={3}
          >
            View More
          </Button>
        </Box>
      </Box>

      {/* Project 2 */}
      <Box
        borderWidth="1px"
        borderRadius="lg"
        overflow="hidden"
        w="350px"
        bg="white"
        shadow="md"
        textAlign="center"
        transition="0.3s"
        _hover={{ transform: "translateY(-5px)", boxShadow: "xl" }}
      >
        <Image
          src="/sentiment.png"
          alt="Sentimental Analysis"
          w="100%"
          h="220px"
          objectFit="cover"
          transition="0.3s"
          _hover={{ transform: "scale(1.05)" }}
        />
        <Box p={4}>
          <Heading as="h3" size="md" color="#22C55E">
            Sentimental Analysis
          </Heading>
          <Button
            as="a"
            href="/projects#sentimental-analysis"
            size="sm"
            bg="#3F00FF"
            color="white"
            _hover={{ bg: "#2a00cc" }}
            mt={3}
          >
            View More
          </Button>
        </Box>
      </Box>

      {/* Project 3 */}
      <Box
        borderWidth="1px"
        borderRadius="lg"
        overflow="hidden"
        w="350px"
        bg="white"
        shadow="md"
        textAlign="center"
        transition="0.3s"
        _hover={{ transform: "translateY(-5px)", boxShadow: "xl" }}
      >
        <Image
          src="/chatbot.png"
          alt="Data Dashboard"
          w="100%"
          h="220px"
          objectFit="cover"
          transition="0.3s"
          _hover={{ transform: "scale(1.05)" }}
        />
        <Box p={4}>
          <Heading as="h3" size="md" color="#22C55E">
            Dialogflow Chatbot
          </Heading>
          <Button
            as="a"
            href="/projects#data-dashboard"
            size="sm"
            bg="#3F00FF"
            color="white"
            _hover={{ bg: "#2a00cc" }}
            mt={3}
          >
            View More
          </Button>
        </Box>
      </Box>
    </Flex>
  </Container>
</Box>



      {/* Contact + Fast engagement */}
      <Box id="contact" bg="white" py={20}>
        <Container maxW="1000px" px={6} textAlign="center">
          <Heading as="h2" size="xl" mb={6} color="#22C55E">
            Contact
          </Heading>
          <Text fontSize="lg" color="gray.700" mb={6} maxW="720px" mx="auto" lineHeight="1.9">
            Let’s connect and build something meaningful. I respond quickly and directly.
          </Text>

          <HStack spacing={6} justify="center" mb={8}>
            <IconButton
              as="a"
              href="sabeloshazi073@gmail.com"
              icon={<FaEnvelope />}
              aria-label="Email"
              bg="white"
              color="#3F00FF"
              border="1px solid"
              borderColor="gray.200"
              _hover={{ bg: "gray.50" }}
            />
            <IconButton
              as="a"
              href="https://www.linkedin.com/in/sabelo-tshazi-a424a9312/"
              icon={<FaLinkedin />}
              aria-label="LinkedIn"
              bg="white"
              color="#22C55E"
              border="1px solid"
              borderColor="gray.200"
              _hover={{ bg: "gray.50" }}
            />
            <IconButton
              as="a"
              href="https://github.com/Sabelo-code"
              icon={<FaGithub />}
              aria-label="GitHub"
              bg="white"
              color="#3F00FF"
              border="1px solid"
              borderColor="gray.200"
              _hover={{ bg: "gray.50" }}
            />
          </HStack>

          <Stack direction={{ base: "column", sm: "row" }} spacing={4} justify="center">
            <Button as="a" href="/contact" bg="#3F00FF" color="white" _hover={{ bg: "#2a00cc" }} size="md">
              Fast engagement
            </Button>
            <Button as="a" href="#home" variant="outline" color="#3F00FF" borderColor="#3F00FF" _hover={{ bg: "gray.100" }} size="md">
              Back to top
            </Button>
          </Stack>
        </Container>
      </Box>

      <Footer />
    </>
  );
}


