import { Box, Text } from '@chakra-ui/react';
import React from 'react';
import Jumbotron from '../components/Jumbotron';
import Navbar from '../components/Navbar';

const Home = () => {
    return (
        <Box>
            <Jumbotron 
                navbar={<Navbar />} 
            />
        </Box>
    );
}

export default Home;
