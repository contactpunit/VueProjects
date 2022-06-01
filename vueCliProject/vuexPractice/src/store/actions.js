export default {
  logMeIn(context) {
    context.commit('login');
  },
  logMeOut(context) {
    context.commit('logout');
  },
};
