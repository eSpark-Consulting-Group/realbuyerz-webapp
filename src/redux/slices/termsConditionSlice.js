import { createSlice } from '@reduxjs/toolkit';

const terms = {};

const initialState = {};

function generateUniqueId(terms) {
    let newId = (terms.length + 1).toString();
    while (terms.some((term) => term.id === newId)) {
        newId = (parseInt(newId, 10) + 1).toString();
    }
    return newId;
}

const termsSlice = createSlice({
    name: 'terms',
    initialState,
    reducers: {},
});

export default termsSlice.reducer;
