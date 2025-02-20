'use client';

import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';
import { TLoginResponse } from '@entities';

export type UserStore = {
  userData: TLoginResponse | null;
  isAuth: boolean;
};

export type UserActions = {
  setUser: (data: UserStore['userData']) => void;
  signOut: () => void;
};

export const useUserStore = create<UserStore & UserActions>()(
  persist(
    (set, get) => ({
      userData: null,
      isAuth: !!get()?.userData?.access,
      setUser: (userData) => set({ userData, isAuth: !!userData?.access }),
      signOut: () => set({ userData: null, isAuth: false }),
    }),
    {
      name: 'user',
      storage: createJSONStorage(() => localStorage),
    },
  ),
);
