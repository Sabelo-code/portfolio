import { Flex, Box, Link } from "@chakra-ui/react";

export default function Navbar() {
  return (
    <Flex
      as="nav"
      bg="white"
      px={6}
      py={4}
      borderBottom="1px solid"
      borderColor="gray.200"
      justify="space-between"
      align="center"
      position="sticky"
      top="0"
    >
      <Box fontWeight="bold" fontSize="lg" color="blue.600">
        Portfolio
      </Box>
      <Flex>
        <Link href="/" ml={4} color="gray.700" _hover={{ color: "blue.600" }}>
          Home
        </Link>
        <Link href="/projects" ml={4} color="gray.700" _hover={{ color: "blue.600" }}>
          Projects
        </Link>
        <Link href="/about" ml={4} color="gray.700" _hover={{ color: "blue.600" }}>
          About
        </Link>
        <Link href="/contact" ml={4} color="gray.700" _hover={{ color: "blue.600" }}>
          Contact
        </Link>
      </Flex>
    </Flex>
  );
}


