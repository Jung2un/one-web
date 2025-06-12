import { useState } from 'react';
import { useMemoStore } from '@/store/useMemoStore';

export const useMemoActions = () => {
  const { memos, currentMemo, setCurrentMemo, addMemo, deleteMemo, deleteAllMemos } = useMemoStore();
  const [showAlert, setShowAlert] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showDeleteAllModal, setShowDeleteAllModal] = useState(false);
  const [memoToDelete, setMemoToDelete] = useState<string | null>(null);

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

  return {
    memos,
    currentMemo,
    setCurrentMemo,
    showAlert,
    setShowAlert,
    showDeleteModal,
    showDeleteAllModal,
    handleSubmit,
    formatDate,
    handleCopyMemo,
    handleDeleteClick,
    handleDeleteConfirm,
    handleDeleteAllClick,
    handleDeleteAllConfirm,
    setShowDeleteModal,
    setShowDeleteAllModal
  };
}; 