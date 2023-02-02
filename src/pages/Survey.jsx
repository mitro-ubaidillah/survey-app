import React, { useState } from 'react';
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

const Survey = () => {
    const [questNumber, setQuestNumber] = useState(1);
    const [chooseAnswer, setChooseAnswer] = useState();
    const dispatch = useDispatch();
    const [currentQuestNumber, setCurrentQuestNumber] = useState(parseInt(Cookies.get('questNumber'))+1 || 1);
    // const quests = useSelector((state) => state.quests);
    const currentAnswer = Cookies.get('currentAnswer')?.replace('20%', ' ');
    const currentNumber = Cookies.get('questNumber');

    const lastQuestIndex = currentQuestNumber * questNumber;
    const firstQuestIndex = lastQuestIndex - questNumber;
    const currentQuest = questionData.slice(firstQuestIndex, lastQuestIndex);

    const { getRadioProps, getRootProps } = useRadioGroup({
        name: "test",
        defaultValue: '',
        onChange: setChooseAnswer,
    });
    const group = getRootProps();

    const onCompleteQuestion = () => {
        // setCurrentQuestNumber(currentQuestNumber + 1)
    }

    const onNextQuestion = (quest) => {
        setCurrentQuestNumber(currentQuestNumber + 1)
        dispatch(addQuests(
            {
                id: quest.id,
                quest: quest.question,
                answer: chooseAnswer.toString()
            }
        ))
    }

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
                                            defaultValue={data.id == currentNumber ? currentAnswer : ''}
                                        >
                                            <Stack
                                                direction='column'
                                                gap={'3'}
                                                {...group}
                                            >
                                                {
                                                    data.answers.map(item => (
                                                        <Radio
                                                            {...getRadioProps({ value: item.answer })}
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
                                    key={data.id+1}
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
                                    onClick={() => currentQuestNumber == 10 ? onCompleteQuestion() : onNextQuestion(data)}
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
