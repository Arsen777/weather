export const getState = (store = {}) => store;
export const getWeatherByCity = (store, city) => getState(store).weather[city];
