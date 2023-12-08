import { useSelector } from 'react-redux';
import {
  selectAuthenticated,
  selectIsRefreshing,
  selectUserData,
} from 'redux/auth/selectors';

export const useAuth = () => {
  return {
    authenticated: useSelector(selectAuthenticated),
    isRefreshing: useSelector(selectIsRefreshing),
    isLoading: useSelector(selectIsRefreshing),
    userData: useSelector(selectUserData),
  };
};
