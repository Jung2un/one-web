import { useMemoStore } from '@/store/useMemoStore';

export const useMemoHandlers = () => {
  const {
    currentMemo,
    setCurrentMemo,
    addMemo,
    deleteMemo,
    deleteAllMemos,
    showAlert,
    setShowAlert,
    showDeleteModal,
    setShowDeleteModal,
    showDeleteAllModal,
    setShowDeleteAllModal,
    memoToDelete,
    setMemoToDelete,
  } = useMemoStore();

  // 메모 날짜 포맷팅 함수
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

  // 메모 제출 핸들러
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addMemo();
  };

  // 메모 복사 핸들러
  const handleCopyMemo = async (content: string) => {
    try {
      await navigator.clipboard.writeText(content);
      setShowAlert(true);
    } catch (err) {
      console.error('메모 복사 실패:', err);
    }
  };

  // 메모 삭제 클릭 핸들러
  const handleDeleteClick = (id: string) => {
    setMemoToDelete(id);
    setShowDeleteModal(true);
  };

  // 메모 삭제 확인 핸들러
  const handleDeleteConfirm = () => {
    if (memoToDelete) {
      deleteMemo(memoToDelete);
      setMemoToDelete(null);
    }
    setShowDeleteModal(false);
  };

  // 전체 삭제 클릭 핸들러
  const handleDeleteAllClick = () => {
    setShowDeleteAllModal(true);
  };

  // 전체 삭제 확인 핸들러
  const handleDeleteAllConfirm = () => {
    deleteAllMemos();
    setShowDeleteAllModal(false);
  };

  return {
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
  };
}; 