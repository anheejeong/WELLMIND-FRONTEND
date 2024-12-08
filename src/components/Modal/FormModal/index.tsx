import { ButtonHTMLAttributes, ReactElement, ReactNode } from 'react'

import { Disclosure } from '@headlessui/react'

interface FormModalProps {
  isOpen: boolean
  onClose: () => void
  icon: ReactElement
  title: string
  description: string
  children: ReactNode
  confirmButton: ReactNode
}

export const FormModal = ({
  isOpen,
  onClose,
  icon,
  title,
  description,
  children,
  confirmButton,
}: FormModalProps) => {
  return (
    <Disclosure
      as="div"
      className={`fixed inset-0 z-50 ${isOpen ? 'block' : 'hidden'}`}
    >
      <div
        className="fixed inset-0 bg-black-700 bg-opacity-30 z-40"
        onClick={onClose}
      ></div>
      <div className="flex items-center justify-center min-h-screen">
        <Disclosure.Panel
          static
          className="bg-white rounded-lg shadow-xl w-full max-w-md p-6 z-50"
        >
          <div className="flex flex-col items-start mb-4">
            <div className="bg-red-100 text-red-500 p-2 rounded-full mb-4">
              {icon}
            </div>
            <h2 className="text-lg font-semibold">{title}</h2>
            <p className="text-sm text-text_description mt-2">{description}</p>
          </div>

          <div className="mt-6">{children}</div>

          <div className="mt-6 flex justify-end gap-2">
            <button
              onClick={onClose}
              className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-200 rounded-md hover:bg-gray-300"
            >
              취소
            </button>
            {confirmButton}
          </div>
        </Disclosure.Panel>
      </div>
    </Disclosure>
  )
}

type FormConfirmModalButtonProps = ButtonHTMLAttributes<HTMLButtonElement>

export const FormConfirmModalButton = ({
  children,
  onClick,
}: FormConfirmModalButtonProps) => {
  return (
    <button
      onClick={onClick}
      className="px-4 py-2 text-sm font-medium text-white bg-primary rounded-md hover:bg-primary-dark w-full"
    >
      {children}
    </button>
  )
}
