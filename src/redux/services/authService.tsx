// import { getAccessToken } from "./localStorage";

/* API Service */
import { auth } from "./apiService";

/* API URL  */
const AUTH = `api/v1/auth`;

export interface AuthPayload {
  username: string;
  password: string;
}

/* Get All Users Data */
export const authenticate = async function (data: AuthPayload) {
  return await auth(AUTH, data);
};
