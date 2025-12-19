import { Box, Text } from "@chakra-ui/react";

export default function Footer() {
  return (
    <Box as="footer" bg="gray.100" py={4} textAlign="center" mt={10}>
      <Text color="gray.600">© 2025 AI Developer Portfolio</Text>
    </Box>
  );
}
