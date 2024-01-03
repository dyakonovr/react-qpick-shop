import UserService from "@/services/user.service";
import { useQuery } from "@tanstack/react-query";
import { useUser } from "./useUser";
import { Roles } from "@/enum/Roles";

export const useProfile = () => {
  const { user } = useUser();

  const { data } = useQuery({
    queryKey: ['profile'],
    queryFn: () => UserService.getProfile(user?.id || ""),
    select: ({ data }) => data,
    enabled: !!user
  });

  return {
    id: data?.user ? data.user.id : null,
    isAdmin: data?.user ? data.user.role === Roles.ADMIN : false,
    isAuth: data?.user ? !!data.user.id : false,
    favourites: data?.favourites || [],
  };
};