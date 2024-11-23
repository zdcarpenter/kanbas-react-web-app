import axios from "axios";
const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;
const ENROLL_API = `${REMOTE_SERVER}/api/enrollments`;

export const findEnrollmentsForUser = async (userId: string ) => {
    const { data } = await axios.get(`${ENROLL_API}/${userId}`);
    return data;
};

export const findEnrollments = async () => {
    const { data } = await axios.get(`${ENROLL_API}`);
    return data;
}

export const deleteEnrollment = async (userId: string, courseId: string) => {
    const response = await axios.delete(`${ENROLL_API}/${userId}/${courseId}`);
    return response.data;
}

export const addEnrollment = async (userId: string, courseId: string) => {
    const response = await axios.post(`${ENROLL_API}/${userId}/${courseId}`);
    return response.data;
}