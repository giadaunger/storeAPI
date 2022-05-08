import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    user: null,
    users: []
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUserInfo: (state, { payload }) => {
            state.user = payload;
        },
        setAllUser: (state, { payload }) => {
            state.users = payload;
        },
        resetUser: () => initialState
    },
});

export const { setUserInfo, reset, resetUser, setAllUser } = userSlice.actions;

export default userSlice.reducer;