"use client";

import React, { useRef, useState, useEffect } from "react";
import Alert from "@/components/Alert";
import ConfirmModal from "@/components/Modal";
import { BsTrash } from "react-icons/bs";
import type { NewsItem } from '@/types/news';
import type { WeatherInfo } from '@/types/weather';
import { MdContentCopy } from "react-icons/md";
import { useUXLabStore } from "@/store/useUXLabStore";
import { useMemoStore } from "@/store/useMemoStore";
import {
  Container,
  SubTitle,
  ButtonWrapper,
  UXButton,
  CloseButton,
  UsageSection,
  UsageCard,
  UsageNumber,
  UsageTitle,
  UsageDescription,
  MemoContainer,
  MemoForm,
  MemoInput,
  MemoSubmitButton,
  MemoPlaceholder,
  MemoList,
  MemoListHeader,
  MemoCount,
  DeleteAllButton,
  MemoItem,
  MemoContent,
  MemoDate,
  MemoActions,
  ActionButton,
  WeatherContainer,
  WeatherContent,
  WeatherCard,
  NewsContainer,
  NewsGrid,
  NewsCard,
  WeatherHeader,
} from "./styled";
import { fetchNews } from '@/lib/naverApi';
import { getWeatherStatus } from '@/lib/getWeatherStatus';
import { getLocation, getAddressFromCoords } from '@/lib/getLocation';

