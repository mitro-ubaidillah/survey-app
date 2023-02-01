import { Box, Button, Flex, Img, Text } from '@chakra-ui/react';
import React from 'react';
import muslim from '../assets/images/muslim.png';

const Jumbotron = () => {
    return (
            <Flex
                justify={'center'}
                align={'center'}
                px={'14'}
                wrap={'wrap'}
                flexDirection={{ base:'column',md:'row',lg:'row' }}
                mt={{ base:'10',md:'16' }}
            >
                <Box
                    flexBasis={'50%'}
                    color={'white'}
                    pb={'20'}
                >
                    <Text
                        fontSize={{ base:'30px', md:'35px',lg:'50px', xl:'60px' }}
                        fontWeight={'700'}
                        mb={'20px'}
                        textAlign={{ base:'center', md:'left' }}
                    >
                        Online Survey Kunjungan Masjid <br /> Ar-Rahman Kota Blitar
                    </Text>
                    <Text
                        lineHeight={'30px'}
                        align={'justify'}
                        mb={'30px'}
                        fontSize={{ md:'14px',lg:'20px' }}
                        display={{ base:'none', md:'block' }}
                    >
                        Setelah mengunjungi masjid, jangan lupa untuk mengisi surveymu. Karena dengan survey tersebut membantu kami untuk meingkatkan pelayanan kami. Karena Kepuasan pengunjung adalah ibadahku
                    </Text>
                    <Button
                        color={'black'}
                        fontSize={{ base:'14px',lg:'24px' }}
                        px={'10'}
                        width={{ base:'full', md:'auto' }}
                        height={{ base:'40px',lg:'60px' }}
                        fontWeight={'700'}
                    >
                        Isi Survey Sekarang
                    </Button>
                </Box>
                <Box
                    flexBasis={'45%'}
                    mb={{ base:'0',lg:'10' }}
                >
                    <Img
                        mx={'auto'}
                        src={muslim}
                        width={{ base:'auto',sm:'300px',md:'350px',lg:'80%' }}
                    />
                    <Box
                        mx={'auto'}
                        bg={'white'}
                        width={'80%'}
                        height={'100px'}
                        borderRadius={'3xl'}
                        display={{ base:'none', md:'block' }}
                    >
                    </Box>
                </Box>
            </Flex>
    );
}

export default Jumbotron;
