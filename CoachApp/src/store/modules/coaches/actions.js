export default {
  addCoach(context, data) {
    const coachData = {
      id: context.rootGetters.userId,
      firstName: data.firstName,
      lastName: data.lastName,
      hourlyRate: data.hourlyRate,
      description: data.description,
      areas: data.areas,
    };

    context.commit('addCoach', coachData);
  },
};
