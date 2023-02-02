import React, { useEffect, useState } from 'react';
import Layout from '../components/Layout';
import { Box, Flex, Grid, HStack, Stack, Text } from '@chakra-ui/layout';
import CardQuestion from '../components/CardQuestion';
import ProgressBar from '../components/ProgressBar';
import ButtonQuestion from '../components/ButtonQuestion';
import { questionData } from '../utils/Data';
import { Radio, RadioGroup, useRadioGroup } from '@chakra-ui/radio';
import Cookies from 'js-cookie';
import { useDispatch, useSelector } from 'react-redux';
import { addQuests } from '../features/questionSlice';
import { useNavigate } from 'react-router';

const Survey = () => {
    const [questNumber, setQuestNumber] = useState(1);
    const [chooseAnswer, setChooseAnswer] = useState();
    const [currentQuestNumber, setCurrentQuestNumber] = useState(parseInt(Cookies.get('questNumber')) + 1 || 1);
    const quests = useSelector((state) => state.quests);
    const currentAnswer = Cookies.get('currentAnswer')?.replace('20%', ' ');
    const dispatch = useDispatch();
    const navigate = useNavigate();
    let timeLimit = 5000;

    const lastQuestIndex = currentQuestNumber * questNumber;
    const firstQuestIndex = lastQuestIndex - questNumber;
    const currentQuest = questionData.slice(firstQuestIndex, lastQuestIndex);

    const saveAnswer = (value) => {
        setChooseAnswer(value);
        Cookies.set('currentAnswer', value)
    }

    const onCompleteQuestion = (quest) => {
        dispatch(addQuests(
            {
                id: quest.id,
                quest: quest.question,
                answer: chooseAnswer
            }
        ))
        clearTimeout(limitTime);
        navigate('/complete');
    }

    const onNextQuestion = (quest) => {
        dispatch(addQuests(
            {
                id: quest.id,
                quest: quest.question,
                answer: chooseAnswer
            }
        ))
        Cookies.set('currentAnswer', '');
        Cookies.set('questNumber', currentQuestNumber + 1);
        timeLimit = 5000;
        clearTimeout(limitTime);
        setCurrentQuestNumber(currentQuestNumber + 1)
    }
    
    const limitTime = (time) => {
        const currentData = currentQuest.filter(data => (data.id === currentQuestNumber));
        setTimeout(() => {
            if(currentQuestNumber == 10) {
                onCompleteQuestion(currentData[0]);
            }else{
                onNextQuestion(currentData[0]);
            }
        }, time);
    }
    
    console.log(quests)

    useEffect(() => {
        limitTime(timeLimit);
    }, [currentQuestNumber]);

    return (
        <Layout>
            <Grid
                my={'10'}
                templateColumns='repeat(10, 1fr)'
                gap={{ md: 2, lg: 6 }}
            >
                <ProgressBar color={currentQuestNumber > 1 ? 'btn.primary' : 'white' || currentQuestNumber == 1 ? 'btn.secondary' : 'white'} />
                <ProgressBar color={currentQuestNumber < 2 ? 'white' : '' || currentQuestNumber == 2 ? 'btn.secondary' : 'btn.primary'} />
                <ProgressBar color={currentQuestNumber < 3 ? 'white' : '' || currentQuestNumber == 2 ? 'btn.secondary' : 'btn.primary'} />
                <ProgressBar color={currentQuestNumber < 4 ? 'white' : '' || currentQuestNumber == 4 ? 'btn.secondary' : 'btn.primary'} />
                <ProgressBar color={currentQuestNumber < 5 ? 'white' : '' || currentQuestNumber == 5 ? 'btn.secondary' : 'btn.primary'} />
                <ProgressBar color={currentQuestNumber < 6 ? 'white' : '' || currentQuestNumber == 6 ? 'btn.secondary' : 'btn.primary'} />
                <ProgressBar color={currentQuestNumber < 7 ? 'white' : '' || currentQuestNumber == 7 ? 'btn.secondary' : 'btn.primary'} />
                <ProgressBar color={currentQuestNumber < 8 ? 'white' : '' || currentQuestNumber == 8 ? 'btn.secondary' : 'btn.primary'} />
                <ProgressBar color={currentQuestNumber < 9 ? 'white' : '' || currentQuestNumber == 9 ? 'btn.secondary' : 'btn.primary'} />
                <ProgressBar color={currentQuestNumber == 10 ? 'btn.secondary' : 'white'} />
            </Grid>
            <Box>
                {
                    currentQuest.map((data, index) => {
                        return (
                            <Box key={index}>
                                <CardQuestion
                                    quest={data.question}
                                    key={data.id}
                                    children={
                                        <RadioGroup
                                            defaultValue={currentAnswer}
                                        >
                                            <Stack
                                                direction='column'
                                                gap={'3'}
                                            >
                                                {
                                                    data.answers.map(item => (
                                                        <Radio
                                                            // {...getRadioProps({ value: item.answer })}
                                                            onChange={() => saveAnswer(item.answer)}
                                                            value={item.answer}
                                                            checked={currentAnswer == item.answer}
                                                            colorScheme={'purple'}
                                                            key={item.id}
                                                        >
                                                            {item.answer}
                                                        </Radio>
                                                    ))
                                                }
                                            </Stack>
                                        </RadioGroup>
                                    }
                                />
                                <ButtonQuestion
                                    key={data.id + 1}
                                    name={currentQuestNumber == 10 ? 'Complete' : 'Next'}
                                    borderRadius={'2xl'}
                                    color={'white'}
                                    fontWeight={'600'}
                                    bg={'btn.primary'}
                                    width={'full'}
                                    mt={'12'}
                                    height={'55px'}
                                    fontSize={'20px'}
                                    _hover={{ bg: 'btn.secondary' }}
                                    onClick={() => currentQuestNumber == 10 ? onCompleteQuestion(data) : onNextQuestion(data)}
                                />
                            </Box>
                        )
                    })
                }
            </Box>
        </Layout>
    );
}

export default Survey;
