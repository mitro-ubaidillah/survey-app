import { Box, Button, Flex, Img, Text } from '@chakra-ui/react';
import React from 'react';
import ButtonQuestion from './ButtonQuestion';
import shopping from '../assets/images/shopping.png';

const Jumbotron = ({onClickSurvey}) => {
    return (
        <Flex
            justify={'center'}
            align={'center'}
            px={'14'}
            wrap={'wrap'}
            flexDirection={{ base: 'column', md: 'row', lg: 'row' }}
            mt={{ base: '10', md: '16' }}
        >
            <Box
                flexBasis={'50%'}
                color={'white'}
                pb={'20'}
            >
                <Text
                    fontSize={{ base: '30px', md: '35px', lg: '50px', xl: '60px' }}
                    fontWeight={'700'}
                    mb={'20px'}
                    textAlign={{ base: 'center', md: 'left' }}
                    color={'btn.primary'}
                    >
                    Online Survey Shopping Online <br /> Abah Store.com
                </Text>
                <Text
                    color={'btn.secondary'}
                    lineHeight={'40px'}
                    align={'justify'}
                    mb={'30px'}
                    fontSize={{ md: '14px', lg: '24px' }}
                    display={{ base: 'none', md: 'block' }}
                >
                    Thank you for visiting. Don't forget to fill out the survey. Because your survey helps us to improve the quality of our products 🥰
                </Text>
                <ButtonQuestion
                    name='Survey Now'
                    onClick={()=>onClickSurvey()}
                    borderRadius={'2xl'}
                    color={'white'}
                    fontWeight={'600'}
                    bg={'btn.primary'}
                    fontSize={{ base: '14px', lg: '24px' }}
                    px={'10'}
                    width={{ base: 'full', md: 'auto' }}
                    height={{ base: '40px', lg: '60px' }}
                    _hover={{ bg:'btn.secondary' }}
                />
            </Box>
            <Box
                flexBasis={'45%'}
                mb={{ base: '0', lg: '10' }}
            >
                <Img
                    mx={'auto'}
                    src={shopping}
                    width={{ base: 'auto', sm: '300px', md: '350px', lg: '80%' }}
                />
            </Box>
        </Flex>
    );
}

export default Jumbotron;
