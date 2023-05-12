import WeatherService from '@/services/weather.service';

import { CITY } from '@/types/enams/citys.enam';
import { EXERCISES } from '@/types/enams/exercises.enam';

export const getWeatherMessage = async () => {
  const message = await WeatherService.getWeatherMessage(
    CITY.MINSK,
    EXERCISES.LEGS
  );

  return message;
};
