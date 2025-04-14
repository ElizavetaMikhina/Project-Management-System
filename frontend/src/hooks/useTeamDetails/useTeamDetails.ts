import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const useTeamDetails = (teamId: number) => {
  return useQuery({
    queryKey: ["team", teamId],
    queryFn: async () => {
      const { data } = await axios.get(`/teams/${teamId}`);
      return data;
    },
    enabled: !!teamId,
  });
};
