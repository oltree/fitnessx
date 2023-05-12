import { FC } from 'react';

export enum RoutePaths {
  HOME = '/home',
  WELCOME = '/',
  SIGN_UP = '/signup',
  SIGN_IN = '/signin',
  NOTIFICATIONS = '/notifications',
  PROFILE = '/profile',
  NOTFOUND = '*',
  BASENAME = '/fitnessx',
  WORKOUT = '/workout'
}

export type RouteType = {
  path: string;
  component: FC;
  isAuth: boolean;
};
