import {
  Box,
  Heading,
  Text,
  HStack,
  IconButton,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Button,
} from "@chakra-ui/react";
import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useState } from "react";
import emailjs from "emailjs-com";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_joaarhv",     // replace with your EmailJS service ID
        "template_90pzmij",    // replace with your EmailJS template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        "JrxDdIL25TAKYtOwB"      // replace with your EmailJS public key
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Message sent successfully!");
          setFormData({ name: "", email: "", message: "" });
        },
        (error) => {
          console.log(error.text);
          alert("Oops! Something went wrong.");
        }
      );
  };

  return (
    <>
      <Navbar />
      <Box
        bgGradient="linear(to-r, #3F00FF, #22C55E)" // Ultramarine → Green
        py={20}
        px={6}
        textAlign="center"
        color="white"
      >
        <Heading as="h2" size="xl" mb={6}>
          Get in Touch
        </Heading>
        <Text fontSize="lg" color="whiteAlpha.800" mb={10} maxW="600px" mx="auto">
          Fill out the form below or connect with me directly.
        </Text>

        {/* Contact Form */}
        <Box
          as="form"
          onSubmit={handleSubmit}
          bg="white"
          color="black"
          p={6}
          borderRadius="md"
          maxW="500px"
          mx="auto"
          mb={10}
        >
          <FormControl mb={4}>
            <FormLabel>Name</FormLabel>
            <Input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your name"
              required
            />
          </FormControl>

          <FormControl mb={4}>
            <FormLabel>Email</FormLabel>
            <Input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your email"
              required
            />
          </FormControl>

          <FormControl mb={4}>
            <FormLabel>Message</FormLabel>
            <Textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="What would you like to engage about?"
              required
            />
          </FormControl>

          <Button type="submit" bg="#22C55E" color="white" _hover={{ bg: "#16a34a" }}>
            Send Message
          </Button>
        </Box>

        {/* Contact Icons */}
        <HStack spacing={8} justify="center">
          <IconButton
            as="a"
            href="mailto:sabeloshazi073@gmail.com"
            icon={<FaEnvelope />}
            aria-label="Email"
            bg="white"
            color="#3F00FF"
            size="lg"
            _hover={{ bg: "gray.100" }}
          />
          <IconButton
            as="a"
            href="https://linkedin.com/in/sabelo-tshazi"
            icon={<FaLinkedin />}
            aria-label="LinkedIn"
            bg="white"
            color="#22C55E"
            size="lg"
            _hover={{ bg: "gray.100" }}
          />
          <IconButton
            as="a"
            href="https://github.com/sabelo-tshazi"
            icon={<FaGithub />}
            aria-label="GitHub"
            bg="white"
            color="#3F00FF"
            size="lg"
            _hover={{ bg: "gray.100" }}
          />
        </HStack>
      </Box>
      <Footer />
    </>
  );
}
