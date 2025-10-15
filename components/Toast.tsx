import React from 'react';
import CheckCircleIcon from './icons/CheckCircleIcon';
import ExclamationCircleIcon from './icons/ExclamationCircleIcon';

interface ToastProps {
  message?: string;
  type?: 'success' | 'info';
  isVisible: boolean;
}

const Toast: React.FC<ToastProps> = ({ message, type = 'success', isVisible }) => {
  if (!isVisible) return null;

  const isSuccess = type === 'success';
  const bgColor = isSuccess ? 'bg-green-500' : 'bg-yudi-blue';
  const Icon = isSuccess ? CheckCircleIcon : ExclamationCircleIcon;

  return (
    <div
      className={`fixed top-4 left-1/2 -translate-x-1/2 w-auto max-w-sm px-4 py-3 text-white rounded-lg shadow-2xl flex items-center z-50 transition-transform transform ${
        isVisible ? 'translate-y-0 opacity-100' : '-translate-y-20 opacity-0'
      } ${bgColor}`}
      role="alert"
    >
      <Icon className="w-6 h-6 mr-3" />
      <span className="font-semibold">{message}</span>
    </div>
  );
};

export default Toast;
