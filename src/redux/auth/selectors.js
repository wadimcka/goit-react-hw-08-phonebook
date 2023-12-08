export const selectName = state => state.auth.userData?.name || '';
export const selectAuthenticated = state => state.auth.authenticated;

export const selectUserData = state => state.auth.userData;

export const selectIsRefreshing = state => state.auth.isRefreshing;
