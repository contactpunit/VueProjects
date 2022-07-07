export default {
  async addCoach(context, data) {
    const userId = context.rootGetters.userId;
    const coachData = {
      firstName: data.firstName,
      lastName: data.lastName,
      hourlyRate: data.hourlyRate,
      description: data.description,
      areas: data.areas,
    };

    const response = await fetch(
      `https://coachfinder-4f833-default-rtdb.firebaseio.com/coaches/${userId}.json`,
      {
        method: 'PUT',
        body: JSON.stringify(coachData),
      }
    );

    if (!response.ok) {
      // error generated
    }

    context.commit('addCoach', {
      ...coachData,
      id: userId,
    });
  },
};
