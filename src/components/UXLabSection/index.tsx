"use client";

import React from "react";
import Alert from "@/components/Alert";
import ConfirmModal from "@/components/Modal";
import { BsTrash } from "react-icons/bs";
import { MdContentCopy } from "react-icons/md";
import { useUXLabStore } from "@/store/useUXLabStore";
import { useMemoStore } from "@/store/useMemoStore";
import { useUXLabInteraction } from "@/hooks/useUXLabInteraction";
import { useMemoHandlers } from "@/hooks/useMemoHandlers";
import { useWeatherAndNews } from "@/hooks/useWeatherAndNews";
import { getWeatherStatus } from '@/lib/getWeatherStatus';
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
  Placeholder,
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

export default function UXLabSection() {
  const { memos } = useMemoStore();
  const { isMemoVisible, isWeatherVisible, isNewsVisible, resetAll } = useUXLabStore();
  const { handleClick, handleDoubleClick, handleMouseDown, handleMouseUp } = useUXLabInteraction();
  const { news, weather, isLoading, location } = useWeatherAndNews(isWeatherVisible, isNewsVisible);

  const {
    currentMemo,
    setCurrentMemo,
    showAlert,
    setShowAlert,
    showDeleteModal,
    setShowDeleteModal,
    showDeleteAllModal,
    setShowDeleteAllModal,
    handleSubmit,
    handleCopyMemo,
    handleDeleteClick,
    handleDeleteConfirm,
    handleDeleteAllClick,
    handleDeleteAllConfirm,
    formatDate,
  } = useMemoHandlers();

  // 활성화된 기능이 있는지 확인 (클릭, 더블클릭, 길게 누르기)
  const isAnyFeatureActive = isMemoVisible || isWeatherVisible || isNewsVisible;

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
            <Placeholder style={{transform: 'translateY(100px)'}}>
              메모 목록이 비어있습니다
            </Placeholder>
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
              <Placeholder>날씨 정보를 불러오는 중...</Placeholder>
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
              <Placeholder>날씨 정보를 불러오는데 실패했습니다.</Placeholder>
            )}
          </WeatherContent>
        </WeatherContainer>
      )}

      {isNewsVisible && (
        <NewsContainer>
          <h3>최신 뉴스</h3>
          <NewsGrid $isLoaded={!isLoading && news.length > 0}>
            {isLoading ? (
              <Placeholder>뉴스를 불러오는 중...</Placeholder>
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
              <Placeholder>뉴스를 불러오는데 실패했습니다.</Placeholder>
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
