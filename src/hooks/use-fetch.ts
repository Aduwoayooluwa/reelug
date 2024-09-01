import { useQuery } from "@tanstack/react-query";
import axiosInstance from "../config/api.config";

const fetchData = async (endpoint: string) => {
  const { data } = await axiosInstance.get(endpoint);
  return data;
};

const useFetchData = (endpoint: string) => {
  return useQuery({
    queryKey: [endpoint],
    queryFn: () => fetchData(endpoint),
  });
};

export default useFetchData;
