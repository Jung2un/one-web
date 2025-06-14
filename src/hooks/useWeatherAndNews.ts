import { useState, useEffect } from 'react';
import type { NewsItem } from '@/types/news';
import type { WeatherInfo } from '@/types/weather';
import { fetchNews } from '@/lib/naverApi';
import { getLocation, getAddressFromCoords } from '@/lib/getLocation';

export const useWeatherAndNews = (isWeatherVisible: boolean, isNewsVisible: boolean) => {
  const [news, setNews] = useState<NewsItem[]>([]);
  const [weather, setWeather] = useState<WeatherInfo | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [location, setLocation] = useState<string>('');

  // 뉴스 데이터 가져오기
  const loadNews = async () => {
    setIsLoading(true);
    try {
      const newsData = await fetchNews();
      setNews(newsData);
    } catch (error) {
      console.error('뉴스 로딩 에러:', error);
    } finally {
      setIsLoading(false);
    }
  };

  // 날씨 데이터 가져오기
  const loadWeather = async () => {
    setIsLoading(true);
    try {
      // 현재 위치 가져오기
      const { lat, lon } = await getLocation();
      
      // 위치 정보를 주소로 변환
      const address = await getAddressFromCoords(lat, lon);
      setLocation(address);

      // 날씨 정보 가져오기
      const response = await fetch(`/api/weather?lat=${lat}&lon=${lon}`);
      if (!response.ok) {
        throw new Error('날씨 정보를 가져오는데 실패했습니다.');
      }
      const weatherData = await response.json();
      setWeather(weatherData);
    } catch (error) {
      console.error('날씨 로딩 에러:', error);
    } finally {
      setIsLoading(false);
    }
  };

  // 날씨/뉴스 표시 시 데이터 로드
  useEffect(() => {
    if (isWeatherVisible) {
      loadWeather();
    }
    if (isNewsVisible) {
      loadNews();
    }
  }, [isWeatherVisible, isNewsVisible]);

  return {
    news,
    weather,
    isLoading,
    location,
  };
}; 