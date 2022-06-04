export default {
  addCoach(context, payload) {
    const data = {
      firstName: payload.firstName,
      lastName: payload.lastName,
      description: payload.description,
      areas: payload.areas,
      hourlyRate: payload.rate,
      id: 'demo',
    };
    context.commit('addCoach', data);
  },
};
