import { Roles } from '@/enum/Roles';
import { RootType } from '@/store/store';
import { createSelector } from '@reduxjs/toolkit';

const getUser = (state: RootType) => state.user.user;

export const getUserInfoSelector = createSelector([getUser], (user) => {
  return {
    isAuth: !!user,
    isAdmin: user ? user.role === Roles.ADMIN : false,
    id: user?.id || null,
    email: user?.email || null,
  };
});
