import { Card, CardBody } from '@chakra-ui/card';
import { Stack, Text } from '@chakra-ui/layout';
import { Radio, RadioGroup } from '@chakra-ui/radio';
import React from 'react';

const CardQuestion = ({ quest, children, ...props }) => {
    return (
        <Card
            minWidth={{ base: '300px', sm: '450px', md: '650px', lg: '900px', xl: '1200px' }}
            maxWidth={{ base: '350px', sm: '550px', md: '750px', lg: '1000px', xl: '1300px' }}
            borderRadius={'2xl'}
            boxShadow={'md'}
            p={{ base:'4',md:'10' }}
        >
            <CardBody>
                <Text
                    fontSize={{ base:'24px',md:'35px',lg: '40px' }}
                    fontWeight={'700'}
                    color={'btn.primary'}
                    mb={'10'}
                    {...props}
                >
                    {quest}
                </Text>
                {children}
            </CardBody>
        </Card>
    );
}

export default CardQuestion;

