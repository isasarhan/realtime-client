// slices/auth-slice.ts
export interface AuthSlice {
    isAuthenticated: boolean;
    login: () => void;
    logout: () => void;
  }
  
  export const createAuthSlice = (set: any, get: any): AuthSlice => ({
    isAuthenticated: false,
    login: () => set({ isAuthenticated: true }),
    logout: () => set({ isAuthenticated: false }),
  });
  