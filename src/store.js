import { create } from 'zustand';

const useStore = create(set => ({
  // states
  articleID: '',
  ticketInfoID: '',
  searchResultsPage: 1,
  //  themePreference: 'dark',
  searchQuery: '',
  // set actions
  setTicketInfoID: (id) => set({ ticketInfoID: id }),
  setArticleID: (articleID) => set({ articleID: articleID }),
  setSearchResultsPage: (page) => set({ searchResultsPage: page }),
  setSearchQuery: (query) => set({ searchQuery: query }),
}));

export default useStore;