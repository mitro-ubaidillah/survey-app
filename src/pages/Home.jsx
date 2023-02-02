import { useDisclosure } from '@chakra-ui/react';
import React, { useState } from 'react';
import Jumbotron from '../components/Jumbotron';
import Layout from '../components/Layout';
import { useNavigate } from 'react-router';
import ModalBox from '../components/ModalBox';
import { useDispatch } from 'react-redux';
import { addName } from '../features/questionSlice';
import Cookies from 'js-cookie';

const Home = () => {
    const navigate = useNavigate();
    const { isOpen, onOpen, onClose } = useDisclosure();
    const currentProfile = Cookies.get('profile') && JSON.parse(Cookies.get('profile'));
    const [name, setName] = useState(currentProfile?.name || '');
    const [email, setEmail] = useState(currentProfile?.email || '');
    const dispatch = useDispatch();

    const sendData = () => {
        dispatch(addName({
            name: name,
            email: email,
        }))
        navigate('/survey')
    }
    return (
        <Layout>
            <Jumbotron
                onClickSurvey={onOpen}
            />
            <ModalBox
                isOpen={isOpen}
                onClose={onClose}
                title={'Input Your Name and Email'}
                nameValue={name}
                emailValue={email}
                onHandleEmailChange={(e)=>setEmail(e.target.value)}
                onHandleNameChange={(e)=>setName(e.target.value)}
                onHandleData={()=>sendData()}
            />
        </Layout>
    );
}

export default Home;
