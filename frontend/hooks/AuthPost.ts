import api from "@/lib/axios";
import toast from "react-hot-toast";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const authPost = async (url: string, message: string, data: any) => {
  try {
    const response = await api.post(url, data);
    toast.success(message);
    return response;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export default authPost;