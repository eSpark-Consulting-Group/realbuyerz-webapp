import { createSlice } from '@reduxjs/toolkit';

const projects = {};

const initialState = {projects};

function generateUniqueId(projects) {
  let newId = (projects.length + 1).toString();
  while (projects.some((project) => project.id === newId)) {
    newId = (parseInt(newId, 10) + 1).toString();
  }
  return newId;
}

const projectsSlice = createSlice({
  name: 'projects',
  initialState,
  reducers: {},
});

export default projectsSlice.reducer;
