// apiService.js
import instance from "../axios/instance";

export const addUserToDatabase = async (userData) => {
  try {
    const response = await instance.post(`/user`, userData);
    return response.data;
  } catch (error) {
    throw error;
  }
};
