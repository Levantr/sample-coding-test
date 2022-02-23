import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

export const cardsSlice = createSlice({
  name: 'cards',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    // Use the PayloadAction type to declare the contents of `action.payload`
    add: (state, action) => {
      state.unshift(action.payload);
    },
  },
});

export const { add } = cardsSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.cards)`
export const selectCards = (state) => state.cards;

export default cardsSlice.reducer;
