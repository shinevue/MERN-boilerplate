import axios from "axios";

const nameOptions = {
  method: "GET",
  url: "./namesData.json",
};

export const getNameData = async () => {
  try {
    const response = await axios.request(nameOptions);
    return response;
  } catch (error) {
    throw error;
  }
};
