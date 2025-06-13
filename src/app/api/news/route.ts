import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const response = await fetch(
      'https://openapi.naver.com/v1/search/news.json?query=IT&display=5&sort=date',
      {
        headers: {
          'X-Naver-Client-Id': process.env.NEXT_PUBLIC_NAVER_CLIENT_ID || '',
          'X-Naver-Client-Secret': process.env.NEXT_PUBLIC_NAVER_CLIENT_SECRET || '',
        },
      }
    );

    if (!response.ok) {
      throw new Error('네이버 API 호출 실패');
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error('뉴스 API 에러:', error);
    return NextResponse.json({ error: '뉴스를 가져오는데 실패했습니다.' }, { status: 500 });
  }
} 