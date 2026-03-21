import { create } from 'zustand';

export type Role = 'teacher' | 'student';

export interface User {
  name: string;
  email: string;
  role: Role;
}

interface AuthState {
  user: User | null;
  isLoggedIn: boolean;
  login: (email: string) => boolean;
  logout: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  isLoggedIn: false,
  login: (email: string) => {
    // Mock login logic
    if (email === 'teacher@test.com') {
      set({
        user: { name: 'Teacher Person', email, role: 'teacher' },
        isLoggedIn: true,
      });
      return true;
    } else if (email === 'student@test.com') {
      set({
        user: { name: 'Student Person', email, role: 'student' },
        isLoggedIn: true,
      });
      return true;
    } else {
      return false;
    }
  },
  logout: () => set({ user: null, isLoggedIn: false }),
}));
