import * as React from 'react'
import { cn } from '../../utils/cn'
import './Button.css'

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost' | 'destructive'
type ButtonSize = 'sm' | 'md' | 'lg' | '40' | '44' | '50' | '62' | 'square-40' | 'square-44' | 'square-50' | 'square-62'

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant
  size?: ButtonSize
  isLoading?: boolean
  leftIcon?: React.ReactNode
  leftIconDark?: React.ReactNode
  rightIcon?: React.ReactNode
}

const base =
  'vorn-button inline-flex cursor-pointer items-center justify-center gap-2 rounded-full font-medium transition-[transform,box-shadow,filter,border-color,background-color,color] duration-200 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary)]/40 disabled:opacity-50 disabled:pointer-events-none motion-reduce:transition-none'

const variants: Record<ButtonVariant, string> = {
  primary: 'vorn-button-primary-bg text-white',
  secondary: 'vorn-button-secondary-bg text-secondary',
  outline: 'vorn-button-outline border border-gray/60 text-outline',
  ghost: 'vorn-button-ghost bg-transparent text-[var(--color-text)]',
  destructive: 'vorn-button-destructive bg-red-600 text-white',
}

const sizes: Record<ButtonSize, string> = {
  '40': 'h-10 px-[17px] text-[16px]',
  '44': 'h-11 px-[32px] text-[14px]',
  '50': 'h-12 px-[20px] text-[16px]',
  '62': 'h-13 px-[32px] text-[20px]',
  'square-40': 'ratio-square px-0 h-10 w-10',
  'square-44': 'ratio-square px-0 h-11 w-11',
  'square-50': 'ratio-square px-0 h-12 w-12',
  'square-62': 'ratio-square px-0 h-13 w-13',
  sm: 'h-9 px-[17px] text-[16px]',
  md: 'h-10 px-[17px] text-[16px]',
  lg: 'h-11 px-[17px] text-[16px]',
}

export function Button({
  className,
  variant = 'primary',
  size = '40',
  isLoading = false,
  leftIcon,
  leftIconDark,
  rightIcon,
  disabled,
  children,
  ...props
}: ButtonProps) {
  const leftSlot = isLoading ? (
    <span
      className="vorn-button__spinner"
      aria-hidden="true"
    />
  ) : (
    leftIcon
  )

  return (
    <button
      {...props}
      className={cn(base, variants[variant], sizes[size], className)}
      disabled={disabled || isLoading}
      aria-busy={isLoading || undefined}
    >
      {leftSlot || leftIconDark ? (
        leftIconDark && !isLoading ? (
          <span
            className="vorn-button__icon vorn-button__icon--left vorn-button__icon-swap"
            aria-hidden="true"
          >
            <span className="vorn-button__icon-swap__light">{leftSlot}</span>
            <span className="vorn-button__icon-swap__dark">{leftIconDark}</span>
          </span>
        ) : (
          <span className="vorn-button__icon vorn-button__icon--left" aria-hidden="true">
            {leftSlot}
          </span>
        )
      ) : null}
      {children}
      {rightIcon ? (
        <span className="vorn-button__icon vorn-button__icon--right" aria-hidden="true">
          {rightIcon}
        </span>
      ) : null}
    </button>
  )
}

