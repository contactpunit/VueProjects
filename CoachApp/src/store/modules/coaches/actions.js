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

    const token = context.rootGetters.token;

    const response = await fetch(
      `https://coachfinder-4f833-default-rtdb.firebaseio.com/coaches/${userId}.json?auth=${token}`,
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

  async loadCoaches(context, payload) {
    if (!payload.forceRefresh && !context.getters.shouldUpdate) return;

    let response;
    try {
      response = await fetch(
        'https://coachfinder-4f833-default-rtdb.firebaseio.com/coaches.json'
      );
    } catch (err) {
      throw new Error(err.message || 'Failed to fetch');
    }

    const data = await response.json();

    if (!response.ok) {
      // error generated
      throw new Error(data.message || 'Failed to fetch');
    }

    const coaches = [];
    for (const key in data) {
      const coach = {
        id: key,
        firstName: data[key].firstName,
        lastName: data[key].lastName,
        hourlyRate: data[key].hourlyRate,
        description: data[key].description,
        areas: data[key].areas,
      };
      coaches.push(coach);
    }

    context.commit('setCoaches', coaches);
    context.commit('setFetchTimestamp');
  },
};
