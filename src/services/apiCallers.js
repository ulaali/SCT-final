// services/api.js
import axios from "axios";
import global from "../store/global";
import { useContext } from "react";

// const globalData = useContext(global);
const api = axios.create({
  baseURL: "https://67f4d5a8cbef97f40d2f953b.mockapi.io/web/api",
  headers: {
    "Content-Type": "application/json",
  },
});

// Response Interceptor for Error Handling
// api.interceptors.response.use(
//   (response) => {
//     // If the request is successful, just return the response
//     return response;
//   },
//   (error) => {
//     // If the request fails, handle the error here

//     let errorMessage = "An unexpected error occurred.";
//     if (error.response) {
//       globalData.setisError(true);
//       globalData.setError(errorMessage);
//       // Server responded with a status code other than 2xx
//       switch (error.response.status) {
//         case 400:
//           errorMessage = "Bad Request - Please check your request.";
//           break;
//         case 401:
//           errorMessage = "Unauthorized - Please log in again.";
//           // Optionally, log out the user and redirect to the login page
//           localStorage.removeItem("authToken");
//           window.location.href = "/login";
//           break;
//         case 404:
//           errorMessage = "Not Found - The requested resource was not found.";
//           break;
//         case 500:
//           errorMessage =
//             "Internal Server Error - Something went wrong on the server.";
//           break;
//         default:
//           errorMessage = "An error occurred. Please try again later.";
//           break;
//       }
//     } else if (error.request) {
//       // No response was received (network issues, timeout)
//       errorMessage = "Network error - Please check your internet connection.";
//     } else {
//       // Something else happened while setting up the request
//       errorMessage = error.message;
//     }

//     // Optionally show a global notification or toast with the error message
//     console.error(errorMessage);

//     // You can return a rejected promise to handle the error in specific components
//     return Promise.reject(errorMessage); // Reject with error message
//   }
// );

// GET request example
export const getData = async (endpoint, params = {}) => {
  try {
    const response = await api.get(endpoint, { params });
    return response.data;
  } catch (error) {
    console.error("Error fetching data: ", error);
    throw error;
  }
};

// POST request example
export const postData = async (endpoint, data) => {
  try {
    const response = await api.post(endpoint, data);
    return response.data;
  } catch (error) {
    console.error("Error posting data: ", error);
    throw error;
  }
};

// PUT request example
export const putData = async (endpoint, data) => {
  try {
    const response = await api.put(endpoint, data);
    return response.data;
  } catch (error) {
    console.error("Error updating data: ", error);
    throw error;
  }
};

// DELETE request example
export const deleteData = async (endpoint) => {
  try {
    const response = await api.delete(endpoint);
    return response.data;
  } catch (error) {
    console.error("Error deleting data: ", error);
    throw error;
  }
};

export default api;
