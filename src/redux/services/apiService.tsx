/* Ajax Call */
import axios from "axios";
import { getHeaderInfo } from "../../../src/utilities/helpers/tokenCreator";
import { SERVERURL } from "../../../src/utilities/constants";

/* Environment Variabel  */
// import { env_var } from "../../config/env";

/* Handle Reponse */
const handleResponse = (response: any) => {
  if (parseInt(response?.status) === 401) {
  }
  if (response?.data?.status !== "OK") {
    if (parseInt(response?.data?.status) === 401) {
    } else {
      return { data: response?.data, status: response?.status };
    }
  }

  return response;
};

/* auth Method */
export const auth = async function (url: string, body: any) {
  let header = await getHeaderInfo();
  // header.headers["token"] = getAccessToken();

  try {
    let resp = await axios.post(SERVERURL + url, body);
    //Iconsole.log(resp, "respresprespresp");
    return handleResponse(resp);
  } catch (err: any) {
    return handleResponse(err.response);
  }
};
/* POST Method */
export const post = async function (url: string, body: any) {
  let header = await getHeaderInfo();
  // header.headers["token"] = getAccessToken();

  try {
    let resp = await axios.post(SERVERURL + url, body, header);
    return handleResponse(resp);
  } catch (err: any) {
    return handleResponse(err.response);
  }
};

/* GET Method */
export const get = async function (url: any, params: any = {}) {
  let header = await getHeaderInfo();
  // header.headers["token"] = token;
  console.log(
    SERVERURL + url,
    { ...header, params },
    "SERVERURL + url, { ...header, params }"
  );

  try {
    let resp = await axios.get(SERVERURL + url, { ...header, params });
    console.log(resp, "resp");

    return handleResponse(resp);
  } catch (err: any) {
    console.log(err, "err");

    throw handleResponse(err.response);
  }
};

/* PUT Method */
export const put = async function (url: any, body: any) {
  let header = await getHeaderInfo();
  // const token = getAccessToken();
  // header.headers["token"] = token;
  try {
    let resp = await axios.put(SERVERURL + url, body, header);

    return handleResponse(resp);
  } catch (err: any) {
    throw handleResponse(err.response);
  }
};

/* DELETE Method */
export const deleteApi = async function (url: any) {
  let header = await getHeaderInfo();
  // const token = getAccessToken();
  // header.headers["token"] = token;
  try {
    let resp = await axios.delete(SERVERURL + url, header);

    return handleResponse(resp);
  } catch (err: any) {
    throw handleResponse(err.response);
  }
};
