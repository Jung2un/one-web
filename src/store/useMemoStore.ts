import { create } from 'zustand';

interface Memo {
  id: string;
  content: string;
  createdAt: string;
}

interface MemoStore {
  memos: Memo[];
  currentMemo: string;
  setCurrentMemo: (content: string) => void;
  addMemo: () => void;
  deleteMemo: (id: string) => void;
  deleteAllMemos: () => void;
}

export const useMemoStore = create<MemoStore>((set) => ({
  // 저장된 메모 목록
  memos: [],
  // 현재 작성 중인 메모
  currentMemo: '',
  
  // 현재 메모 내용 업데이트
  setCurrentMemo: (content: string) => {
    set({ currentMemo: content });
  },
  
  // 새 메모 추가
  addMemo: () => {
    set((state) => {
      if (!state.currentMemo.trim()) return state;
      
      const newMemo = {
        id: Date.now().toString(),
        content: state.currentMemo,
        createdAt: new Date().toISOString(),
      };
      
      return {
        memos: [...state.memos, newMemo],
        currentMemo: '', // 입력창 초기화
      };
    });
  },
  
  // 메모 삭제
  deleteMemo: (id: string) => {
    set((state) => ({
      memos: state.memos.filter((memo) => memo.id !== id),
    }));
  },

  // 전체 삭제 함수 구현
  deleteAllMemos: () => {
    set({ memos: [] });
  },
})); 