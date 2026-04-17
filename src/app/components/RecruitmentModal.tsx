import React from 'react';
import { Dialog, DialogContent, DialogDescription, DialogTitle } from './ui/dialog';
import { RecruitmentForm } from './RecruitmentForm';

interface RecruitmentModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const RecruitmentModal: React.FC<RecruitmentModalProps> = ({ open, onOpenChange }) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        onPointerDownOutside={(event) => event.preventDefault()}
        className="top-2 w-[calc(100%-1rem)] max-w-[calc(100%-1rem)] -translate-y-0 border-none bg-transparent p-0 shadow-none max-h-[calc(100vh-0.75rem)] overflow-y-auto [&_[data-slot=dialog-close]]:z-20 [&_[data-slot=dialog-close]]:top-2.5 [&_[data-slot=dialog-close]]:right-2.5 [&_[data-slot=dialog-close]]:h-10 [&_[data-slot=dialog-close]]:w-10 [&_[data-slot=dialog-close]]:rounded-full [&_[data-slot=dialog-close]]:border [&_[data-slot=dialog-close]]:border-[#D7DFEA] [&_[data-slot=dialog-close]]:bg-white [&_[data-slot=dialog-close]]:text-[#0F172A] [&_[data-slot=dialog-close]]:opacity-100 [&_[data-slot=dialog-close]]:shadow-[0_6px_18px_rgba(0,0,0,0.22)] [&_[data-slot=dialog-close]]:ring-1 [&_[data-slot=dialog-close]]:ring-black/5 [&_[data-slot=dialog-close]]:flex [&_[data-slot=dialog-close]]:items-center [&_[data-slot=dialog-close]]:justify-center [&_[data-slot=dialog-close]]:p-0 [&_[data-slot=dialog-close]>svg]:h-[22px] [&_[data-slot=dialog-close]>svg]:w-[22px] [&_[data-slot=dialog-close]>svg]:stroke-[2.5] sm:top-[50%] sm:w-[94vw] sm:max-w-[1100px] sm:-translate-y-1/2 sm:max-h-[calc(100vh-2rem)] sm:[&_[data-slot=dialog-close]]:top-4 sm:[&_[data-slot=dialog-close]]:right-4 sm:[&_[data-slot=dialog-close]]:h-10 sm:[&_[data-slot=dialog-close]]:w-10 sm:[&_[data-slot=dialog-close]>svg]:h-5 sm:[&_[data-slot=dialog-close]>svg]:w-5 sm:[&_[data-slot=dialog-close]>svg]:stroke-[2.4]"
      >
        <DialogTitle className="sr-only">Máš na to u nás pracovat? Ověř si to!</DialogTitle>
        <DialogDescription className="sr-only">
          Náborový formulář DOMIDOMI pro rezervaci termínu pohovoru.
        </DialogDescription>
        <RecruitmentForm />
      </DialogContent>
    </Dialog>
  );
};
