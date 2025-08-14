import axios from "axios"
import type { UserType } from "../interfaces"

interface RegisterResponse {
    message: string;
}

export const registerUser = async (data: never): Promise<RegisterResponse> => { 
        const response = await axios.post<RegisterResponse>("/api/users/register", data);
        return response.data;
};

//export const registerUser = async (data: any): Promise<any> => {
  //const response = await axios.post("/api/users/register", data);
  //return response.data;
//};

interface LoginResponse {
    message: string;
    token: string;
}

export const loginUser = async (data: never): Promise<LoginResponse> => { 
        const response = await axios.post<LoginResponse>("/api/users/login", data);
        return response.data;
};

export const getCurrentUser = async (): Promise<UserType> => {
  const response = await axios.get<{ data: UserType }>("/api/users/current-user");
  return response.data.data;
}