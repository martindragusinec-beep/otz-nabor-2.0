import React, { createContext, useContext, useMemo, useState } from 'react';
import { RecruitmentModal } from './RecruitmentModal';

type RecruitmentModalContextValue = {
  openModal: () => void;
  closeModal: () => void;
};

const RecruitmentModalContext = createContext<RecruitmentModalContextValue | null>(null);

export const RecruitmentModalProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const value = useMemo(
    () => ({
      openModal: () => setIsOpen(true),
      closeModal: () => setIsOpen(false),
    }),
    []
  );

  return (
    <RecruitmentModalContext.Provider value={value}>
      {children}
      <RecruitmentModal open={isOpen} onOpenChange={setIsOpen} />
    </RecruitmentModalContext.Provider>
  );
};

export const useRecruitmentModal = () => {
  const context = useContext(RecruitmentModalContext);

  if (!context) {
    throw new Error('useRecruitmentModal must be used within RecruitmentModalProvider');
  }

  return context;
};
