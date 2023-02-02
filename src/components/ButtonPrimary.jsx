import { Button } from '@chakra-ui/button';
import React from 'react';

const ButtonPrimary = ({name, ...props}) => {
    return (
        <Button
            bg={'btn.primary'}
            _hover={{ bg: 'btn.secondary' }}
            mr={3}
            color={'white'}
            {...props}
        >
            {name}
        </Button>
    );
}

export default ButtonPrimary;
