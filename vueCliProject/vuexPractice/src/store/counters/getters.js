export default {
  finalCounter(state) {
    return state.counter * 5;
  },
  normalizedCounter(state, getters) {
    const updated = getters.finalCounter;
    if (updated < 0) return 0;
    else if (updated > 100) return 100;
    else return updated;
  },
};
