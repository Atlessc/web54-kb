import { create } from 'zustand';

const useStore = create(set => ({
  // states
  articleID: '',
  ticketInfoID: '',
  searchResultsPage: 1,
  ticketInfoText: '',
  //  themePreference: 'dark',
  searchQuery: '',
  // set actions
  setTicketInfoText: (text) => set({ ticketInfoText: text }),
  setTicketInfoID: (id) => set({ ticketInfoID: id }),
  setArticle: (articleID) => set({ articleID: articleID }),
  setSearchResultsPage: (page) => set({ searchResultsPage: page }),
  setSearchQuery: (query) => set({ searchQuery: query }),
}));

export default useStore;