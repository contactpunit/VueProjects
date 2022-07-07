export default {
  addRequest(context, payload) {
    const normalizedRequest = {
      id: new Date().toString(),
      coachId: payload.coachId,
      userEmail: payload.email,
      message: payload.message,
    };
    context.commit('addRequest', normalizedRequest);
  },
};
