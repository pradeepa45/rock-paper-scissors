import classNames from "classnames"
import React from "react"

interface ButtonProps {
  variant?: 'outline' | 'filled'
  link?: string
  success?: boolean
  children: React.ReactNode
  disabled?: boolean
  error?: boolean
  onClick?: VoidFunction
}

export default function Button({variant="filled", link, success, children, disabled, error, onClick}:ButtonProps) {
  const variantClasses = variant === 'outline' ? 'bg-transparent border border-white ' : 'bg-white'
  const successClasses = success ? 'text-xl text-green-500' : ''
  const errorClasses = error ? 'text-xl text-red-500' : ''
  const disabledClasses = disabled ? 'cursor-not-allowed opacity-50' : ''

  return (
    <button
    className={classNames(variantClasses, successClasses, errorClasses, disabledClasses, 'py-4 px-6 rounded-md')}
    disabled={disabled}
    onClick={onClick}
    >
      {children}
    </button>
  )


}