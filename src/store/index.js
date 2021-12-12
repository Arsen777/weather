import { configureStore } from '@reduxjs/toolkit';

import weather from './actions/weather';

export const reducer = {
  weather,
};

export default configureStore({ reducer });
