import React, { useEffect } from 'react';
import Layout from '../components/Layout';
import { Box, Flex, Text } from '@chakra-ui/layout';
import CardQuestion from '../components/CardQuestion';
import ButtonQuestion from '../components/ButtonQuestion';
import { useNavigate } from 'react-router';

const ErrorPage = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const redirect = setTimeout(() => {
            navigate('/');
        }, 5000)
        return () => clearTimeout(redirect);
    },[]);

    return (
        <Layout>
            <Box
                my={'20'}
            >
                <CardQuestion
                    quest={'404'}
                    textAlign={'center'}
                    fontSize={{ base: '35px', md: '80px', lg: '100px' }}
                    mb={{ base: '0', lg: '20' }}
                    children={
                        <Box
                            textAlign={'center'}
                        >
                            <Text
                                fontSize={{ base: '22px', md: '35px', lg: '40px' }}
                                mb={'4'}
                            >
                                Page Not Found
                            </Text>
                            <Text
                                fontSize={{ base: '14px', md: '20px' }}
                                mb={'20'}
                            >
                                You will be redirect in Home Page
                            </Text>
                            <Flex
                                justify={'center'}
                                mb={'20'}
                                color={'white'}
                                gap={{ base: '5', md: '5' }}
                                flexDirection={{ base: 'column', md: 'row' }}
                            >
                                <ButtonQuestion
                                    bg={'btn.primary'}
                                    _hover={{ bg: 'btn.secondary' }}
                                    name={'Back to Home'}
                                    width={{ base: 'full', md: 'auto' }}
                                    onClick={()=>navigate('/')}
                                />
                            </Flex>
                            <Box>
                                <Text
                                    textAlign={'right'}
                                    fontSize={'10'}
                                >
                                    Design by Muchamad Mitro Ubaidillah
                                </Text>
                            </Box>
                        </Box>
                    }
                />
            </Box>
        </Layout>
    );
}

export default ErrorPage;
