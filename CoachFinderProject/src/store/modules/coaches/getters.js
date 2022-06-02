export default {
  getCoaches(state) {
    return state.allCoaches;
  },
  hasCoaches(state) {
    if (state.allCoaches && state.allCoaches.length) return true;
    return false;
  },
};
