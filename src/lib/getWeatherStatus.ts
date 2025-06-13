// 날씨 상태에 따른 아이콘과 설명을 반환하는 함수
export const getWeatherStatus = (weather: string) => {
  const weatherMap: { [key: string]: { icon: string; description: string } } = {
    Clear: { icon: '☀️', description: '맑음' },
    Clouds: { icon: '☁️', description: '구름' },
    Rain: { icon: '🌧️', description: '비' },
    Snow: { icon: '❄️', description: '눈' },
    Thunderstorm: { icon: '⛈️', description: '천둥번개' },
    Drizzle: { icon: '🌦️', description: '이슬비' },
    Mist: { icon: '🌫️', description: '안개' },
    Smoke: { icon: '🌫️', description: '연기' },
    Haze: { icon: '🌫️', description: '연무' },
    Dust: { icon: '💨', description: '먼지' },
    Fog: { icon: '🌫️', description: '안개' },
    Sand: { icon: '💨', description: '모래' },
    Ash: { icon: '🌋', description: '재' },
    Squall: { icon: '💨', description: '돌풍' },
    Tornado: { icon: '🌪️', description: '토네이도' }
  };

  return weatherMap[weather] || { icon: '🌤️', description: weather };
}; 