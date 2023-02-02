import { Button } from '@chakra-ui/button';
import React from 'react';

const ButtonSecondary = ({name, ...props}) => {
    return (
        <Button
            border={'2px'}
            borderColor={'btn.primary'}
            color={'btn.primary'}
            bg={'transparent'}
            fontWeight={'700'}
            _hover={{ bg: 'btn.primary', color: 'white' }}
            {...props}
        >
            {name}
        </Button>
    );
}

export default ButtonSecondary;
