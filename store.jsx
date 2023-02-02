import { configureStore } from "@reduxjs/toolkit";

import questionReducer from './src/features/questionSlice';

export default configureStore({
    reducer: {
        quests: questionReducer
    },
});