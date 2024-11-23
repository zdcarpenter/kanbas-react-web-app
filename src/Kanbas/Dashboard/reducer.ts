import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    enrollments: [],
};
const enrollmentsSlice = createSlice({
    name: "enrollments",
    initialState,
    reducers: {
        addEnrollment: (state, { payload: enrollment }) => {
            const newEnrollment = {
                _id: state.enrollments.length + 1,
                user: enrollment.user,
                course: enrollment.course,
            };
            state.enrollments = [...state.enrollments, newEnrollment] as any;
        },
        deleteEnrollment: (state, { payload: enrollment}) => {
            state.enrollments = state.enrollments.filter(
                (e: any) => e.course !== enrollment.course || e.user !== enrollment.user);
        },
        setEnrollments: (state, { payload: enrollments }) => {
            state.enrollments = enrollments;
        },
    },
});
export const { addEnrollment, deleteEnrollment, setEnrollments } = enrollmentsSlice.actions;
export default enrollmentsSlice.reducer;