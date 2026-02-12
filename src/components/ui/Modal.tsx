import React from "react";
import { AlertTriangle, X } from "lucide-react";
import { Button } from "./Button";

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm?: () => void;
  title: string;
  children: React.ReactNode;
  /**
   * When true, hide the default footer actions so the caller
   * can render custom buttons inside the children.
   */
  hideDefaultActions?: boolean;
  confirmLabel?: string;
  cancelLabel?: string;
}

export const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  onConfirm,
  title,
  children,
  hideDefaultActions,
  confirmLabel = "Confirm",
  cancelLabel = "Cancel",
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[999] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      ></div>

      {/* Modal Content */}
      <div className="relative bg-white border-4 border-black shadow-neo-lg w-full max-w-md animate-float">
        <div className="bg-maza-pink border-b-4 border-black p-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <AlertTriangle className="text-black" size={24} strokeWidth={2.5} />
            <h3 className="font-black text-xl uppercase">{title}</h3>
          </div>
          <button
            onClick={onClose}
            className="hover:rotate-90 transition-transform"
            aria-label="Close modal"
          >
            <X size={24} strokeWidth={3} />
          </button>
        </div>

        <div className="p-6">
          <div className="font-mono font-bold text-lg mb-6">{children}</div>

          {!hideDefaultActions && (
            <div className="flex gap-4">
              <Button
                variant="outline"
                className="flex-1"
                type="button"
                onClick={onClose}
              >
                {cancelLabel.toUpperCase()}
              </Button>
              {onConfirm && (
                <Button
                  variant="primary"
                  className="flex-1"
                  type="button"
                  onClick={onConfirm}
                >
                  {confirmLabel.toUpperCase()}
                </Button>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

