import { Box, Flex, Text } from '@chakra-ui/react';
import React from 'react';

const Jumbotron = () => {
    return (
        <Flex
            justify={'center'}
            gap={'10'}
            p={'14'}
            wrap={'wrap'}
        >
            <Box
                flexBasis={'40%'}
            >
                <Text
                    fontSize={'30px'}
                >
                    Online Survey Kunjungan Masjid Ar-rahman Kota Blitar
                </Text>
                <Text>Jangan lupa untuk mengisi surveymu, karena dengan survey tersebut membantu kami untuk meingkatkan pelayanan kami</Text>
            </Box>
            <Box
                flexBasis={'40%'}
            >
                Content 2
            </Box>
        </Flex>
    );
}

export default Jumbotron;
