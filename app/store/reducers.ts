import {Booking} from '../models';
import {DefaultCleaner, DefaultUser, User} from '../models/User';
import ThemeModule from '../native/ThemeModule';
import {SIGNUP_USER, LOGIN_USER, LOGOUT_USER} from './types';
type AuthState = {
  user?: User;
  authorized: boolean;
  theme: string;
};

type BookingState = {
  bookings: Booking[];
};

type AuthAction = {
  type: string;
  user?: User;
};
const initialState: AuthState = {
  user: DefaultUser,
  authorized: false,
  theme: ThemeModule.getPhoneTheme(true),
};

const initialBookingState: BookingState = {
  bookings: Booking.createRandom(DefaultCleaner),
};

export const authReducer = (state = initialState, action: AuthAction) => {
  let returnValue: AuthState;
  // let user = state.user;
  switch (action.type) {
    case SIGNUP_USER:
      returnValue = {
        ...state,
        user: action.user,
        authorized: true,
      };
      break;

    case LOGIN_USER:
      returnValue = {
        ...state,
        user: action.user,
        authorized: true,
      };
      break;
    case LOGOUT_USER:
      returnValue = initialState;
      break;
    default:
      returnValue = state;
  }
  return returnValue;
};

export const bookingReducer = (
  state = initialBookingState /*, action: any */,
) => {
  let returnValue = state;
  return returnValue;
};
