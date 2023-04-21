import axios from "axios";

const apiBaseUrl = 'https://private-anon-233be48b15-blissrecruitmentapi.apiary-mock.com';

const checkApiHealth = async () => {

  try {
    const response = await axios.get(`${apiBaseUrl}/health`)
    return response.status === 200;
  } catch {
    return false;
  }
};

const getQuestions = async (limit, offset, filter) => {
  try {
    const response = await axios.get(`${apiBaseUrl}/questions`, {
      params: {
        limit,
        offset,
        filter,
      }
    });
    return response.data;
  } catch (error){
    console.error("Error getting questions:", error);
    return [];
  }
};

const api = {
  checkApiHealth,
  getQuestions,
};

export default api;
