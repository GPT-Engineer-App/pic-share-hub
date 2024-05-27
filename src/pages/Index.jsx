import { Box, Container, Flex, VStack, HStack, Text, Image, IconButton, Input, Button } from "@chakra-ui/react";
import { FaHome, FaUser, FaUpload } from "react-icons/fa";
import { useState } from "react";

const Index = () => {
  const [activePage, setActivePage] = useState("home");

  const renderContent = () => {
    switch (activePage) {
      case "home":
        return <Feed />;
      case "profile":
        return <Profile />;
      case "upload":
        return <Upload />;
      default:
        return <Feed />;
    }
  };

  return (
    <Container maxW="container.xl" p={0}>
      <Flex direction="column" height="100vh">
        <NavBar setActivePage={setActivePage} />
        <Box flex="1" overflowY="auto">
          {renderContent()}
        </Box>
      </Flex>
    </Container>
  );
};

const NavBar = ({ setActivePage }) => (
  <Flex as="nav" bg="blue.500" color="white" p={4} justifyContent="space-around">
    <IconButton aria-label="Home" icon={<FaHome />} onClick={() => setActivePage("home")} />
    <IconButton aria-label="Profile" icon={<FaUser />} onClick={() => setActivePage("profile")} />
    <IconButton aria-label="Upload" icon={<FaUpload />} onClick={() => setActivePage("upload")} />
  </Flex>
);

const Feed = () => (
  <VStack spacing={4} p={4}>
    <Text fontSize="2xl">Feed</Text>
    {/* Placeholder for photos */}
    <Image src="https://via.placeholder.com/300" alt="Sample Photo" />
    <Image src="https://via.placeholder.com/300" alt="Sample Photo" />
  </VStack>
);

const Profile = () => (
  <VStack spacing={4} p={4}>
    <Text fontSize="2xl">Profile</Text>
    {/* Placeholder for profile info and photos */}
    <Text>Username: user123</Text>
    <Image src="https://via.placeholder.com/300" alt="Sample Photo" />
  </VStack>
);

const Upload = () => (
  <VStack spacing={4} p={4}>
    <Text fontSize="2xl">Upload Photo</Text>
    <Input type="file" />
    <Button colorScheme="blue">Upload</Button>
  </VStack>
);

export default Index;