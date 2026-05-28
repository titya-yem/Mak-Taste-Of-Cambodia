import api from "@/lib/axios";
import { AxiosResponse } from "axios";

const fetchApi = async <T>(url: string): Promise<AxiosResponse<T>> => {
  try {
    const res = await api.get<T>(`${process.env.NEXT_PUBLIC_BACKEND_URL}${url}`,
      { withCredentials: true }
    );
    return res;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export default fetchApi;