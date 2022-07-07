export default {
  allRequests(state, _, _2, rootGetters) {
    const userId = rootGetters.userId;
    const reqRequests = state.requests.filter(
      (request) => request.coachId === userId
    );
    return reqRequests;
  },
  hasRequests(_, getters) {
    return getters.allRequests && getters.allRequests.length;
  },
};
