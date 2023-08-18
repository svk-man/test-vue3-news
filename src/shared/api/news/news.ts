import type { AxiosPromise } from "axios";
import { apiInstance } from "./base";
import type { NewsResponse } from "./models";

const BASE_URL = "/news"

export const getNewsList = (id: number): AxiosPromise<NewsResponse> => {
    return apiInstance.get(`${BASE_URL}/${id}`);
};
