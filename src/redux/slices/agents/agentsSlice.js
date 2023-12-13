import { USERS_DATA } from '@/app/constants/agents';
import { createSlice } from '@reduxjs/toolkit';

const agentData = USERS_DATA;
const agents = {
  agentData,
};

const initialState = { agents };

// function generateUniqueId(agents) {
//   let newId = (agents.length + 1).toString();
//   while (agents.some((agent) => agent.id === newId)) {
//     newId = (parseInt(newId, 10) + 1).toString();
//   }
//   return newId;
// }

const agentsSlice = createSlice({
  name: 'agents',
  initialState,
  reducers: {},
});

export default agentsSlice.reducer;
