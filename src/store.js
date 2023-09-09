import { create } from 'zustand';

const useStore = create(set => ({
  // states
  currentUser: 'guest',
  currentRole: "",
  isAuthenticated: false,
  searchResultsPage: 1,
  //  themePreference: 'dark',
  searchQuery: '',
  // set actions
  setCurrentUser: (user) => set({ currentUser: user }),
  setCurrentRole: (role) => set({ currentRole: role }),
  setIsAuthenticated: (auth) => set({ isAuthenticated: auth }),
  setSearchResultsPage: (page) => set({ searchResultsPage: page }),
  setThemePreference: (theme) => set({ themePreference: theme }),
  setSearchQuery: (query) => set({ searchQuery: query }),
}));

export default useStore;