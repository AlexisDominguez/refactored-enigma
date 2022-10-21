import { AxiosResponse } from "axios";
import axios from "../config/axios";

export const getPorfolios = async (): Promise<AxiosResponse<any, any>> => {
  const config = {
    url: "/api/portfolios/",
    method: "GET",
  };

  return await axios(config);
};

export const createPorfolio = async (
  name: string
): Promise<AxiosResponse<any, any>> => {
  const config = {
    url: "/api/portfolios/",
    method: "POST",
    data: {
      name,
    },
  };

  return await axios(config);
};
