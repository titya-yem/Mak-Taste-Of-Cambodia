import api from "@/lib/axios";
import { AxiosError, AxiosResponse } from "axios";

const fetchApi = async <T>(url: string): Promise<AxiosResponse<T>> => {
  try {
    const res = await api.get<T>(`${process.env.NEXT_PUBLIC_BACKEND_URL}${url}`,
      { withCredentials: true }
    );
    return res;
  } catch (error) {
    return (error as AxiosError).response as AxiosResponse<T>;
  }
};

export default fetchApi;