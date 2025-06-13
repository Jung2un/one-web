import type { NewsItem } from '@/types/news';

// 뉴스 API 호출 함수
export const fetchNews = async (): Promise<NewsItem[]> => {
  try {
    const response = await fetch('/api/news', {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    
    if (!response.ok) {
      throw new Error('뉴스를 가져오는데 실패했습니다.');
    }
    
    const data = await response.json();
    return data.items;
  } catch (error) {
    console.error('뉴스 API 호출 에러:', error);
    return [];
  }
}; 