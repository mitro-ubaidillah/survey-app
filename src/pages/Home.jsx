import { Box, Text } from '@chakra-ui/react';
import React from 'react';
import Jumbotron from '../components/Jumbotron';
import Navbar from '../components/Navbar';
import imgMasjid from '../assets/images/masjid.jpg';

const Home = () => {
    return (
        <Box
            bgImage={`url(${imgMasjid})`}
            backgroundSize={'cover'}
            backgroundPosition={'top'}
            minH={'100vh'}
            maxH={'100vh'}
        >
            <Box
                backdropFilter='auto' backdropBlur='3px'
                bg={'#00000093'}
                minH={'100vh'}
                maxH={'100vh'}
            >
                <Navbar />
                <Jumbotron />
            </Box>
        </Box>
    );
}

export default Home;
