export interface AuthSlice {
  isAuthenticated: boolean;
  login: () => void;
  logout: () => void;
}

export const createAuthSlice = (set: (fn: (state: AuthSlice) => Partial<AuthSlice>) => void, get: () => AuthSlice): AuthSlice => ({
  isAuthenticated: false,
  
  login: () => set(() => ({ 
      isAuthenticated: true 
  })),
  
  logout: () => set(() => ({ 
      isAuthenticated: false 
  })),
});
