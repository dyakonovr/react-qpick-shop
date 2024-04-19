import { createSelector } from "@reduxjs/toolkit";
import type { RootType } from "@/store/store";
import { Roles } from "@/enum/Roles";

const getUser = (state: RootType) => state.user;

export const getUserInfoSelector = createSelector([getUser], (state) => {
  return {
    isAuth: state.status === "success" || state.status === null,
    isAdmin: state.data ? state.data.role === Roles.ADMIN : false,
    id: state.data?.id || null,
    email: state.data?.email || null
  };
});
