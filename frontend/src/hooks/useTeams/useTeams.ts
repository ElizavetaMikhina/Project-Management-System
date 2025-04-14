import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const useTeams = () => {
  return useQuery({
    queryKey: ["teams"],
    queryFn: async () => {
      const { data } = await axios.get("/teams");
      return data;
    },
  });
};
