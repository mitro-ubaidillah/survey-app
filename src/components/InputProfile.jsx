import { FormControl, FormLabel } from '@chakra-ui/form-control';
import { Input } from '@chakra-ui/input';
import { Box } from '@chakra-ui/layout';
import React from 'react';

const InputProfile = ({emailValue, nameValue, onHandleEmailChange, onHandleNameChange}) => {
    return (
        <Box p={'5'}>
            <FormControl>
                <FormLabel
                    color={'btn.primary'}
                >
                    Full Name
                </FormLabel>
                <Input type='text' placeholder='Fullname' borderColor={'btn.primary'} value={nameValue} onChange={onHandleNameChange} required/>
            </FormControl>
            <FormControl mt={'5'}>
                <FormLabel
                    color={'btn.primary'}
                >
                    Email address
                </FormLabel>
                <Input type='email' borderColor={'btn.primary'} placeholder='Email Address'value={emailValue} onChange={onHandleEmailChange} required/>
            </FormControl>
        </Box>
    );
}

export default InputProfile;
