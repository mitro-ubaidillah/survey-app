import { Progress } from '@chakra-ui/progress';
import React from 'react';

const ProgressBar = ({color}) => {
    return (
        <Progress bg={color} size='xs' value={0} />
    );
}

export default ProgressBar;
