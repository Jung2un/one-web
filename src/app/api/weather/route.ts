import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  try {
    // URL에서 위도, 경도 파라미터 가져오기
    const { searchParams } = new URL(request.url);
    const lat = searchParams.get('lat');
    const lon = searchParams.get('lon');

    if (!lat || !lon) {
      return NextResponse.json(
        { error: '위도와 경도가 필요합니다.' },
        { status: 400 }
      );
    }

    // OpenWeather API 호출
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${process.env.NEXT_PUBLIC_OPENWEATHER_API_KEY}&units=metric&lang=kr`,
      {
        headers: {
          'Content-Type': 'application/json',
        },
        next: { revalidate: 300 } // 5분마다 갱신
      }
    );

    if (!response.ok) {
      throw new Error('날씨 API 호출 실패');
    }

    const data = await response.json();
    
    // 날씨 정보 변환
    const weatherInfo = {
      temperature: Math.round(data.main.temp).toString(),
      weather: data.weather[0].main,
      description: data.weather[0].description,
      windSpeed: Math.round(data.wind.speed).toString(),
      humidity: data.main.humidity.toString()
    };

    return NextResponse.json(weatherInfo);
  } catch (error) {
    console.error('날씨 API 에러:', error);
    return NextResponse.json(
      { error: '날씨 정보를 가져오는데 실패했습니다.' },
      { status: 500 }
    );
  }
} 