import { Box, Button, Flex, Img, Text } from '@chakra-ui/react';
import React from 'react';
import imgMasjid from '../assets/images/masjid.jpg';
import muslim from '../assets/images/muslim.png';

const Jumbotron = ({ navbar }) => {
    return (
        <Box
            bgImage={`url(${imgMasjid})`}
            backgroundSize={'cover'}
            backgroundPosition={'top'}
        >
            <Flex
                maxHeight={'100vh'}
                height={'100vh'}
                justify={'center'}
                align={'center'}
                px={'14'}
                wrap={'wrap'}
                backdropFilter='auto' backdropBlur='3px'
                bg={'#00000093'}
            >
                <Box
                    flexBasis={'100%'}
                >
                    {navbar}
                </Box>
                <Box
                    flexBasis={'50%'}
                    color={'white'}
                    pb={'20'}
                >
                    <Text
                        fontSize={'60px'}
                        fontWeight={'700'}
                        mb={'20px'}
                    >
                        Online Survey Kunjungan Masjid <br /> Ar-Rahman Kota Blitar
                    </Text>
                    <Text
                        lineHeight={'30px'}
                        align={'justify'}
                        mb={'30px'}
                        fontSize={'20px'}
                    >
                        Setelah mengunjungi masjid, jangan lupa untuk mengisi surveymu. Karena dengan survey tersebut membantu kami untuk meingkatkan pelayanan kami. Karena Kepuasan pengunjung adalah ibadahku
                    </Text>
                    <Button
                        color={'black'}
                        fontSize={'24px'}
                        px={'10'}
                        height={'60px'}
                        fontWeight={'700'}
                    >
                        Isi Survey Sekarang
                    </Button>
                </Box>
                <Box
                    flexBasis={'45%'}
                    mb={'10'}
                >
                    <Img
                        mx={'auto'}
                        src={muslim}
                        width={'80%'}
                    />
                    <Box
                        mx={'auto'}
                        bg={'white'}
                        width={'80%'}
                        height={'100px'}
                        borderRadius={'3xl'}
                    >
                    </Box>
                </Box>
            </Flex>
        </Box>
    );
}

export default Jumbotron;
