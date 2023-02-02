import React from 'react';
import Layout from '../components/Layout';
import { Text } from '@chakra-ui/layout';
import { useSelector } from 'react-redux';

const Complete = () => {
    const quests = useSelector((state) => state.quests);
    console.log(quests);
    return (
        <Layout>
            <Text>Survey Complete</Text>
        </Layout>
    );
}

export default Complete;
