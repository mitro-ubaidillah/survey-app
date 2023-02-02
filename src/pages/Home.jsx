import { Box, Text } from '@chakra-ui/react';
import React from 'react';
import Jumbotron from '../components/Jumbotron';
import Navbar from '../components/Navbar';
import Layout from '../components/Layout';
import { useNavigate } from 'react-router';

const Home = () => {
    const navigate = useNavigate();
    return (
        <Layout>
            {/* <Navbar /> */}
            <Jumbotron 
                onClickSurvey={()=>navigate('/survey')}
            />
        </Layout>
    );
}

export default Home;
