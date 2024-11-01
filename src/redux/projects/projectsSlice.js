import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchProjects = createAsyncThunk('projects/fetchProjects', async () => {
    const response = await fetch(`https://api.github.com/users/thedevpiyush/repos`);
    const data = await response.json();
    console.log(data)
    return data.filter(repo => !repo.private && !repo.disabled);
});

const initialState = {
    items: [],
    status: 'idle',
    error: null
};

export const projectsSlice = createSlice({
    name: 'projects',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchProjects.pending, (state) => {
                state.status = 'loading';
                state.error = null;
            })
            .addCase(fetchProjects.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.items = action.payload;
            })
            .addCase(fetchProjects.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            });
    },
});

// Export the async action to use in the component
export default projectsSlice.reducer;
