import React from 'react';
import Layout from '../components/Layout';
import { Box, Text } from '@chakra-ui/layout';
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
                    fontSize={'70px'}
                    mb={'20'}
                    children={
                        <Box
                            textAlign={'center'}
                        >
                            <Text
                                fontSize={'30px'}
                                mb={'4'}
                            >
                                Thanks for your Answer 😁
                            </Text>
                            <Text
                                fontSize={'20px'}
                                mb={'20'}
                            >
                                Your answer will help us improve our quality again. Hopefully, your can good experience 😇
                            </Text>
                            <ButtonGroup
                                mb={'20'}
                                color={'white'}
                                gap={'5'}
                            >
                                <ButtonQuestion
                                    bg={'btn.primary'}
                                    _hover={{ bg: 'btn.secondary' }}
                                    name={'Back to Home'}
                                    onClick={backToHome}
                                />
                                <ButtonQuestion
                                    border={'2px'}
                                    borderColor={'btn.primary'}
                                    color={'btn.primary'}
                                    fontWeight={'700'}
                                    _hover={{ bg:'btn.primary', color:'white' }}
                                    name={'Survey Again'}
                                    onClick={backToSurvey}
                                />
                            </ButtonGroup>
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
