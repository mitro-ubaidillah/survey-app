import { Box, Text } from '@chakra-ui/react';
import React from 'react';
import Jumbotron from '../components/Jumbotron';

const Home = () => {
    return (
        <Box
            minHeight={'100vh'}
            minWidth={'100vw'}
            maxHeight={'100vh'}
            maxWidth={'100vw'}
        >
            <Jumbotron />
        </Box>
    );
}

export default Home;
