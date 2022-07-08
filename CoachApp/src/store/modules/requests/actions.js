export default {
  async addRequest(context, payload) {
    const normalizedRequest = {
      userEmail: payload.email,
      message: payload.message,
    };

    const response = await fetch(
      `https://coachfinder-4f833-default-rtdb.firebaseio.com/requests/${normalizedRequest.coachId}.json`,
      {
        method: 'POST',
        body: JSON.stringify(normalizedRequest),
      }
    );

    const data = await response.json();
    normalizedRequest.id = data.name;
    normalizedRequest.coachId = payload.coachId;

    if (!response.ok) {
      // error generated while saving request
      const err = new Error(data.message || 'Unable to save request');
      throw err;
    }
    context.commit('addRequest', normalizedRequest);
  },

  async getAllRequests(context) {
    const coachId = context.rootGetters.userId;

    const response = await fetch(
      `https://coachfinder-4f833-default-rtdb.firebaseio.com/requests/${coachId}.json`
    );

    const data = await response.json();

    if (!response.ok) {
      // throw errr generated while fetching
      throw new Error(data.message || 'Unable to fetch requests');
    }

    const requests = [];
    for (const key in data) {
      const request = {
        id: key,
        coachId,
        userEmail: data[key].userEmail,
        message: data[key].message,
      };
      requests.push(request);
    }

    context.commit('setRequests', requests);
  },
};
