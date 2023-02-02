import React from 'react';
import Layout from '../components/Layout';
import { Box, Flex, Text } from '@chakra-ui/layout';
import CardQuestion from '../components/CardQuestion';
import { ButtonGroup } from '@chakra-ui/button';
import ButtonQuestion from '../components/ButtonQuestion';
import { useNavigate } from 'react-router';
import { useDispatch } from 'react-redux';
import { destroyQuests } from '../features/questionSlice';

const Complete = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const backToHome = () => {
        dispatch(destroyQuests());
        navigate('/');
    }

    const backToSurvey = () => {
        dispatch(destroyQuests());
        navigate('/survey');
    }

    return (
        <Layout>
            <Box
                my={'20'}
            >
                <CardQuestion
                    quest={'Survey Complete'}
                    textAlign={'center'}
                    fontSize={{ base:'35px',md:'40px',lg:'70px' }}
                    mb={{ base:'0',lg:'20' }}
                    children={
                        <Box
                            textAlign={'center'}
                        >
                            <Text
                                fontSize={{ base:'22px',md:'26px',lg:'30px' }}
                                mb={'4'}
                            >
                                Thanks for your Answer 😁
                            </Text>
                            <Text
                                fontSize={{ base:'14px',md:'20px' }}
                                mb={'20'}
                            >
                                Your answer will help us improve our quality again. Hopefully, your can good experience 😇
                            </Text>
                            <Flex
                                justify={'center'}
                                mb={'20'}
                                color={'white'}
                                gap={{ base:'5',md:'5' }}
                                flexDirection={{ base:'column', md:'row' }}
                            >
                                <ButtonQuestion
                                    bg={'btn.primary'}
                                    _hover={{ bg: 'btn.secondary' }}
                                    name={'Back to Home'}
                                    width={{ base:'full',md:'auto' }}
                                    onClick={backToHome}
                                    />
                                <ButtonQuestion
                                    width={{ base:'full',md:'auto' }}
                                    border={'2px'}
                                    borderColor={'btn.primary'}
                                    color={'btn.primary'}
                                    fontWeight={'700'}
                                    _hover={{ bg:'btn.primary', color:'white' }}
                                    name={'Survey Again'}
                                    onClick={backToSurvey}
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

export default Complete;
