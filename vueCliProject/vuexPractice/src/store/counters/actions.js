export default {
  increase(context, payload) {
    setTimeout(() => {
      context.commit('increase', payload);
    }, 2000);
  },
};
