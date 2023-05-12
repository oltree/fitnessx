import axios from 'axios';

interface WeatherData {
  weather: {
    main: string;
  }[];
  main: {
    temp: number;
  };
}

class WeatherService {
  async getWeatherData(city: string): Promise<WeatherData> {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=a8dcb335f2c35ce3a1a5792de60af271&lang=ru&units=metric`
    );
    return response.data;
  }

  isBadWeather(activity: string, weatherData: WeatherData): boolean {
    if (activity === 'legs') {
      const weatherCondition = weatherData.weather[0].main;
      const temperature = weatherData.main.temp;

      if (weatherCondition === 'Rain' || temperature < 10) {
        return true;
      }
    }

    return false;
  }

  async getWeatherMessage(city: string, activity: string): Promise<string> {
    const weatherData = await this.getWeatherData(city);

    if (this.isBadWeather(activity, weatherData)) {
      return 'will be bad weather for ' + activity;
    } else {
      return 'will be good weather for ' + activity;
    }
  }
}

export default new WeatherService();
