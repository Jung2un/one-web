// 위치 정보를 가져오는 함수
export const getLocation = (): Promise<{ lat: number; lon: number }> => {
  return new Promise((resolve, reject) => {
    if (!navigator.geolocation) {
      reject(new Error('브라우저에서 위치 정보를 지원하지 않습니다.'));
      return;
    }

    const options = {
      enableHighAccuracy: true, // 높은 정확도 사용
      timeout: 5000, // 5초 타임아웃
      maximumAge: 0 // 캐시된 위치 정보를 사용하지 않음
    };

    navigator.geolocation.getCurrentPosition(
      (position) => {
        resolve({
          lat: position.coords.latitude,
          lon: position.coords.longitude
        });
      },
      (error) => {
        reject(error);
      },
      options
    );
  });
};

// 위도, 경도를 주소로 변환하는 함수 (카카오 API 사용)
export const getAddressFromCoords = async (lat: number, lon: number): Promise<string> => {
  try {
    const KAKAO_API_KEY = process.env.NEXT_PUBLIC_KAKAO_REST_API_KEY;
    if (!KAKAO_API_KEY) {
      throw new Error('카카오 API 키가 설정되지 않았습니다.');
    }

    const response = await fetch(
      `https://dapi.kakao.com/v2/local/geo/coord2address.json?x=${lon}&y=${lat}`,
      {
        headers: {
          'Authorization': `KakaoAK ${KAKAO_API_KEY}`,
          'Content-Type': 'application/json'
        }
      }
    );
    
    if (!response.ok) {
      const errorData = await response.json();
      console.error('카카오 API 에러:', errorData);
      throw new Error(errorData.message || '위치 정보 변환 중 에러가 발생했습니다.');
    }

    const data = await response.json();
    
    if (data.documents && data.documents[0]) {
      const address = data.documents[0].address;
      // 시/도 + 구/군 + 동/읍/면 형식으로 반환
      const region3 = address.region_3depth_name ? ` ${address.region_3depth_name}` : '';
      return `${address.region_1depth_name} ${address.region_2depth_name}${region3}`;
    }
    
    return '위치 정보를 찾을 수 없습니다.';
  } catch (error) {
    console.error('위치 정보 변환 에러:', error);
    return '위치 정보를 가져오는데 실패했습니다.';
  }
}; 