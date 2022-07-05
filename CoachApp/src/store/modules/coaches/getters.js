export default {
  coaches(state) {
    return state.coaches;
  },

  hasCoaches(state) {
    return state.coaches && state.coaches.length;
  },

  isCoach(state, _, _2, rootGetters) {
    const coaches = state.coaches;
    const userId = rootGetters.userId;
    return coaches.some((coach) => coach.id === userId);
  },
};
