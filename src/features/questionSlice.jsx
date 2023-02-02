import { createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";

export const questionSlice = createSlice({
    name: 'quests',
    initialState: Cookies.get('quests') ? JSON.parse(Cookies.get('quests')) : [],
    reducers: {
        addQuests: (state, action) => {
            const newQuest = {
                id: action.payload.id,
                quest: action.payload.quest,
                answer: action.payload.answer
            };
            state.push(newQuest);
            Cookies.set('quests', JSON.stringify(state));
            Cookies.set('questNumber', newQuest.id);
            Cookies.set('currentAnswer', newQuest.answer);
        },
        destroyQuests: (state, action) => {
            state = [];
            Cookies.remove('quests');
            Cookies.remove('currentAnswer');
            Cookies.remove('currentNumber');
            Cookies.remove('questNumber');
            Cookies.remove('profile');
        },
        addName: (state, action) => {
            const newData = {
                name: action.payload.name,
                email: action.payload.email,
            }
            Cookies.set('profile', JSON.stringify(newData));
        },
    }
})

export const { addQuests, destroyQuests, addName } = questionSlice.actions;
export default questionSlice.reducer;