import { create } from 'zustand';

interface Memo {
  id: string;
  content: string;
  createdAt: string;
}

interface MemoStore {
  // 메모 데이터
  memos: Memo[];
  currentMemo: string;
  
  // UI 상태
  showAlert: boolean;
  showDeleteModal: boolean;
  showDeleteAllModal: boolean;
  memoToDelete: string | null;

  // 액션
  setCurrentMemo: (content: string) => void;
  addMemo: () => void;
  deleteMemo: (id: string) => void; // 실제 메모 삭제
  deleteAllMemos: () => void; // 전체 메모 삭제
  setShowAlert: (show: boolean) => void;
  setShowDeleteModal: (show: boolean) => void; // 삭제 모달 표시
  setShowDeleteAllModal: (show: boolean) => void; // 전체 삭제 모달 표시
  setMemoToDelete: (id: string | null) => void; // 삭제할 메모 ID 설정
}

export const useMemoStore = create<MemoStore>((set) => ({
  // 저장된 메모 목록
  memos: [],
  // 현재 작성 중인 메모
  currentMemo: '',
  
  // UI 상태 초기값
  showAlert: false,
  showDeleteModal: false,
  showDeleteAllModal: false,
  memoToDelete: null,
  
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

  // 전체 삭제
  deleteAllMemos: () => {
    set({ memos: [] });
  },

  // UI 상태 업데이트 액션들
  setShowAlert: (show: boolean) => set({ showAlert: show }),
  setShowDeleteModal: (show: boolean) => set({ showDeleteModal: show }),
  setShowDeleteAllModal: (show: boolean) => set({ showDeleteAllModal: show }),
  setMemoToDelete: (id: string | null) => set({ memoToDelete: id }),
})); 