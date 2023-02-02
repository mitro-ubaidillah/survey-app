import { Progress } from '@chakra-ui/progress';
import React from 'react';

const ProgressBar = ({color, timeSurvey}) => {
    return (
        <Progress bg={color} size='xs' value={timeSurvey} />
    );
}

export default ProgressBar;
