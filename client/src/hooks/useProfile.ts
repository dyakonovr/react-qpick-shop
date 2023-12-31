import UserService from "@/services/user.service";
import { useQuery } from "@tanstack/react-query";
import { useUser } from "./useUser";

export const useProfile = () => {
  const { user } = useUser();

  const { data } = useQuery({
    queryKey: ['profile'],
    queryFn: () => {
      return UserService.getProfile(user?.id || "");
    },
    select: ({ data }) => data
  });

  return {profile: data};
};