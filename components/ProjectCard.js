import { Box, Heading, Text, Button, Stack } from "@chakra-ui/react";

export default function ProjectCard({ title, description, tech, github, demo, link }) {
  return (
    <Box borderWidth="1px" borderRadius="lg" p={6} shadow="sm" w="300px">
      <Heading as="h3" size="md" mb={2} color="dark">
        {title}
      </Heading>
      <Text color="#ffffffff" mb={4}>{description}</Text>
      <Text fontSize="sm" color="#ffffffff" mb={4}>
        Tech: {tech}
      </Text>
      <Stack direction="row" spacing={3}>
        {github && (
          <Button as="a" href={github} target="_blank" size="sm" colorScheme="gray">
            GitHub
          </Button>
        )}
        {demo && (
          <Button as="a" href={demo} target="_blank" size="sm" colorScheme="blue">
            Live Demo
          </Button>
        )}
        {link && (
          <Button as="a" href={link} size="sm" colorScheme="teal">
            Details
          </Button>
        )}
      </Stack>
    </Box>
  );
}
