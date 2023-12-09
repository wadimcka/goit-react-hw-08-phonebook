export const handlRegistrThunkFulfilled = (state, { payload }) => {
  state.isLoading = false;
  state.authenticated = true;
  state.token = payload.token;
  state.userData = payload.user;
};

export const handllogInThunkFulfilled = (state, { payload }) => {
  state.isLoading = false;
  state.authenticated = true;
  state.token = payload.token;
  state.userData = payload.user;
};

export const handlRefreshThunkFulfilled = (state, { payload }) => {
  state.isLoading = false;
  state.isRefreshing = false;
  state.authenticated = true;
  state.userData = payload;
};

export const handlLogOutThunkFulfilled = (state, { payload }) => {
  state.isLoading = false;
  state.authenticated = false;
  state.token = null;
  state.userData = null;
};
