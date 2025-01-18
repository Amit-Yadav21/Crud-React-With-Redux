import { createSlice } from '@reduxjs/toolkit';

const initialState = [
  { 
    institution: "Veer Bahadur Singh Purvanchal University Jaunpur U.P.",
    logo: "https://1000logos.net/wp-content/uploads/2022/11/IGNOU-Emblem.png",
    status: "Current",
    joiningDate: "June, 2019",
    endDate: "June, 2022",
    degree: "B.Sc",
    currentSemester: "6th Semester",
    mainSubject: "Mathematics",
  },
  {
    institution: "Central Board of Secondary Education",
    logo: "https://upload.wikimedia.org/wikipedia/en/thumb/9/95/CBSE_new_logo.svg/640px-CBSE_new_logo.svg.png",
    status: "Completed",
    joiningDate: "June, 2017",
    endDate: "June, 2019",
    degree: "Intermediate",
    grade: "Good",
    mainSubject: "Science",
  },
  // {
  //   institution: "Central Board of Secondary Education",
  //   logo: "https://upload.wikimedia.org/wikipedia/en/thumb/9/95/CBSE_new_logo.svg/640px-CBSE_new_logo.svg.png",
  //   status: "Completed",
  //   joiningDate: "June, 2017",
  //   endDate: "June, 2019",
  //   degree: "High School",
  //   grade: "Good",
  //   mainSubject: "Science",
  // },
  // {
  //   institution: "Central Board of Secondary Education",
  //   logo: "https://upload.wikimedia.org/wikipedia/en/thumb/9/95/CBSE_new_logo.svg/640px-CBSE_new_logo.svg.png",
  //   status: "Completed",
  //   joiningDate: "June, 2017",
  //   endDate: "June, 2019",
  //   degree: "High School",
  //   grade: "Good",
  //   mainSubject: "Science",
  // },
];

const curdSlice = createSlice({
  name: 'crud',
  initialState,
  reducers: {
    addData: (state, action) => {
      state.push(action.payload);
    },
    updateData: (state, action) => {
      const index = state.findIndex((item) => item.id === action.payload.id);
      state[index] = action.payload;
    },
    deleteData: (state, action) => {
      return state.filter((item) => item.id !== action.payload);
    },
  },
});

export const { addData, updateData, deleteData } = curdSlice.actions;
export default curdSlice.reducer;