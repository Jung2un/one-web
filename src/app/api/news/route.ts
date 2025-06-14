import { NextResponse } from 'next/server';

// HTML 태그 및 엔티티 변환
const removeHtmlTags = (text: string): string => {
  if (!text) return '';
  let result = text.replace(/<[^>]*>/g, '');
  result = result
    .replace(/&quot;/g, '"')
    .replace(/&apos;/g, "'")
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&#39;/g, "'")
    .replace(/&nbsp;/g, ' ');
  return result;
};

export async function GET() {
  try {
    const response = await fetch(
      'https://openapi.naver.com/v1/search/news.json?query=뉴스&display=6&sort=date',
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
    const cleanedData = {
      ...data,
      items: data.items.map((item: any) => ({
        ...item,
        title: removeHtmlTags(item.title),
        description: removeHtmlTags(item.description),
      })),
    };

    return NextResponse.json(cleanedData);
  } catch (error) {
    console.error('뉴스 API 에러:', error);
    return NextResponse.json({ error: '뉴스를 가져오는데 실패했습니다.' }, { status: 500 });
  }
} 