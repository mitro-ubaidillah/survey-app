import React from 'react';
import Layout from '../components/Layout';
import { Box, Text } from '@chakra-ui/layout';
import CardQuestion from '../components/CardQuestion';

const Complete = () => {
    return (
        <Layout>
            <Box
                my={'20'}
            >
                <CardQuestion
                    quest={'Survey Complete'}
                    textAlign={'center'}
                    children={
                        <Text
                            fontSize={'30px'}
                            textAlign={'center'}
                        >
                            Thanks for your Answer 😁
                        </Text>
                    }
                />
            </Box>
        </Layout>
    );
}

export default Complete;