export default function UXLabSection() {
  const {
    isMemoVisible,
    isWeatherVisible,
    isNewsVisible,
    showMemo,
    showWeather,
    showNews,
    resetAll,
  } = useUXLabStore();

  const {
    memos,
    currentMemo,
    setCurrentMemo,
    addMemo,
    deleteMemo,
    deleteAllMemos,
  } = useMemoStore();

  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const longPressRef = useRef<NodeJS.Timeout | null>(null);
  const clickCountRef = useRef(0);
  const isLongPressActiveRef = useRef(false);

  const [showAlert, setShowAlert] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showDeleteAllModal, setShowDeleteAllModal] = useState(false);
  const [memoToDelete, setMemoToDelete] = useState<string | null>(null);
  const [news, setNews] = useState<NewsItem[]>([]);
  const [weather, setWeather] = useState<WeatherInfo | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [location, setLocation] = useState<string>('');

  const handleClick = () => {
    if (isLongPressActiveRef.current) return;

    clickCountRef.current += 1;

    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }

    timerRef.current = setTimeout(() => {
      if (clickCountRef.current === 1) {
        resetAll();
        showMemo();
      }
      clickCountRef.current = 0;
    }, 300);
  };

  const handleDoubleClick = () => {
    if (isLongPressActiveRef.current) return;

    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
    clickCountRef.current = 0;
    resetAll();
    showWeather();
  };

  const handleMouseDown = () => {
    isLongPressActiveRef.current = false;

    longPressRef.current = setTimeout(() => {
      isLongPressActiveRef.current = true;
      resetAll();
      showNews();
    }, 500);
  };

  const handleMouseUp = () => {
    if (longPressRef.current) {
      clearTimeout(longPressRef.current);
    }
    setTimeout(() => {
      isLongPressActiveRef.current = false;
    }, 100);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addMemo();
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('ko-KR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const handleCopyMemo = async (content: string) => {
    try {
      await navigator.clipboard.writeText(content);
      setShowAlert(true);
    } catch (err) {
      console.error('메모 복사 실패:', err);
    }
  };

  const handleDeleteClick = (id: string) => {
    setMemoToDelete(id);
    setShowDeleteModal(true);
  };

  const handleDeleteConfirm = () => {
    if (memoToDelete) {
      deleteMemo(memoToDelete);
      setMemoToDelete(null);
    }
    setShowDeleteModal(false);
  };

  const handleDeleteAllClick = () => {
    setShowDeleteAllModal(true);
  };

  const handleDeleteAllConfirm = () => {
    deleteAllMemos();
    setShowDeleteAllModal(false);
  };

  // 활성화된 기능이 있는지 확인
  const isAnyFeatureActive = isMemoVisible || isWeatherVisible || isNewsVisible;

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

  return (
    <Container>
      {!isAnyFeatureActive && (
      <SubTitle>
        하나의 버튼으로 메모, 날씨, 뉴스 기능을 전환하며
        <br />
        다양한 사용자 인터랙션을 실험해보세요.
      </SubTitle>
      )}

      <ButtonWrapper $isAnyFeatureActive={isAnyFeatureActive}>
        <UXButton
          onClick={handleClick}
          onDoubleClick={handleDoubleClick}
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          className="bounce-animation"
          $isAnyFeatureActive={isAnyFeatureActive}
        >
          ✨
        </UXButton>
        {isAnyFeatureActive && (
          <CloseButton 
            className="close-button"
            onClick={resetAll}
            aria-label="모든 기능 닫기"
          >
            ✕
          </CloseButton>
        )}
      </ButtonWrapper>

      <UsageSection>
        <UsageCard>
          <UsageNumber>1</UsageNumber>
          <UsageTitle>클릭</UsageTitle>
          <UsageDescription>메모 열기</UsageDescription>
        </UsageCard>
        <UsageCard>
          <UsageNumber>2</UsageNumber>
          <UsageTitle>더블클릭</UsageTitle>
          <UsageDescription>날씨 보기</UsageDescription>
        </UsageCard>
        <UsageCard>
          <UsageNumber>3</UsageNumber>
          <UsageTitle>길게 누르기</UsageTitle>
          <UsageDescription>뉴스 보기</UsageDescription>
        </UsageCard>
      </UsageSection>

      {isMemoVisible && (
        <MemoContainer>
          <MemoForm onSubmit={handleSubmit}>
            <MemoInput
              value={currentMemo}
              onChange={(e) => setCurrentMemo(e.target.value)}
              placeholder="메모를 입력하세요..."
            />
            <MemoSubmitButton type="submit">저장</MemoSubmitButton>
          </MemoForm>
          
          {memos.length === 0 ? (
            <MemoPlaceholder>
              메모 목록이 비어있습니다
            </MemoPlaceholder>
          ) : (
            <>
              <MemoListHeader>
                <MemoCount>전체 메모 {memos.length}개</MemoCount>
                <DeleteAllButton 
                  onClick={handleDeleteAllClick}
                  title="전체 삭제"
                  aria-label="메모 전체 삭제"
                >
                  <BsTrash />
                </DeleteAllButton>
              </MemoListHeader>
              <MemoList>
                {memos.map((memo) => (
                  <MemoItem key={memo.id}>
                    <MemoContent>{memo.content}</MemoContent>
                    <MemoDate>{formatDate(memo.createdAt)}</MemoDate>
                    <MemoActions>
                      <ActionButton
                        onClick={() => handleCopyMemo(memo.content)}
                        title="메모 복사"
                        aria-label="메모 내용 복사"
                        color="#4dabf7"
                      >
                        <MdContentCopy />
                      </ActionButton>
                      <ActionButton
                        onClick={() => handleDeleteClick(memo.id)}
                        title="메모 삭제"
                        aria-label="메모 삭제"
                      >
                        <BsTrash />
                      </ActionButton>
                    </MemoActions>
                  </MemoItem>
                ))}
              </MemoList>
            </>
          )}
        </MemoContainer>
      )}

      {isWeatherVisible && (
        <WeatherContainer>
          <WeatherHeader>
            <h3>날씨 정보</h3>
            {location && <div className="location">현재 위치: {location}</div>}
          </WeatherHeader>
          <WeatherContent>
            {isLoading ? (
              <div>날씨 정보를 불러오는 중...</div>
            ) : weather ? (
              <>
                <WeatherCard>
                  <div className="icon">{getWeatherStatus(weather.weather).icon}</div>
                  <div className="temperature">{weather.temperature}°C</div>
                  <div className="description">{getWeatherStatus(weather.weather).description}</div>
                </WeatherCard>
                <WeatherCard>
                  <div className="icon">💨</div>
                  <div className="temperature">{weather.windSpeed}m/s</div>
                  <div className="description">풍속</div>
                </WeatherCard>
                <WeatherCard>
                  <div className="icon">💧</div>
                  <div className="temperature">{weather.humidity}%</div>
                  <div className="description">습도</div>
                </WeatherCard>
              </>
            ) : (
              <div>날씨 정보를 불러오는데 실패했습니다.</div>
            )}
          </WeatherContent>
        </WeatherContainer>
      )}

      {isNewsVisible && (
        <NewsContainer>
          <h3>최신 뉴스</h3>
          <NewsGrid>
            {isLoading ? (
              <div>뉴스를 불러오는 중...</div>
            ) : news.length > 0 ? (
              news.map((item, index) => (
                <NewsCard 
                  key={index}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <h4>{item.title}</h4>
                  <div className="meta">
                    {new Date(item.pubDate).toLocaleDateString('ko-KR')}
                  </div>
                  <p>{item.description}</p>
                </NewsCard>
              ))
            ) : (
              <div>뉴스를 불러오는데 실패했습니다.</div>
            )}
          </NewsGrid>
        </NewsContainer>
      )}

      <ConfirmModal
        isOpen={showDeleteModal}
        title="메모 삭제"
        message="메모를 삭제하시겠습니까?"
        onConfirm={handleDeleteConfirm}
        onCancel={() => setShowDeleteModal(false)}
      />

      <ConfirmModal
        isOpen={showDeleteAllModal}
        title="전체 삭제"
        message="모든 메모를 삭제하시겠습니까?"
        onConfirm={handleDeleteAllConfirm}
        onCancel={() => setShowDeleteAllModal(false)}
      />

      {showAlert && (
        <Alert
          message="메모가 복사되었습니다"
          onClose={() => setShowAlert(false)}
        />
      )}
    </Container>
  );
}
