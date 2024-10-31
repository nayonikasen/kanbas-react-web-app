import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Course {
  _id: string;
  name: string;
  number: string;
  startDate: string;
  endDate: string;
  image?: string;
  description?: string;
}

interface CoursesState {
  courses: Course[];
}

const initialState: CoursesState = {
  courses: [],
};

const coursesSlice = createSlice({
  name: "courses",
  initialState,
  reducers: {
    setCourses: (state, action: PayloadAction<Course[]>) => {
      state.courses = action.payload;
    },
    addCourse: (state, action: PayloadAction<Course>) => {
      state.courses.push(action.payload);
    },
    updateCourse: (state, action: PayloadAction<Course>) => {
      const index = state.courses.findIndex(course => course._id === action.payload._id);
      if (index !== -1) {
        state.courses[index] = action.payload;
      }
    },
    deleteCourse: (state, {payload: courseId}) => {
      state.courses = state.courses.filter(course => course._id !== courseId);
    },
  },
});

export const { setCourses, addCourse, updateCourse, deleteCourse } = coursesSlice.actions;
export default coursesSlice.reducer;