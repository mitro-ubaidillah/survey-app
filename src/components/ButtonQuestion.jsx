import { Button } from '@chakra-ui/button';
import React from 'react';

const ButtonQuestion = ({ name, ...props }) => {
    return (
        <Button
            {...props}
        >
            {name}
        </Button>
    );
}

export default ButtonQuestion;
