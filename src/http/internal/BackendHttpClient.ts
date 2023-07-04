import axios from "axios";
import { BACKEND_SERVER_URL } from "./BackendConstants";

axios.defaults.withCredentials = true;
const client = axios.create({
    baseURL: BACKEND_SERVER_URL,
    withCredentials: true
});

export { client as BackendHttpClient, axios };
