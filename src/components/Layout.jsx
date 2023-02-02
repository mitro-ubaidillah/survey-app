import { Button } from '@chakra-ui/button';
import { Box, Stack, Text } from '@chakra-ui/layout';
import React from 'react';

const Layout = ({ children }) => {
    return (
        <Stack
            h={'100vh'}
            maxH={'100vh'}
            minH={'100vh'}
            bgGradient='linear(to-t,bg.secondary,  bg.primary)'
            w={'full'}
        >
            <Box
                mx={'auto'}
            >
                {children}
            </Box>
        </Stack>
    );
}

export default Layout;
