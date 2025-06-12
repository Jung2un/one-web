import React from 'react';
import { BsTrash } from "react-icons/bs";
import { MdContentCopy } from "react-icons/md";
import { Memo } from '@/types/memo';
import {
  MemoListContainer,
  MemoListHeader,
  MemoCount,
  DeleteAllButton,
  MemoItem,
  MemoContent,
  MemoDate,
  MemoActions,
  ActionButton,
  MemoPlaceholder
} from './styled';

interface MemoListProps {
  memos: Memo[];
  formatDate: (date: string) => string;
  onCopyMemo: (content: string) => void;
  onDeleteMemo: (id: string) => void;
  onDeleteAll: () => void;
}

export default function MemoList({
  memos,
  formatDate,
  onCopyMemo,
  onDeleteMemo,
  onDeleteAll
}: MemoListProps) {
  if (memos.length === 0) {
    return <MemoPlaceholder>메모 목록이 비어있습니다</MemoPlaceholder>;
  }

  return (
    <MemoListContainer>
      <MemoListHeader>
        <MemoCount>전체 메모 {memos.length}개</MemoCount>
        <DeleteAllButton
          onClick={onDeleteAll}
          title="전체 삭제"
          aria-label="메모 전체 삭제"
        >
          <BsTrash />
        </DeleteAllButton>
      </MemoListHeader>
      {memos.map((memo) => (
        <MemoItem key={memo.id}>
          <MemoContent>{memo.content}</MemoContent>
          <MemoDate>{formatDate(memo.createdAt)}</MemoDate>
          <MemoActions>
            <ActionButton
              onClick={() => onCopyMemo(memo.content)}
              title="메모 복사"
              aria-label="메모 내용 복사"
              color="#4dabf7"
            >
              <MdContentCopy />
            </ActionButton>
            <ActionButton
              onClick={() => onDeleteMemo(memo.id)}
              title="메모 삭제"
              aria-label="메모 삭제"
            >
              <BsTrash />
            </ActionButton>
          </MemoActions>
        </MemoItem>
      ))}
    </MemoListContainer>
  );
} 