import axios from "axios";
const axiosWithCredentials = axios.create({ withCredentials: true });
const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;
const ASSIGN_API = `${REMOTE_SERVER}/api/assignments`;

export const deleteAssignment = async (assignmentId: string) => {
    const response = await axiosWithCredentials.delete(`${ASSIGN_API}/${assignmentId}`);
    return response.data;
}

export const updateAssignment = async (assignment: any) => {
    const { data } = await axiosWithCredentials.put(`${ASSIGN_API}/${assignment._id}`, assignment);
    return data;
}

export const createAssignment = async (assignment: any) => {
    const response = await axiosWithCredentials.post(
      `${ASSIGN_API}`,
      assignment
    );
    return response.data;
  };

  export const findAssignment = async (assignmentId: string) => {
    const response = await axiosWithCredentials
        .get(`${ASSIGN_API}/${assignmentId}`);
    return response.data;
};