export default {
  auth_request(state) {
    state.status = "loading";
  },
  auth_success(state, token, user) {
    state.status = "success";
    state.currentUser.authenticated = true;
    state.token = token;
    state.user = user;
  },
  auth_error(state) {
    state.status = "error";
  }
};
