import { Container, Box, VStack, HStack, Text, Input, Button, Link, Image, Flex, Spacer, Divider } from "@chakra-ui/react";
import { FaGoogle, FaFacebook, FaEnvelope, FaLock } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" height="100vh" display="flex" flexDirection="row" alignItems="center" justifyContent="center" bg="#f7f9fc">
      <Box width="50%" p={10}>
        <VStack align="start" spacing={8}>
          <Image src="/logo.png" alt="Finotic Logo" boxSize="50px" />
          <Box>
            <Text fontSize="sm" color="gray.500">CURRENT BALANCE</Text>
            <Text fontSize="4xl" fontWeight="bold">$24,359</Text>
          </Box>
          <Box>
            <Image src="/chart.png" alt="Chart" boxSize="100px" />
          </Box>
          <Box p={5} border="1px dashed" borderColor="gray.300" borderRadius="md">
            <Text fontSize="xl" fontWeight="bold">New transaction</Text>
            <Text fontSize="sm" color="gray.500">or upload .xls file</Text>
          </Box>
          <Box>
            <Text fontSize="3xl" fontWeight="bold">Welcome back!</Text>
            <Text fontSize="md" color="gray.500">Start managing your finance faster and better</Text>
            <Text fontSize="md" color="gray.500">Start managing your finance faster and better</Text>
          </Box>
        </VStack>
      </Box>
      <Box width="50%" p={10} bg="white" borderRadius="md" boxShadow="md">
        <VStack spacing={4} align="stretch">
          <Text fontSize="2xl" fontWeight="bold">Welcome back!</Text>
          <Text fontSize="md" color="gray.500">Start managing your finance faster and better</Text>
          <Input placeholder="you@example.com" size="lg" leftIcon={<FaEnvelope />} />
          <Input placeholder="At least 8 characters" size="lg" leftIcon={<FaLock />} type="password" />
          <Link alignSelf="flex-end" color="blue.500">Forgot password?</Link>
          <Button colorScheme="blue" size="lg" width="100%">Login</Button>
          <HStack>
            <Divider />
            <Text>or</Text>
            <Divider />
          </HStack>
          <HStack spacing={4}>
            <Button leftIcon={<FaGoogle />} colorScheme="red" variant="outline" width="100%">Google</Button>
            <Button leftIcon={<FaFacebook />} colorScheme="blue" variant="outline" width="100%">Facebook</Button>
          </HStack>
          <Text alignSelf="center">Don't you have an account? <Link color="blue.500">Sign Up</Link></Text>
        </VStack>
      </Box>
    </Container>
  );
};

export default Index;