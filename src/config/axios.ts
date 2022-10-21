import axios from "axios";
import { SERVICES_BASE_URL } from "../constants";

axios.defaults.baseURL = SERVICES_BASE_URL;

export default axios;
