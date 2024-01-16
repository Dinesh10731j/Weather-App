# Weather-App


# Weather App

## Overview

This is a simple weather app that allows users to input a city name and receive real-time weather information. The app displays the temperature, wind speed, humidity, and a corresponding weather image based on the current weather conditions.

## Getting Started

To run the weather app, follow the steps below:

### Prerequisites

- Make sure you have a modern web browser installed (e.g., Google Chrome, Mozilla Firefox).

### Installation

1. Clone the repository to your local machine:

    ```bash
    git clone https://github.com/your-username/your-weather-app.git
    ```

2. Navigate to the project directory:

    ```bash
    cd your-weather-app
    ```

3. Open the `index.html` file in your web browser.

## Usage

1. Open the app in your web browser.

2. Enter the name of the city for which you want to check the weather in the input field.

3. As you type, the app will fetch real-time weather information from the OpenWeatherMap API and display the temperature, wind speed, humidity, and a corresponding weather image.

4. The weather image will change based on the current weather conditions, such as Clear, Cloudy, or Sunny.

## API Key

This app uses the OpenWeatherMap API to fetch weather data. Make sure to replace the placeholder API key in the `getWeatherInfo` function with your own API key. You can obtain an API key by signing up on the OpenWeatherMap website: [OpenWeatherMap API](https://openweathermap.org/api).

```javascript
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${val}&appid=YOUR_API_KEY&units=metric`;
